// components/homepage/OffersSection.tsx — Server Component
import Link from 'next/link'
import styles from './OffersSection.module.css'

interface Offer {
  num: string
  tag: string
  tagVariant: 'gold' | 'purple'
  accentVariant: 'gold' | 'purple'
  title: string
  description: string
  features: string[]
  link: { label: string; href: string }
}

const OFFERS: Offer[] = [
  {
    num: '01',
    tag: 'Sales-as-a-Service',
    tagVariant: 'gold',
    accentVariant: 'gold',
    title: 'Your outsourced revenue engine',
    description:
      'We embed into your organisation as your commercial team — designing, deploying, and running your entire sales operation so you focus on what you do best.',
    features: [
      'Prospecting, qualification & deal management',
      'Dedicated Sales Pods (SDRs + AEs + Ops)',
      'CRM strategy & sales operations design',
      'Market entry execution for African markets',
      'Pipeline governance & weekly reporting',
    ],
    link: { label: 'Explore Sales Services', href: '/services' },
  },
  {
    num: '02',
    tag: 'SNL Academy',
    tagVariant: 'purple',
    accentVariant: 'purple',
    title: 'Build the commercial capability you need',
    description:
      "Execution-grade training for sales teams and founders. Two programme tracks built on SNL's proven commercial methodology — by operators, not academics.",
    features: [
      'Sales Execution Fundamentals (5-day cert.)',
      'Pipeline Management & Deal Governance',
      'SME Accelerator: From Idea to Revenue',
      'Financial Literacy for Founders',
      '13 courses across 5 certifications',
    ],
    link: { label: 'Explore the Academy', href: '/academy' },
  },
]

export default function OffersSection() {
  return (
    <section className={styles.section} aria-labelledby="offers-title">
      <div className={styles.sectionHead}>
        <div>
          <div className="eyebrow">What We Do</div>
          <h2 id="offers-title" className={styles.sectionTitle}>
            Two powerful ways we
            <br />
            <em>grow your revenue</em>
          </h2>
        </div>
        <p className={styles.sectionSub}>
          Whether you need us to run your sales engine or train your team to run
          it themselves — SNL Services delivers execution-grade results.
        </p>
      </div>

      <div className={styles.offersGrid}>
        {OFFERS.map((offer, idx) => (
          <div key={offer.num} className={`${styles.offerCard} ${idx === 0 ? styles.offerCardPrimary : ''}`}>
            {/* Top accent line */}
            <div className={`${styles.offerAccent} ${styles[`accent-${offer.accentVariant}`]}`} />

            {/* Large ghost number */}
            <div className={styles.offerNum} aria-hidden="true">{offer.num}</div>

            {/* Tag pill */}
            <span className={`${styles.offerTag} ${styles[`tag-${offer.tagVariant}`]}`}>
              {offer.tag}
            </span>

            <h3 className={styles.offerCardTitle}>{offer.title}</h3>
            <p className={styles.offerCardDesc}>{offer.description}</p>

            <ul className={styles.offerFeatures} aria-label="Key features">
              {offer.features.map((feat) => (
                <li key={feat}>{feat}</li>
              ))}
            </ul>

            <Link href={offer.link.href} className={styles.offerLink}>
              <span>{offer.link.label}</span>
              <span className={styles.offerLinkArrow} aria-hidden="true">→</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}