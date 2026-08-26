'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Trophy, User, ChevronDown, Mail, Phone, MapPin } from 'lucide-react';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Rankings', href: '/rankings' },
  { label: 'Fighters', href: '/fighters' },
  { label: 'Events', href: '/events' },
  { label: 'News', href: '/news' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navClass = [
    styles.nav,
    scrolled || !isHomePage ? styles.scrolled : styles.transparent,
  ].join(' ');

  return (
    <>
      <nav className={navClass} role="navigation" aria-label="Main navigation">
        {/* Top Contact Bar */}
        <div className={styles.topBar}>
          <div className={styles.topBarInner}>
            <div className={styles.contactInfo}>
              <a href="mailto:contact@femmebiz.com" className={styles.contactLink}>
                <Mail size={12} /> contact@femmebiz.com
              </a>
              <span className={styles.contactDivider}>|</span>
              <a href="tel:+1234567890" className={styles.contactLink}>
                <Phone size={12} /> +1 (800) 555-0199
              </a>
              <span className={styles.contactDivider}>|</span>
              <span className={styles.contactText}>
                <MapPin size={12} /> New York, NY
              </span>
            </div>
          </div>
        </div>

        <div className={styles.inner}>
          {/* Logo */}
          <Link href="/" className={styles.logo} aria-label="FemmeBiz Home">
            <div className={styles.logoIcon}>
              <Trophy size={18} strokeWidth={2.5} />
            </div>
            <span className={styles.logoText}>Femme<span className={styles.logoAccent}>Biz</span></span>
          </Link>

          {/* Desktop Nav */}
          <ul className={styles.links} role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={[styles.link, pathname === link.href ? styles.linkActive : ''].join(' ')}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className={styles.actions}>
            <Link href="/account" className={styles.accountBtn}>
              <User size={15} strokeWidth={2.5} />
              <span>My Account</span>
            </Link>
            <Link href="/auth/signin" className="btn btn-primary btn-sm">
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={styles.menuToggle}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={[styles.mobileMenu, menuOpen ? styles.mobileMenuOpen : ''].join(' ')} aria-hidden={!menuOpen}>
        <div className={styles.mobileInner}>
          <ul className={styles.mobileLinks}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={[styles.mobileLink, pathname === link.href ? styles.mobileLinkActive : ''].join(' ')}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.mobileCtas}>
            <Link href="/account" className={styles.mobileAccountBtn} onClick={() => setMenuOpen(false)}>
              <User size={16} strokeWidth={2.5} />
              My Account
            </Link>
            <Link href="/auth/signin" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)} aria-hidden="true" />
      )}
    </>
  );
}
