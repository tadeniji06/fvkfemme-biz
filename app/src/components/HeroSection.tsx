'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Play } from 'lucide-react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const handleScroll = () => {
    document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero} id="hero">
      {/* Background Image */}
      <div className={styles.bg}>
        <Image
          src="/images/i1.jpg"
          alt="Female boxers in action"
          fill
          priority
          className={styles.bgImage}
          sizes="100vw"
        />
        <div className={styles.bgOverlay} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.tag}>
            <span className={styles.tagDot} />
            Women&apos;s Boxing Platform
          </div>

          <h1 className={styles.headline}>
            Her Ring.<br />
            Her Record.<br />
            <span className={styles.accent}>Her Legacy.</span>
          </h1>

          <p className={styles.subhead}>
            The professional home for upcoming and elite female boxers worldwide. Log your fights, track rankings, earn achievements, and build your name.
          </p>

          <div className={styles.ctas}>
            <Link href="/auth/signin" className="btn btn-primary btn-lg">
              Join FemmeBiz
              <ArrowRight size={18} strokeWidth={2.5} />
            </Link>
            <Link href="/rankings" className="btn btn-outline-white btn-lg">
              View Rankings
            </Link>
          </div>

          {/* Live badge */}
          <div className={styles.liveBadge}>
            <span className={styles.liveDot} />
            <span>12 fighters ranked globally</span>
          </div>
        </div>

        {/* Side card */}
        <div className={styles.sideCard}>
          <div className={styles.sideCardInner}>
            <div className={styles.sideTop}>
              <span className={styles.sideLabel}>TOP RANKED</span>
              <span className={styles.sideTier}>ELITE</span>
            </div>
            <p className={styles.sideName}>Aisha Okonkwo</p>
            <p className={styles.sideNick}>&ldquo;The Storm&rdquo;</p>
            <div className={styles.sideRecord}>
              <div className={styles.sideRecordItem}>
                <span>18</span><span>W</span>
              </div>
              <div className={styles.sideRecordSep} />
              <div className={styles.sideRecordItem}>
                <span>1</span><span>L</span>
              </div>
              <div className={styles.sideRecordSep} />
              <div className={styles.sideRecordItem}>
                <span>12</span><span>KO</span>
              </div>
            </div>
            <div className={styles.sideXP}>
              <div className={styles.sideXPLabel}>
                <span>Lvl 94</span>
                <span>9,400 XP</span>
              </div>
              <div className={styles.sideXPTrack}>
                <div className={styles.sideXPFill} style={{ width: '40%' }} />
              </div>
            </div>
            <Link href="/fighters/aisha-okonkwo" className={styles.sideLink}>
              View Profile <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button className={styles.scrollBtn} onClick={handleScroll} aria-label="Scroll to content">
        <ChevronDown size={20} strokeWidth={2} />
      </button>
    </section>
  );
}
