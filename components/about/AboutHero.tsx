import React from 'react';
import Link from 'next/link';

export default function AboutHero() {
    const stats = [
        { num: '13', span: '+', label: 'Training programmes across two specialised tracks' },
        { num: '3', span: '×', label: 'Industries served — technology, financial services, telecoms' },
        { num: '5', span: '', label: 'SNL certifications in pipeline, deal governance & sales execution' }
    ];

    return (
        <section className="hero-about">
            <div className="hero-pattern">
                <div className="hero-dots"></div>
                <div className="hero-line hero-line-1"></div>
                <div className="hero-line hero-line-2"></div>
                <div className="hero-line hero-line-3"></div>
            </div>

            <div className="hero-left">
                <div className="hero-eyebrow">
                    <div className="eyebrow-line"></div>
                    <span className="eyebrow-text">About SNL Services</span>
                </div>
                <h1 className="hero-title font-serif-about">
                    <em>Revenue execution,</em>
                    <strong>without</strong>
                    <strong>compromise.</strong>
                </h1>
                <div className="hero-statement">
                    <p>
                        We exist because <span className="accent">execution is the constraint</span> — and most organisations never fully remove it. SNL Services was built to change that.
                    </p>
                </div>
                <div className="hero-actions">
                    <a href="#overview" className="hero-btn-primary">Our story</a>
                    <Link href="/contact" className="hero-btn-ghost">Work with us</Link>
                </div>
            </div>

            <div className="hero-right">
                <div className="hero-stats">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="stat-item">
                            <div className="stat-number font-serif-about">
                                {stat.num}
                                {stat.span && <span>{stat.span}</span>}
                            </div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}