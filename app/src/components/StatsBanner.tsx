'use client';

import { useEffect, useRef, useState } from 'react';
import { Users, Swords, Building2, Globe } from 'lucide-react';
import styles from './StatsBanner.module.css';

interface Stats {
  fighters: number;
  fights: number;
  gyms: number;
  countries: number;
}

interface StatsBannerProps {
  stats: Stats;
}

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

function StatItem({ value, label, icon: Icon, delay }: {
  value: number;
  label: string;
  icon: React.ElementType;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(value, 2000, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={styles.item}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={styles.iconWrap}>
        <Icon size={20} strokeWidth={2} />
      </div>
      <div className={styles.text}>
        <span className={styles.number}>{count.toLocaleString()}+</span>
        <span className={styles.label}>{label}</span>
      </div>
    </div>
  );
}

export default function StatsBanner({ stats }: StatsBannerProps) {
  return (
    <section className={styles.banner} id="stats">
      <div className="container">
        <div className={styles.grid}>
          <StatItem value={stats.fighters} label="Registered Fighters" icon={Users} delay={0} />
          <StatItem value={stats.fights} label="Fights Logged" icon={Swords} delay={100} />
          <StatItem value={stats.gyms} label="Affiliated Gyms" icon={Building2} delay={200} />
          <StatItem value={stats.countries} label="Countries Represented" icon={Globe} delay={300} />
        </div>
      </div>
    </section>
  );
}
