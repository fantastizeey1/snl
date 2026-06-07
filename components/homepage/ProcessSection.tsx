// components/homepage/ProcessSection.tsx — L99 Premium Redesign
import styles from './ProcessSection.module.css'

interface Step {
  num: string
  title: string
  desc: string
  variant: 'purple' | 'gold'
}

const STEPS: Step[] = [
  {
    num: '01',
    title: 'Discovery & Diagnosis',
    desc: 'We map your market, buyers, and current commercial gaps to understand exactly where execution is breaking down.',
    variant: 'purple',
  },
  {
    num: '02',
    title: 'Playbook Design',
    desc: 'We build a documented sales methodology, ICP definitions, messaging framework, and pipeline stages.',
    variant: 'purple',
  },
  {
    num: '03',
    title: 'Team Deployment',
    desc: 'Your dedicated Sales Pod is onboarded, trained on your product, and begins executing within 2–4 weeks.',
    variant: 'gold',
  },
  {
    num: '04',
    title: 'Pipeline Activation',
    desc: 'Outbound, inbound, and CRM operations run in parallel. We fill and manage your pipeline systematically.',
    variant: 'purple',
  },
  {
    num: '05',
    title: 'Governance & Scale',
    desc: 'Weekly reporting, QA reviews, and quarterly strategy sessions keep execution accountable as you grow.',
    variant: 'purple',
  },
]

export default function ProcessSection() {
  return (
    <section className={styles.section} aria-labelledby="process-title">
      <div className={styles.sectionHead}>
        <div className="eyebrow">Our Process</div>
        <h2 id="process-title" className={styles.sectionTitle}>
          From first conversation to
          <br />
          <em>closed revenue</em>
        </h2>
        <p className={styles.sectionSub}>
          Five disciplined stages — each one building momentum toward a
          predictable, repeatable revenue engine.
        </p>
      </div>

      <div className={styles.processSteps} role="list">
        {STEPS.map((step) => (
          <div key={step.num} className={styles.processStep} role="listitem">
            {/* Ghost number watermark — architectural detail */}
            <span className={styles.stepGhostNum} aria-hidden="true">
              {step.num}
            </span>

            {/* Step badge */}
            <div
              className={`${styles.stepCircle} ${step.variant === 'gold' ? styles.gold : ''
                }`}
              aria-hidden="true"
            >
              {step.num}
            </div>

            {/* Text */}
            <div className={styles.stepBody}>
              <h4 className={styles.stepTitle}>{step.title}</h4>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA note */}
      <div className={styles.processNote}>
        <span className={styles.processNoteText}>
          Typical time to first pipeline activity
        </span>
        <span className={styles.processNoteHighlight}>2 – 4 weeks</span>
      </div>
    </section>
  )
}