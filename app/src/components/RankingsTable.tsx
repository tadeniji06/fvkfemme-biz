'use client';

import Link from 'next/link';
import Image from 'next/image';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import type { Fighter } from '@/types';
import styles from './RankingsTable.module.css';

interface RankingsTableProps {
  fighters: Fighter[];
}

export default function RankingsTable({ fighters }: RankingsTableProps) {
  return (
    <div className={styles.container}>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.thRank}>Rank</th>
              <th className={styles.thFighter}>Fighter</th>
              <th className={styles.thRecord}>Record</th>
              <th className={styles.thGym}>Gym</th>
              <th className={styles.thPoints}>Points</th>
            </tr>
          </thead>
          <tbody>
            {fighters.map((fighter) => {
              const RankIcon =
                fighter.rankChange > 0 ? TrendingUp :
                fighter.rankChange < 0 ? TrendingDown :
                Minus;

              const rankIconClass =
                fighter.rankChange > 0 ? styles.rankUp :
                fighter.rankChange < 0 ? styles.rankDown :
                styles.rankSame;

              return (
                <tr key={fighter.id} className={styles.row}>
                  <td className={styles.tdRank}>
                    <div className={styles.rankCell}>
                      <span className={styles.rankNum}>{fighter.rank}</span>
                      <div className={styles.rankChange}>
                        <RankIcon size={14} className={rankIconClass} strokeWidth={3} />
                        {fighter.rankChange !== 0 && (
                          <span className={rankIconClass}>{Math.abs(fighter.rankChange)}</span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className={styles.tdFighter}>
                    <Link href={`/fighters/${fighter.id}`} className={styles.fighterInfo}>
                      <div className={styles.avatar}>
                        <Image src={fighter.image} alt={fighter.name} fill className={styles.avatarImg} sizes="40px" />
                      </div>
                      <div>
                        <div className={styles.fighterName}>
                          {fighter.name}
                          <span className={styles.flag}>{fighter.flag}</span>
                        </div>
                        {fighter.nickname && (
                          <div className={styles.fighterNick}>&ldquo;{fighter.nickname}&rdquo;</div>
                        )}
                      </div>
                    </Link>
                  </td>
                  <td className={styles.tdRecord}>
                    <div className={styles.recordWrap}>
                      <span className={styles.w}>{fighter.wins}</span>-
                      <span className={styles.l}>{fighter.losses}</span>-
                      <span className={styles.d}>{fighter.draws}</span>
                      <span className={styles.ko}>({fighter.kos} KO)</span>
                    </div>
                  </td>
                  <td className={styles.tdGym}>{fighter.gym}</td>
                  <td className={styles.tdPoints}>
                    <span className={styles.pointsBadge}>{fighter.points.toLocaleString()}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
