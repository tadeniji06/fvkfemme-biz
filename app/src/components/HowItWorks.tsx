'use client';

import { motion } from 'framer-motion';
import { UserPlus, Shield, Trophy } from 'lucide-react';
import styles from './HowItWorks.module.css';

const steps = [
  {
    icon: UserPlus,
    title: 'Create Your Profile',
    desc: 'Join the platform and set up your professional profile. Add your gym, weight class, and bio.',
    number: '01'
  },
  {
    icon: Shield,
    title: 'Log Your Fights',
    desc: 'Submit your professional bout results. Our team verifies every record for authenticity.',
    number: '02'
  },
  {
    icon: Trophy,
    title: 'Climb the Ranks',
    desc: 'Earn XP, unlock achievement badges, and climb the global rankings in your weight division.',
    number: '03'
  }
];

export default function HowItWorks() {
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
            Your Path to the Top
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Three simple steps to start building your professional legacy on FemmeBiz.
          </motion.p>
        </div>

        <div className={styles.grid}>
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              className={styles.step}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className={styles.number}>{step.number}</div>
              <div className={styles.iconWrap}>
                <step.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
