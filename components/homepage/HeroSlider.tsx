'use client'
// components/homepage/HeroSlider.tsx — Premium Rewrite
// Navigation: arrows flank the dots, all centred at the bottom of the slide.
// Slide counter top-right. Animated progress bar at the very bottom edge.

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import styles from './HeroSlider.module.css'

interface SlideAction {
  label: string
  href: string
  variant: 'gold' | 'ghost-w' | 'purple'
  external?: boolean
}

interface Stat {
  num: string
  label: string
  multiline?: boolean
}

interface Slide {
  id: number
  eyebrow: string
  title: string
  titleEm: string
  description: string
  actions: SlideAction[]
  stats: Stat[]
  className: string
}

const SLIDES: Slide[] = [
  {
    id: 1,
    eyebrow: 'Sales-as-a-Service',
    title: 'Your revenue engine,',
    titleEm: 'fully deployed.',
    description:
      'SNL Services designs, deploys, and operates commercial engines for organisations that refuse to leave growth to chance. We execute. You scale.',
    actions: [
      { label: 'Partner With SNL', href: 'https://forms.gle/GFZbTbU5xXoXVAkD8', variant: 'gold', external: true },
      { label: 'How It Works', href: '/services', variant: 'ghost-w' },
    ],
    stats: [
      { num: '15+', label: 'Years of enterprise leadership' },
      { num: '4', label: 'Big-name global brands' },
    ],
    className: 's1',
  },
  {
    id: 2,
    eyebrow: 'SNL Academy',
    title: 'Train your team.',
    titleEm: 'Empower founders.',
    description:
      'Execution-grade sales training and SME accelerator programmes. 13 courses. 5 certifications. Built by operators, not academics.',
    actions: [
      { label: 'Explore Academy', href: '/academy', variant: 'gold' },
      { label: 'View Courses', href: '/academy', variant: 'ghost-w' },
    ],
    stats: [
      { num: '13', label: 'Courses available' },
      { num: '5', label: 'Professional certifications' },
    ],
    className: 's2',
  },
  {
    id: 3,
    eyebrow: 'Market Entry Experts',
    title: 'Africa. Global markets.',
    titleEm: 'Real execution.',
    description:
      'Led by Sophia Sankey — 15+ years at Microsoft, Oracle, Huawei & Heirs. We navigate complex markets and deliver measurable revenue outcomes.',
    actions: [
      { label: 'Meet Our Founder', href: '/about', variant: 'ghost-w' },
      { label: 'Start a Conversation', href: '/contact-us', variant: 'gold' },
    ],
    stats: [
      { num: 'Microsoft\nOracle\nHuawei', label: 'Leadership pedigree', multiline: true },
    ],
    className: 's3',
  },
]

const TOTAL = SLIDES.length
const AUTO_INTERVAL = 5_000

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [progressKey, setProgressKey] = useState(0) // forces progress bar restart
  const currentRef = useRef(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const touchStartX = useRef(0)

  const prefersReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false

  const goTo = useCallback((index: number) => {
    const next = ((index % TOTAL) + TOTAL) % TOTAL
    currentRef.current = next
    setCurrent(next)
    setProgressKey((k) => k + 1)
  }, [])

  const advance = useCallback(() => goTo(currentRef.current + 1), [goTo])

  const startTimer = useCallback(() => {
    if (prefersReducedMotion) return
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(advance, AUTO_INTERVAL)
  }, [advance, prefersReducedMotion])

  useEffect(() => {
    startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [startTimer])

  const handleNext = () => { goTo(currentRef.current + 1); startTimer() }
  const handlePrev = () => { goTo(currentRef.current - 1); startTimer() }
  const handleDot = (idx: number) => { goTo(idx); startTimer() }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) diff > 0 ? handleNext() : handlePrev()
  }

  const padded = (n: number) => String(n).padStart(2, '0')

  return (
    <section
      className={styles.heroSlider}
      aria-roledescription="carousel"
      aria-label="SNL Services highlights"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Screen-reader live region */}
      <div aria-live="polite" aria-atomic="true" className={styles['sr-only']}>
        {`Slide ${current + 1} of ${TOTAL}: ${SLIDES[current].eyebrow}`}
      </div>

      {/* Slide counter top-right */}
      <div className={styles.slideCounter} aria-hidden="true">
        <span className={styles.slideCounterCurrent}>{padded(current + 1)}</span>
        <div className={styles.slideCounterBar}>
          <div
            className={styles.slideCounterFill}
            style={{ width: `${((current + 1) / TOTAL) * 100}%` }}
          />
        </div>
        <span>{padded(TOTAL)}</span>
      </div>

      {/* Slides */}
      {SLIDES.map((slide, idx) => {
        const isActive = idx === current
        return (
          <div
            key={slide.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${idx + 1} of ${TOTAL}: ${slide.eyebrow}`}
            aria-hidden={!isActive}
            className={`${styles.slide} ${styles[slide.className]} ${isActive ? styles.active : ''}`}
          >
            <div className={styles.slideBg} aria-hidden="true" />
            <div className={styles.slideOverlay} aria-hidden="true" />
            {idx === 0 && <div className={styles.pattern} aria-hidden="true" />}
            <div className={styles.slideLine} aria-hidden="true" />

            <div className={styles.slideContent}>
              <div className={styles.slideEyebrow}>{slide.eyebrow}</div>
              <h1>
                {slide.title}
                <br />
                <em>{slide.titleEm}</em>
              </h1>
              <p>{slide.description}</p>

              <div className={styles.slideActions}>
                {slide.actions.map((action) =>
                  action.external ? (
                    <a
                      key={action.label}
                      href={action.href}
                      className={`${styles.btn} ${styles[`btn-${action.variant}`]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={isActive ? 0 : -1}
                    >
                      {action.label}
                    </a>
                  ) : (
                    <Link
                      key={action.label}
                      href={action.href}
                      className={`${styles.btn} ${styles[`btn-${action.variant}`]}`}
                      tabIndex={isActive ? 0 : -1}
                    >
                      {action.label}
                    </Link>
                  )
                )}
              </div>
            </div>

            <div className={styles.slideRight} aria-hidden="true">
              {slide.stats.map((stat) => (
                <div key={stat.label} className={styles.slideStatCard}>
                  <div
                    className={styles.statNum}
                    style={stat.multiline ? { fontSize: '20px', lineHeight: '1.5', whiteSpace: 'pre-line' } : undefined}
                  >
                    {stat.num}
                  </div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )
      })}

      {/* ── Bottom controls: [←] [• • •] [→] centred ── */}
      <div className={styles.sliderControls}>
        <button
          className={styles.sliderArrow}
          onClick={handlePrev}
          aria-label="Previous slide"
        >
          ←
        </button>

        <div className={styles.sliderDots} role="tablist" aria-label="Slide indicators">
          {SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              role="tab"
              aria-selected={idx === current}
              aria-label={`Go to slide ${idx + 1}: ${slide.eyebrow}`}
              className={`${styles.dot} ${idx === current ? styles.dotActive : ''}`}
              onClick={() => handleDot(idx)}
            />
          ))}
        </div>

        <button
          className={styles.sliderArrow}
          onClick={handleNext}
          aria-label="Next slide"
        >
          →
        </button>
      </div>

      {/* Progress bar */}
      <div className={styles.progressBar} aria-hidden="true">
        <div
          key={progressKey}
          className={styles.progressFill}
          style={{ width: prefersReducedMotion ? '100%' : '100%' }}
        />
      </div>
    </section>
  )
}