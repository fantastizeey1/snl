import React from 'react';

interface PillarData {
    num: string;
    icon: React.ReactNode;
    title: string;
    desc: string;
}

export default function Pillars() {
    const pillarsList: PillarData[] = [
        {
            num: '01',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="#7D3C98" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
            ),
            title: 'Execution‑first',
            desc: 'Strategy without execution is noise. Every engagement we undertake is built around delivering measurable commercial outcomes — not frameworks on paper, but discipline in practice. We are judged by what changes, not what we recommend.'
        },
        {
            num: '02',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="#7D3C98" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            ),
            title: 'Trust‑anchored',
            desc: "We operate as an extension of our clients' organisations. That means earning deep trust — in our judgement, our discretion, and our alignment with your commercial goals. Our reputation is built on relationships, not transactions."
        },
        {
            num: '03',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="#7D3C98" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
            ),
            title: 'Outcome‑aligned',
            desc: "We align our success to yours. Whether we're embedding inside your sales team, building pipeline discipline, or accelerating a founder's commercial engine — our objectives are always anchored to the revenue outcomes that matter to your business."
        }
    ];

    return (
        <section className="pillars">
            <div className="max-w-[1100px] mx-auto">
                <div className="pillars-header">
                    <span className="section-eyebrow">How we operate</span>
                    <h2 className="section-title font-serif-about">Three principles.<br /><em>One discipline.</em></h2>
                </div>
                <div className="pillars-grid">
                    {pillarsList.map((pillar, idx) => (
                        <div key={idx} className="pillar">
                            <div className="pillar-num font-serif-about">{pillar.num}</div>
                            <div className="pillar-icon">
                                {pillar.icon}
                            </div>
                            <h3 className="pillar-title font-serif-about">{pillar.title}</h3>
                            <p className="pillar-desc">{pillar.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}