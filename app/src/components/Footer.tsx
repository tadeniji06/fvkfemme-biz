import Link from 'next/link';
import { Trophy, Mail, ArrowUpRight, Hash, MessageCircle, PlayCircle } from 'lucide-react';
import styles from './Footer.module.css';

const footerLinks = {
  Platform: [
    { label: 'Rankings', href: '/rankings' },
    { label: 'Browse Fighters', href: '/fighters' },
    { label: 'Events', href: '/events' },
    { label: 'News', href: '/news' },
  ],
  Account: [
    { label: 'Sign In', href: '/auth/signin' },
    { label: 'My Dashboard', href: '/account' },
    { label: 'My Fight Record', href: '/account' },
    { label: 'Achievements', href: '/account' },
  ],
  Company: [
    { label: 'About FemmeBiz', href: '#' },
    { label: 'For Gyms', href: '#' },
    { label: 'For Promoters', href: '#' },
    { label: 'Contact', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topBar}>
        <div className="container">
          <p className={styles.ticker}>
            THE FUTURE OF WOMEN&apos;S BOXING IS HERE — THE FUTURE OF WOMEN&apos;S BOXING IS HERE — THE FUTURE OF WOMEN&apos;S BOXING IS HERE —&nbsp;
          </p>
        </div>
      </div>

      <div className={styles.main}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand */}
            <div className={styles.brand}>
              <Link href="/" className={styles.logo}>
                <div className={styles.logoIcon}>
                  <Trophy size={18} strokeWidth={2.5} />
                </div>
                <span className={styles.logoText}>Femme<span className={styles.logoAccent}>Biz</span></span>
              </Link>
              <p className={styles.tagline}>
                The professional home for upcoming and elite female boxers worldwide. Build your record. Climb the ranks. Own your legacy.
              </p>
              <div className={styles.socials}>
                <a href="#" aria-label="Instagram" className={styles.socialLink}>
                  <MessageCircle size={18} strokeWidth={1.8} />
                </a>
                <a href="#" aria-label="Twitter / X" className={styles.socialLink}>
                  <Hash size={18} strokeWidth={1.8} />
                </a>
                <a href="#" aria-label="YouTube" className={styles.socialLink}>
                  <PlayCircle size={18} strokeWidth={1.8} />
                </a>
                <a href="#" aria-label="Email" className={styles.socialLink}>
                  <Mail size={18} strokeWidth={1.8} />
                </a>
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className={styles.linkCol}>
                <h5 className={styles.colHeading}>{category}</h5>
                <ul className={styles.linkList}>
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={styles.footerLink}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter */}
            <div className={styles.newsletter}>
              <h5 className={styles.colHeading}>Stay in the Ring</h5>
              <p className={styles.newsletterText}>
                Fight news, rankings updates, and event alerts — straight to your inbox.
              </p>
              <div className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className={styles.emailInput}
                  aria-label="Email address for newsletter"
                />
                <button className={styles.subscribeBtn} aria-label="Subscribe">
                  <ArrowUpRight size={18} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              &copy; {new Date().getFullYear()} FemmeBiz. All rights reserved.
            </p>
            <div className={styles.legal}>
              <a href="#" className={styles.legalLink}>Privacy Policy</a>
              <a href="#" className={styles.legalLink}>Terms of Service</a>
              <a href="#" className={styles.legalLink}>Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
