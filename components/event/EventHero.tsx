import React from 'react';

export default function EventHero() {
    const stats = [
        { num: '3', span: '+', label: 'Events hosted' },
        { num: '200', span: '+', label: 'Attendees' },
        { num: '12', span: '+', label: 'Partners' },
        { num: '2', label: 'Cities covered' }
    ];

    return (
        <section className="hero-event full-bleed-container px-8">
            <div className="hero-orb-1" />
            <div className="hero-orb-2" />
            <div className="hero-dots" />
            <div className="hero-content py-20">
                <div className="theme-eyebrow">
                    <div className="theme-eyebrow-line" />
                    <span className="theme-eyebrow-text text-[#C8923A]">SNL Events</span>
                </div>
                <h1 className="hero-title-event font-serif-theme text-white text-5xl md:text-7xl leading-tight">
                    Where execution<br />
                    <em>meets community.</em>
                </h1>
                <p className="hero-desc font-sans text-white/60 text-lg max-w-xl mt-6">
                    From high-impact training bootcamps to <strong>executive roundtables and industry summits</strong> — SNL Events bring together revenue professionals, founders, and commercial leaders across Nigeria.
                </p>

                <div className="hero-stats-row mt-12 border-t border-white/10 pt-6">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="hero-stat">
                            <div className="hero-stat-num font-serif-theme text-white text-4xl font-bold">
                                {stat.num}
                                {stat.span && <span className="text-[#C8923A] ml-0.5">{stat.span}</span>}
                            </div>
                            <div className="hero-stat-label text-xs text-white/40 tracking-wider uppercase mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}