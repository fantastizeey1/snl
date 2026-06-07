// components/layout/Header.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'

const navLinks = [
  { label: 'About', href: '/about-us' },
  { label: 'Services', href: '/services' },
  { label: 'Event', href: '/event' },
  { label: 'Academy', href: '/academy' },
  { label: 'Contact Us', href: '/contact-us' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 1024) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>

          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo.jpeg"
              alt="SNL Services"
              width={130}
              height={45}
              priority
              className={styles.logoImg}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.nav} aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Premium Call to Action */}
          <div className={styles.cta}>
            <Link href="/contact-us" className={styles.ctaBtn}>
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerActive : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </button>
        </div>
      </header>

      {/* Premium Mobile Navigation Drawer */}
      <div
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className={styles.drawerBrand}>
          <span className="serif font-bold text-[20px] tracking-tight text-[var(--pur)]">SNL Services</span>
        </div>

        <nav className={styles.drawerNav}>
          {navLinks.map((link, idx) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.drawerLink}
              onClick={() => setMenuOpen(false)}
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <span className={styles.drawerLinkLabel}>{link.label}</span>
              <svg className={styles.drawerArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          ))}

          <Link
            href="/contact-us"
            className={styles.drawerCta}
            onClick={() => setMenuOpen(false)}
          >
            Get in Touch
          </Link>
        </nav>
      </div>

      {/* Soft overlay backdrop */}
      {menuOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}