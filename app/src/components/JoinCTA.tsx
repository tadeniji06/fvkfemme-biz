'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './JoinCTA.module.css';

export default function JoinCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <motion.div 
          className={styles.inner}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
        >
          <div className={styles.content}>
            <motion.h2 
              className={styles.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to Build Your Legacy?
            </motion.h2>
            <motion.p 
              className={styles.subtitle}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Join thousands of professional female boxers worldwide. Log your fights, track your progress, and get noticed by top promoters.
            </motion.p>
            <motion.div 
              className={styles.actions}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link href="/auth/signin" className="btn btn-primary btn-lg">
                Create Free Account
                <ArrowRight size={18} strokeWidth={2.5} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
