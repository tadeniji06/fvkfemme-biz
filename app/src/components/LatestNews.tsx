'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import type { NewsArticle } from '@/types';
import styles from './LatestNews.module.css';

interface LatestNewsProps {
  articles: NewsArticle[];
}

export default function LatestNews({ articles }: LatestNewsProps) {
  return (
    <section className="section bg-off-white">
      <div className="container">
        <div className={styles.header}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Latest News
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/news" className="btn btn-outline">
              View All News
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        <div className={styles.grid}>
          {articles.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Link href={`/news/${article.id}`} className={styles.card}>
                <div className={styles.imageWrap}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className={styles.category}>{article.category}</div>
                </div>
                <div className={styles.content}>
                  <div className={styles.meta}>
                    <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span className={styles.metaDot} />
                    <span className={styles.readTime}>
                      <Clock size={12} />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  <p className={styles.excerpt}>{article.excerpt}</p>
                  <span className={styles.readMore}>
                    Read Full Article <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
