// components/homepage/MetricsSection.tsx — Server Component
import styles from './MetricsSection.module.css'

const METRICS = [
  {
    num: '15',
    suffix: '+',
    label: 'Years of combined enterprise sales leadership across the team',
  },
  {
    num: '13',
    suffix: '',
    label: 'Sales training courses available across two programme tracks',
  },
  {
    num: '5',
    suffix: '',
    label: 'Professional certifications earned by your team on completion',
  },
  {
    num: '4',
    suffix: '+',
    label: 'Tier-1 global enterprises where our leadership was forged',
  },
] as const

const CLIENT_SEGMENTS = [
  { emoji: '💻', title: 'Enterprise', subtitle: 'Tech & SaaS', accentColor: '#450065' },
  { emoji: '💰', title: 'Fintech', subtitle: 'Cybersecurity', accentColor: '#C8923A' },
  { emoji: '🌍', title: 'Multinationals', subtitle: 'Entering Africa', accentColor: '#6b009a' },
  { emoji: '🚀', title: 'SME Founders', subtitle: 'Scaling beyond solo', accentColor: '#C8923A' },
  { emoji: '📈', title: 'B2B Services', subtitle: 'Consulting firms', accentColor: '#450065' },
] as const

export default function MetricsSection() {
  return (
    <section className={styles.section} aria-labelledby="metrics-title">
      <div className={styles.sectionHead}>
        <div>
          <div className="eyebrow">By The Numbers</div>
          <h2 id="metrics-title" className={styles.sectionTitle}>
            Proven results,
            <br />
            <em>measurable impact</em>
          </h2>
        </div>
      </div>

      {/* Metric cards */}
      <div className={styles.metricsGrid}>
        {METRICS.map((m, idx) => (
          <div key={m.label} className={styles.metricCard}>
            {/* Subtle index line */}
            <div className={styles.metricIndex} aria-hidden="true">
              {String(idx + 1).padStart(2, '0')}
            </div>
            <div className={styles.metricNum} aria-label={`${m.num}${m.suffix}`}>
              {m.num}
              {m.suffix && <span className={styles.metricSuffix}>{m.suffix}</span>}
            </div>
            <div className={styles.metricLabel}>{m.label}</div>
            <div className={styles.metricBar} aria-hidden="true">
              <div className={styles.metricBarFill} />
            </div>
          </div>
        ))}
      </div>

      {/* Who We Serve */}
      <div className={styles.whoServeSection}>
        <div className={styles.whoServeHead}>
          <div className="eyebrow">Who We Serve</div>
          <p className={styles.whoServeSub}>
            From ambitious founders to multinational teams entering new markets.
          </p>
        </div>
        <div className={styles.clientGrid}>
          {CLIENT_SEGMENTS.map((seg) => (
            <div key={seg.title} className={styles.clientCard}>
              <div
                className={styles.clientAccent}
                style={{ background: seg.accentColor }}
                aria-hidden="true"
              />
              <div className={styles.clientEmoji} aria-hidden="true">{seg.emoji}</div>
              <div className={styles.clientTitle}>{seg.title}</div>
              <div className={styles.clientSubtitle}>{seg.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}