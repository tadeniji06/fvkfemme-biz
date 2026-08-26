'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Fighter } from '@/types';
import FighterCard from './FighterCard';
import styles from './FeaturedFighters.module.css';

interface FeaturedFightersProps {
  fighters: Fighter[];
}

export default function FeaturedFighters({ fighters }: FeaturedFightersProps) {
  return (
    <section className="section bg-black dark-section">
      <div className="container">
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Elite Roster</h2>
            <p className={styles.subtitle}>
              The highest ranked fighters on the platform. Watch them climb.
            </p>
          </div>
          <Link href="/rankings" className="btn btn-outline-white">
            View All Rankings
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.grid}>
          {fighters.map((fighter, i) => (
            <div key={fighter.id} className={styles.cardWrapper} style={{ animationDelay: `${i * 100}ms` }}>
              <FighterCard fighter={fighter} variant={i === 0 ? 'featured' : 'default'} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
