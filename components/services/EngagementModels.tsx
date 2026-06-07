import React from 'react';

interface ModelCard {
    isFeature?: boolean;
    recommended?: boolean;
    icon: React.ReactNode;
    label: string;
    title: string;
    copy: string;
    features: string[];
}

export default function EngagementModels() {
    const models: ModelCard[] = [
        {
            label: 'Project-based',
            title: 'Defined scope engagement',
            copy: 'For specific, bounded outcomes — CRM design, playbook development, market entry intelligence, or a single training cohort.',
            features: ['Fixed deliverables', 'Clear milestones', 'Time-bound'],
            icon: (
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <rect x="3" y="4" width="18" height="14" rx="2" />
                    <path d="M3 9h18M8 14h4" />
                </svg>
            )
        },
        {
            isFeature: true,
            recommended: true,
            label: 'Retained partnership',
            title: 'Embedded execution partner',
            copy: 'An ongoing embedded engagement — we operate as part of your commercial organisation, iterating and scaling the revenue system together.',
            features: ['6–12 month terms', 'Continuous iteration', 'Deepest integration'],
            icon: (
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M12 2L4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4z" />
                    <path d="M9 12l2 2 4-4" />
                </svg>
            )
        },
        {
            label: 'Training-led',
            title: 'Certification programme',
            copy: "Structured capability building for sales teams and founders through SNL Academy — per-seat, bootcamp, or licensed curriculum.",
            features: ['Per-seat or cohort', 'SNL certified', 'Annual renewal'],
            icon: (
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <circle cx="9" cy="8" r="3" />
                    <circle cx="17" cy="10" r="2.2" />
                    <path d="M3 20c0-3 3-5 6-5s6 2 6 5M14 20c0-2 1.5-3.5 3-3.5s3 1.5 3 3.5" />
                </svg>
            )
        }
    ];

    return (
        <section className="models">
            <div className="max-w-[1240px] mx-auto px-8">
                <div className="section-head">
                    <div className="title">
                        <div className="eyebrow font-geist-mono mb-6">How We Engage</div>
                        <h2 className="font-serif-display text-4xl leading-tight">Flexible models. <span className="serif-i">Consistent standards.</span></h2>
                    </div>
                    <p className="copy text-sm leading-relaxed mt-6">
                        Three commercial models for engaging with SNL Services. Whichever model fits your stage, the execution standard does not change.
                    </p>
                </div>

                <div className="models-grid">
                    {models.map((model, idx) => (
                        <div key={idx} className={`model-card ${model.isFeature ? 'is-feature' : ''}`}>
                            {model.recommended && <span className="recommended-pill font-geist-mono">Recommended</span>}
                            <div className="icon-square">
                                {model.icon}
                            </div>
                            <div className="label font-geist-mono">{model.label}</div>
                            <h3 className="font-serif-display text-xl font-bold">{model.title}</h3>
                            <p className="copy">{model.copy}</p>
                            <ul className="features">
                                {model.features.map((feat, fIdx) => (
                                    <li key={fIdx}>{feat}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}