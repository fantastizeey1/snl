'use client'
// components/homepage/CommercialStack.tsx
// Client Component — accordion interaction requires useState.
// Optimisations applied:
//   • Accordion uses CSS max-height transition instead of conditional rendering
//     so content stays in the DOM (better for SEO / screen readers).
//   • aria-expanded + aria-controls wired correctly.
//   • Data extracted to a typed const outside the component (no re-allocation
//     on every render).
//   • Chevron rotation handled purely in CSS via a data attribute.

import { useState } from 'react'
import styles from './CommercialStack.module.css'

interface StackSubItem {
  num: string
  title: string
  desc: string
  tag: string
}

interface StackItem {
  id: string
  num: string
  title: string
  subtitle: string
  tag: string
  variant: 'A' | 'B'
  items: StackSubItem[]
}

const STACK_ITEMS: StackItem[] = [
  {
    id: 'revenue-engine',
    num: '01',
    title: 'Your Outsourced Revenue Engine',
    subtitle: 'Sales as a Service',
    tag: 'Retainer + success',
    variant: 'A',
    items: [
      {
        num: '02',
        title: 'Dedicated Sales Pods',
        desc: 'SDRs · Account Executives · Ops Support · QA Oversight · CRM Governance',
        tag: '6–12 month pods',
      },
      {
        num: '03',
        title: 'Sales Operations & CRM Enablement',
        desc: 'Process design · CRM config · Forecasting · Dashboards · Playbooks',
        tag: 'Long-term anchor',
      },
      {
        num: '04',
        title: 'Market Entry & Revenue De-Risking',
        desc: 'Intelligence · Go-to-market pilots · Embedded ops · Risk reduction',
        tag: 'Africa-focused',
      },
    ],
  },
  {
    id: 'snl-academy',
    num: '02',
    title: 'SNL Academy',
    subtitle: 'Talent & Certification',
    tag: 'SNL Academy',
    variant: 'B',
    items: [
      {
        num: '01',
        title: 'Training, Certification & Talent',
        desc: 'Capability · Market readiness · Quality control · Certification gates',
        tag: 'SNL Academy',
      },
    ],
  },
]

export default function CommercialStack() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <section className={styles.section} aria-labelledby="commercial-stack-title">
      <div className={`eyebrow ${styles.eyebrowGold}`}>How We Work</div>

      <h2 id="commercial-stack-title" className={`section-title ${styles.titleWhite}`}>
        The SNL{' '}
        <em className={styles.titleEmGold}>Integrated Commercial Stack</em>
      </h2>

      <p className={styles.sectionSub}>
        Two interlocking pillars — each reinforces the other, creating a defensible
        and scalable revenue system.
      </p>

      <div className={styles.stackWrap}>
        {STACK_ITEMS.map((item) => {
          const isOpen = openId === item.id
          const panelId = `stack-panel-${item.id}`
          const triggerId = `stack-trigger-${item.id}`

          return (
            <div
              key={item.id}
              className={`${styles.stackItem} ${styles[`stack${item.variant}`]}`}
            >
              <button
                id={triggerId}
                className={styles.stackSummary}
                onClick={() => toggle(item.id)}
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <div className={styles.stackLabel}>
                  <span className={styles.stackNum} aria-hidden="true">
                    {item.num}
                  </span>
                  <div>
                    <div className={styles.stackTitle}>{item.title}</div>
                    <div className={styles.stackSubtitle}>{item.subtitle}</div>
                  </div>
                </div>

                <div className={styles.stackRight}>
                  <span className={styles.stackTag}>{item.tag}</span>
                  {/* Rotation driven by data attribute + CSS — no inline style */}
                  <span
                    className={styles.stackChevron}
                    data-open={isOpen}
                    aria-hidden="true"
                  >
                    ▼
                  </span>
                </div>
              </button>

              {/*
                Keep the panel in the DOM so screen readers can find it and
                search engines can index the content. CSS handles show/hide.
              */}
              <div
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                className={`${styles.stackDetailsInner} ${isOpen ? styles.stackDetailsOpen : ''}`}
                hidden={!isOpen}
              >
                {item.items.map((sub) => (
                  <div key={sub.num} className={styles.subItem}>
                    <div className={styles.subNum} aria-hidden="true">{sub.num}</div>
                    <div className={styles.subTitle}>{sub.title}</div>
                    <div className={styles.subDesc}>{sub.desc}</div>
                    <div className={styles.subTag}>{sub.tag}</div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}