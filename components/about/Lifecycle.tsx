import React from 'react';

interface LifecycleItem {
    num: number;
    icon: React.ReactNode;
    title: string;
    desc: string;
}

export default function Lifecycle() {
    const lifecycleItems: LifecycleItem[] = [
        {
            num: 1,
            icon: (
                <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#7D3C98] fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
            ),
            title: 'Market entry',
            desc: 'Territory planning, ICP definition, go-to-market design'
        },
        {
            num: 2,
            icon: (
                <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#7D3C98] fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
            ),
            title: 'Prospecting',
            desc: 'Outbound strategy, SDR frameworks, appointment generation'
        },
        {
            num: 3,
            icon: (
                <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#7D3C98] fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
            ),
            title: 'Opportunity progression',
            desc: 'Qualification, pipeline management, deal reviews'
        },
        {
            num: 4,
            icon: (
                <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#7D3C98] fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            ),
            title: 'Deal governance',
            desc: 'Approval gates, escalation frameworks, risk mitigation'
        },
        {
            num: 5,
            icon: (
                <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#7D3C98] fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round">
                    <path d="M12 20V10M18 20V4M6 20v-4" />
                </svg>
            ),
            title: 'Revenue acceleration',
            desc: 'Forecasting, reporting, scale-up execution'
        }
    ];

    return (
        <section className="lifecycle">
            <div className="lifecycle-inner">
                <div className="lifecycle-header">
                    <span className="section-eyebrow">What we do</span>
                    <h2 className="section-title font-serif-about">The full revenue lifecycle.<br /><em>End to end.</em></h2>
                </div>
                <div className="lifecycle-track">
                    {lifecycleItems.map((item, idx) => (
                        <div key={idx} className="lifecycle-item">
                            <div className="lifecycle-dot">
                                <div className="lifecycle-step-num">{item.num}</div>
                                {item.icon}
                            </div>
                            <div className="lifecycle-title">{item.title}</div>
                            <div className="lifecycle-desc">{item.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}