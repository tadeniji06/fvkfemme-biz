'use client';

import { motion } from 'framer-motion';
import { Trophy, TrendingUp, CalendarDays, ShieldCheck, PlayCircle, Target } from 'lucide-react';
import styles from './FeaturesSection.module.css';

const features = [
  {
    icon: Trophy,
    title: 'Global Rankings',
    description: 'Real-time updated leaderboards across all 18 weight classes. See where you stand against the best.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Records',
    description: 'Every bout is authenticated. Build a flawless professional record that promoters trust.',
  },
  {
    icon: TrendingUp,
    title: 'Level & Progression',
    description: 'Earn XP for fights, wins, and activity. Unlock achievements and rise from Bronze to Elite tier.',
  },
  {
    icon: CalendarDays,
    title: 'Fight Calendar',
    description: 'Discover upcoming events, find opponents, and never miss a major card in women\'s boxing.',
  },
  {
    icon: PlayCircle,
    title: 'Fight Library',
    description: 'Upload your fight tape. Let coaches, fans, and promoters watch your best performances.',
  },
  {
    icon: Target,
    title: 'Gym Network',
    description: 'Connect with elite boxing gyms worldwide. Find the right team to take your career to the next level.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className={styles.header}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Everything a Fighter Needs
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            More than just a record keeper. FemmeBiz is the complete ecosystem for the modern female boxer to manage her career and build her brand.
          </motion.p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, i) => (
            <motion.div 
              key={i} 
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={styles.iconWrap}>
                <feature.icon size={24} strokeWidth={2} />
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
