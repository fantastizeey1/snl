// components/CTA.tsx — L99 Premium Redesign
import Link from 'next/link'
import styles from './CTA.module.css'

export default function FooterCTA() {
  return (
    <>
      {/* ── Closing Position CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaLabel}>Closing Position</div>

        <h2>
          Turning sales intent into{' '}
          <em>predictable revenue</em>{' '}
          through disciplined execution.
        </h2>

        <p>
          For organisations that value outcomes over activity and systems
          over improvisation, SNL Services is the revenue execution
          partner of choice.
        </p>

        <div className={styles.ctaBtns}>
          <a
            href="https://forms.gle/nc13648CJVMdpg8N9"
            className={styles.btnWhite}
            target="_blank"
            rel="noopener noreferrer"
          >
            Partner With SNL Services
          </a>
        </div>
      </section>
    </>
  )
}