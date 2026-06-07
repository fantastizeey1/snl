// components/homepage/WhySection.tsx — L99 Premium Redesign
import styles from './WhySection.module.css'

// Icon components — crisp, 1.5 stroke weight
const IconActivity = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
)
const IconShield = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)
const IconGlobe = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10A15.3 15.3 0 0 1 8 12a15.3 15.3 0 0 1 4-10z" />
  </svg>
)
const IconUser = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)
const IconDollar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
)
const IconTrending = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
)

const whyCards = [
  {
    Icon: IconActivity,
    title: 'Execution, Not Just Strategy',
    desc: 'We design, deploy, and operate your commercial engine — accountable for revenue movement and measurable outcomes.',
  },
  {
    Icon: IconShield,
    title: 'Enterprise-Grade Governance',
    desc: 'Documented playbooks, standardised reporting, QA, and certified teams. We engineer trust through systems, not promises.',
  },
  {
    Icon: IconGlobe,
    title: 'Africa-Ready Market Expertise',
    desc: 'Deep roots across Nigerian and African markets. We navigate complex buyer relationships and market entry risk for you.',
  },
  {
    Icon: IconUser,
    title: 'Founder-Led, Operator-Built',
    desc: 'Led by Sophia Sankey — 15+ years at Microsoft, Oracle, Huawei & Heirs. Institutional capability, agile delivery.',
  },
  {
    Icon: IconDollar,
    title: 'Lower Risk Than Hiring In-House',
    desc: 'Get an entire commercial operation at a fraction of the cost of building one. No hiring risk, no onboarding lag.',
  },
  {
    Icon: IconTrending,
    title: 'Scale Follows Trust',
    desc: 'We deliver control and visibility first. Scale follows naturally as the system proves itself — repeatable and predictable.',
  },
]

const trustMechanisms = [
  'Documented Methodology',
  'Standardised Playbooks',
  'Transparent Reporting',
  'Quality Assurance',
  'Certified Execution Teams',
]

export default function WhySection() {
  return (
    <section className={styles.section}>
      <div className="eyebrow">Why SNL</div>
      <div className="section-title">
        Control, visibility, and
        <br />
        <em>accountable execution</em>
      </div>

      <div className={styles.whyGrid}>
        {whyCards.map(({ Icon, title, desc }, idx) => (
          <div key={title} className={styles.whyCard}>
            {/* Architectural card number */}
            <span className={styles.whyCardNum}>
              {String(idx + 1).padStart(2, '0')}
            </span>

            <div className={styles.whyIcon}>
              <Icon />
            </div>
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        ))}
      </div>

      {/* Trust Strip */}
      <div className={styles.trustSection}>
        <div className={`eyebrow ${styles.trustEyebrow}`}>
          Trust Is Engineered, Not Promised
        </div>
        <div className={styles.trustStrip}>
          {trustMechanisms.map((mechanism, idx) => (
            <div key={mechanism} className={styles.trustFlow}>
              <div
                className={`${styles.trustCard} ${idx === 2 ? styles.trustCardActive : ''
                  }`}
              >
                {mechanism}
              </div>
              {idx < trustMechanisms.length - 1 && (
                <div className={styles.trustArrow} aria-hidden="true">→</div>
              )}
            </div>
          ))}
        </div>
        <p className={styles.trustNote}>
          Every engagement governed by this framework — auditable at every stage
        </p>
      </div>
    </section>
  )
}