import React from 'react';

export default function Comparison() {
    const traditional = [
        'Advice without accountability for outcomes',
        'Individual contributors without team governance',
        'No operating cadence or process infrastructure',
        'Pipeline visibility dependent on individual behaviour',
        'Knowledge exits with the person',
        'Disconnected from your commercial systems'
    ];

    const snl = [
        'Outcome-aligned — we succeed when you do',
        'Fully managed pods with built-in QA and reporting',
        'Documented playbooks, cadences, and governance built in',
        'Full pipeline visibility by design, not by request',
        'Institutional knowledge embedded in your systems',
        'CRM, forecasting, and sales ops as part of the engagement'
    ];

    return (
        <section className="compare">
            <div className="max-w-[1240px] mx-auto px-8">
                <div className="compare-head text-center">
                    <div className="eyebrow font-geist-mono text-center">Why SNL Services</div>
                    <h2 className="font-serif-display text-4xl mt-4 leading-tight">
                        Embedded execution partner <em>vs. traditional alternatives.</em>
                    </h2>
                </div>

                <div className="compare-grid">
                    <div className="compare-col">
                        <div className="head font-serif-display font-semibold text-lg text-[#15121b]">
                            <span className="dot"></span> Traditional sales consultancy or freelance resource
                        </div>
                        <ul>
                            {traditional.map((item, idx) => (
                                <li key={idx} className="border-b border-[#E8E2F0]">
                                    <span className="mark">✕</span>
                                    <span className="text-sm font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="compare-col is-feature">
                        <div className="head font-serif-display font-semibold text-[#ffffff] text-lg">
                            <span className="dot"></span> SNL Services — embedded revenue execution
                        </div>
                        <ul>
                            {snl.map((item, idx) => (
                                <li key={idx} className="border-b border-white/10">
                                    <span className="mark text-[#d9b577]">✓</span>
                                    <span className="text-sm font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}