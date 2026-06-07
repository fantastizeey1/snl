import React from 'react';
import './services.css';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesIntro from '@/components/services/ServicesIntro';
import ServiceDeepDive, { ServiceDeepDiveProps } from '@/components/services/ServiceDeepDive';
import EngagementModels from '@/components/services/EngagementModels';
import Comparison from '@/components/services/Comparison';

export default function ServicesPage() {
    const saasProps: ServiceDeepDiveProps = {
        id: 'svc-saas',
        num: '01',
        eyebrow: 'Core Service · Outsourced Execution',
        title: 'Sales-as-a-Service.',
        leadText: (
            <>
                We provide <strong>fully outsourced sales execution</strong> across defined stages of the sales cycle. Our teams operate as structured revenue operators — the foot soldiers of business development — under documented playbooks and reporting standards. You get the output of a high-performing sales function without the overhead of building one.
            </>
        ),
        listLabel: "What's included",
        features: [
            { name: 'Prospecting and outbound engagement', duration: 'Full-funnel' },
            { name: 'Lead qualification against your ICP', duration: 'Weekly cadence' },
            { name: 'Appointment setting with decision-makers', duration: 'Quota-based' },
            { name: 'Opportunity progression and deal management', duration: 'Stage-gated' },
            { name: 'Optional deal closing (where appropriate)', duration: 'By scope' },
            { name: 'Documented playbooks and reporting standards', duration: 'Ongoing' }
        ],
        whoFor: 'Organisations that need sales execution capacity immediately — without the hiring cycle, onboarding curve, or fixed headcount risk of building internally.',
        aside: {
            modelTitle: 'Commercial Model',
            modelDesc: 'Hybrid retainer + success fee',
            lengthLabel: 'Engagement Length',
            lengthVal: '6–12 month minimum',
            tags: ['Enterprise SaaS', 'B2B Tech', 'Fintech']
        }
    };

    const podsProps: ServiceDeepDiveProps = {
        id: 'svc-pods',
        num: '02',
        isAlt: true,
        eyebrow: 'Core Service · Managed Teams',
        title: 'Dedicated Sales Pods.',
        leadText: (
            <>
                Rather than supplying individual salespeople, <strong>SNL Services deploys fully managed sales pods.</strong> This model productises Sales-as-a-Service for scale, consistency, and accountability. Each pod is configured for your market, your cycle, and your commercial ambitions — with management, QA, and reporting built in from day one.
            </>
        ),
        listLabel: 'Pod composition',
        features: [
            { name: 'Sales Development Representatives (SDRs)', duration: '2–4 per pod' },
            { name: 'Account Executives or senior sales operators', duration: '1–2 per pod' },
            { name: 'Sales operations and reporting support', duration: 'Embedded' },
            { name: 'Quality assurance oversight', duration: 'Weekly' },
            { name: 'CRM configuration and governance', duration: 'Continuous' }
        ],
        whoFor: 'A pod is not a staffing arrangement. It is a managed revenue unit with its own operating cadence, performance accountability, and quality governance — all owned by SNL Services on your behalf.',
        aside: {
            modelTitle: 'Commercial Model',
            modelDesc: '6–12 month subscription contracts',
            lengthLabel: 'Built For',
            lengthVal: 'Scale-stage operators',
            tags: ['Multi-market', 'Enterprise', 'High-velocity']
        }
    };

    const opsProps: ServiceDeepDiveProps = {
        id: 'svc-ops',
        num: '03',
        eyebrow: 'Core Service · Engine Design',
        title: 'Sales Operations & CRM Enablement.',
        leadText: (
            <>
                We design and operate the sales engine itself — <strong>independent of any single CRM vendor.</strong> We sell commercial intelligence and control, not software licences. This capability anchors long-term client relationships and ensures execution quality scales with growth. A well-designed revenue engine is the difference between a pipeline that is visible and one that is merely tracked.
            </>
        ),
        listLabel: 'Scope of work',
        features: [
            { name: 'Sales process and pipeline architecture', duration: 'Foundational' },
            { name: 'CRM selection, configuration, and optimisation', duration: 'Vendor-agnostic' },
            { name: 'Forecasting models and revenue reporting', duration: 'Monthly' },
            { name: 'Deal governance frameworks and approval gates', duration: 'Stage-gated' },
            { name: 'Performance dashboards and commercial reporting', duration: 'Live' },
            { name: 'Sales playbooks and operating cadences', duration: 'Quarterly review' }
        ],
        whoFor: 'Most sales failures are not strategy failures — they are operating system failures. We build the system that turns sales intent into predictable revenue.',
        aside: {
            modelTitle: 'Commercial Model',
            modelDesc: 'Long-term engagement anchor',
            lengthLabel: 'Typical Engagement',
            lengthVal: '12+ months',
            tags: ['All Industries', 'CRM Agnostic']
        }
    };

    const academyProps: ServiceDeepDiveProps = {
        id: 'svc-academy',
        num: '04',
        isAlt: true,
        eyebrow: 'Core Service · Capability Building',
        title: 'Training, Certification & Talent Infrastructure.',
        leadText: (
            <>
                <strong>This is not generic sales training.</strong> Our certification framework is designed to manufacture trust at scale by defining and enforcing execution standards. Certification serves as a quality gate for delivery teams, a credibility signal to enterprise clients, and a long-term talent and brand asset. Delivered through SNL Academy — 24 structured programmes across 5 specialist tracks.
            </>
        ),
        listLabel: 'Certification covers',
        features: [
            { name: 'Sales Training & Certification (advanced deal governance)', duration: '6 courses' },
            { name: 'SME Accelerator Programme (for founders & leads)', duration: '9 courses' },
            { name: 'Digital & AI for Business (practical tech)', duration: '3 courses' },
            { name: 'Financial Foundations & Money Management', duration: '4 courses' },
            { name: 'Markets & Trading (rule-based methodology)', duration: '2 courses' },
            { name: 'Corporate bootcamps and cohort programmes', duration: 'By cohort' }
        ],
        whoFor: 'SNL Academy is the training arm of SNL Services. All programmes are practitioner-designed, facilitator-led, and certification-accredited — available in-person or virtually.',
        aside: {
            modelTitle: 'Commercial Model',
            modelDesc: 'Per-seat training & certification',
            lengthLabel: 'Scale',
            lengthVal: '24 courses · 12 certifications',
            tags: ['In-Person', 'Virtual', 'Cohort']
        }
    };

    const marketProps: ServiceDeepDiveProps = {
        id: 'svc-market',
        num: '05',
        eyebrow: 'Core Service · New Markets',
        title: 'Market Entry & Revenue De-Risking.',
        leadText: (
            <>
                For organisations entering Africa or other complex markets, <strong>SNL Services delivers execution-led market entry programs</strong> — not advisory-only engagements. We go beyond the deck. Our market entry support is designed around three priorities: <strong>risk reduction, speed to revenue, and early commercial validation.</strong> We embed alongside your team so that insight translates directly into execution.
            </>
        ),
        listLabel: 'Programme components',
        features: [
            { name: 'Market intelligence and opportunity mapping', duration: 'Pre-entry' },
            { name: 'Go-to-market execution design', duration: 'Pre-launch' },
            { name: 'Local sales execution pilots', duration: 'Validated learning' },
            { name: 'Embedded sales operations support', duration: 'Continuous' },
            { name: 'ICP definition and territory planning for new markets', duration: 'Foundational' }
        ],
        whoFor: 'Organisations entering the African market, founders expanding into new geographies, and enterprise businesses seeking an execution-first approach to de-risking commercial expansion.',
        aside: {
            modelTitle: 'Commercial Model',
            modelDesc: 'Risk-reduction focused',
            lengthLabel: 'Engagement Type',
            lengthVal: 'Milestone-based',
            tags: ['Africa-focused', 'Cross-border']
        }
    };

    return (
        <>

            <main className="max-w-[1240px] mx-auto px-8 overflow-hidden">
                <ServicesHero />
                <ServicesIntro />
                <ServiceDeepDive {...saasProps} />
                <ServiceDeepDive {...podsProps} />
                <ServiceDeepDive {...opsProps} />
                <ServiceDeepDive {...academyProps} />
                <ServiceDeepDive {...marketProps} />
                <EngagementModels />
                <Comparison />
            </main>

        </>
    );
}