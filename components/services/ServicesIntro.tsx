'use client';

interface StackRow {
    num: string;
    title: string;
    sub: string;
    meta: string;
    targetId: string;
}

export default function ServicesIntro() {
    const stackRows: StackRow[] = [
        { num: '01', title: 'Sales-as-a-Service', sub: 'Fully outsourced sales execution under documented playbooks', meta: 'Outsourced execution', targetId: 'svc-saas' },
        { num: '02', title: 'Dedicated Sales Pods', sub: 'Managed revenue units — SDRs, AEs, ops, and QA in one structure', meta: 'Managed teams', targetId: 'svc-pods' },
        { num: '03', title: 'Sales Operations & CRM Enablement', sub: 'The engine itself — process, forecasting, dashboards, governance', meta: 'Engine design', targetId: 'svc-ops' },
        { num: '04', title: 'Training, Certification & Talent Infrastructure', sub: 'SNL Academy — 24 courses across 5 tracks, 12 certifications', meta: 'Capability building', targetId: 'svc-academy' },
        { num: '05', title: 'Market Entry & Revenue De-Risking', sub: 'Execution-led market entry programs — not advisory engagements', meta: 'New markets', targetId: 'svc-market' }
    ];

    const handleRowClick = (targetId: string) => {
        const el = document.getElementById(targetId);
        if (el) {
            const offset = el.offsetTop - 80;
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
    };

    return (
        <section className="intro">
            <div className="max-w-[1240px] mx-auto px-8">
                <div className="intro-grid">
                    <div className="head">
                        <div className="eyebrow font-geist-mono mb-6">Revenue Architecture</div>
                        <h2 className="font-serif-display text-4xl mb-6">Five services. <em>One revenue engine.</em></h2>
                        <p className="copy text-sm mb-6 leading-relaxed">
                            Most commercial engagements fail because they address one layer of the revenue system in isolation. A training programme without sales operations to reinforce it. A CRM without a team disciplined enough to use it. Outsourced SDRs without the deal governance to convert what they generate.
                        </p>
                        <p className="copy text-sm leading-relaxed">
                            SNL Services is designed differently. Our five service lines form a connected commercial architecture — deployable individually, but most powerful when operated as a unified stack under a single execution partner.
                        </p>
                    </div>

                    <div className="svc-stack">
                        {stackRows.map((row) => (
                            <div
                                key={row.num}
                                onClick={() => handleRowClick(row.targetId)}
                                className="svc-stack-row group"
                            >
                                <div className="marker font-geist-mono transition-all duration-200 group-hover:border-[#1a0028] group-hover:text-[#1a0028]">
                                    {row.num}
                                </div>
                                <div>
                                    <div className="title font-serif-display text-xl leading-normal">{row.title}</div>
                                    <div className="sub text-xs text-[#6b6471]">{row.sub}</div>
                                </div>
                                <div className="meta font-geist-mono text-xs text-[#8a6c3e]">{row.meta}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}