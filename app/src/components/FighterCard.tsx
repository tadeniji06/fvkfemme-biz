'use client';

import Image from 'next/image';
import Link from 'next/link';
import { TrendingUp, TrendingDown, Minus, Shield, Zap, Star, Flame } from 'lucide-react';
import type { Fighter } from '@/types';
import styles from './FighterCard.module.css';

interface FighterCardProps {
  fighter: Fighter;
  variant?: 'default' | 'compact' | 'featured';
}

const tierColors = {
  Bronze: styles.tierBronze,
  Silver: styles.tierSilver,
  Gold: styles.tierGold,
  Elite: styles.tierElite,
};

const achievementIcons: Record<string, React.ElementType> = {
  Flame, Zap, Star, Shield,
  Trophy: Shield,
  Target: Zap,
  Clock: Star,
};

export default function FighterCard({ fighter, variant = 'default' }: FighterCardProps) {
  const koPercent = fighter.wins > 0 ? Math.round((fighter.kos / fighter.wins) * 100) : 0;
  const xpPercent = (fighter.xp % 1000) / 10;

  const RankIcon =
    fighter.rankChange > 0 ? TrendingUp :
    fighter.rankChange < 0 ? TrendingDown :
    Minus;

  const rankIconClass =
    fighter.rankChange > 0 ? styles.rankUp :
    fighter.rankChange < 0 ? styles.rankDown :
    styles.rankSame;

  return (
    <Link href={`/fighters/${fighter.id}`} className={[styles.card, styles[variant]].join(' ')}>
      {/* Image */}
      <div className={styles.imageWrap}>
        <Image
          src={fighter.image}
          alt={fighter.name}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 400px"
        />
        <div className={styles.imageOverlay} />

        {/* Rank badge */}
        <div className={styles.rankBadge}>
          <span className={styles.rankNum}>#{fighter.rank}</span>
          <RankIcon size={12} strokeWidth={2.5} className={rankIconClass} />
        </div>

        {/* Tier badge */}
        <div className={[styles.tierBadge, tierColors[fighter.tier]].join(' ')}>
          {fighter.tier}
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.header}>
          <div>
            <div className={styles.meta}>
              <span className={styles.flag}>{fighter.flag}</span>
              <span className={styles.weightClass}>{fighter.weightClass}</span>
            </div>
            <h3 className={styles.name}>{fighter.name}</h3>
            {fighter.nickname && (
              <p className={styles.nickname}>&ldquo;{fighter.nickname}&rdquo;</p>
            )}
          </div>
        </div>

        {/* Record */}
        <div className={styles.record}>
          <div className={styles.recordItem}>
            <span className={styles.recordNum}>{fighter.wins}</span>
            <span className={styles.recordLabel}>W</span>
          </div>
          <div className={styles.recordDivider} />
          <div className={styles.recordItem}>
            <span className={[styles.recordNum, styles.loss].join(' ')}>{fighter.losses}</span>
            <span className={styles.recordLabel}>L</span>
          </div>
          <div className={styles.recordDivider} />
          <div className={styles.recordItem}>
            <span className={styles.recordNum}>{fighter.draws}</span>
            <span className={styles.recordLabel}>D</span>
          </div>
          <div className={styles.recordSep} />
          <div className={styles.recordItem}>
            <span className={styles.recordNum}>{koPercent}%</span>
            <span className={styles.recordLabel}>KO</span>
          </div>
        </div>

        {/* Gym */}
        <p className={styles.gym}>{fighter.gym}</p>

        {/* XP Bar */}
        <div className={styles.xpSection}>
          <div className={styles.xpLabel}>
            <span>Lvl {fighter.level}</span>
            <span>{fighter.xp.toLocaleString()} XP</span>
          </div>
          <div className={styles.xpTrack}>
            <div
              className={styles.xpFill}
              style={{ width: `${xpPercent}%` }}
              role="progressbar"
              aria-valuenow={xpPercent}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>

        {/* Achievements */}
        {fighter.achievements.length > 0 && (
          <div className={styles.achievements}>
            {fighter.achievements.slice(0, 3).map((ach) => {
              const Icon = achievementIcons[ach.icon] || Shield;
              return (
                <div key={ach.id} className={styles.achBadge} title={ach.title}>
                  <Icon size={12} strokeWidth={2.5} />
                </div>
              );
            })}
            {fighter.achievements.length > 3 && (
              <div className={styles.achMore}>+{fighter.achievements.length - 3}</div>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
