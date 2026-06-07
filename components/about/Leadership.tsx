import React from 'react';
import Image from 'next/image';

export default function Leadership() {
    return (
        <section className="leadership">
            <div className="leadership-inner">
                <div className="leadership-text">
                    <span className="section-eyebrow">Leadership</span>
                    <h2 className="section-title font-serif-about">Built by practitioners,<br /><em>for practitioners.</em></h2>
                    <p>SNL Services is led by Sophia Sankey, Founder and CEO — a revenue leader with deep experience across enterprise sales, commercial transformation, and team-building in high-growth organisations.</p>
                    <p>The business was founded on a simple conviction: that the gap between commercial ambition and commercial execution is closeable — with the right frameworks, the right discipline, and the right partner alongside you.</p>
                </div>

                <div className="leader-card">
                    <div className="leader-avatar relative overflow-hidden">
                        <Image
                            src="/images/sophia-full.jpg"
                            alt="Sophia Sankey"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="leader-name font-serif-about">Sophia Sankey</div>
                    <div className="leader-title">Founder &amp; Chief Executive Officer</div>
                    <blockquote className="leader-quote font-serif-about">
                        "The organisations that win are not those with the best product. They are the ones that execute with the most discipline, the most visibility, and the most trust."
                    </blockquote>
                    <div className="leader-tags">
                        <span className="leader-tag">Revenue execution</span>
                        <span className="leader-tag">Commercial strategy</span>
                        <span className="leader-tag">Sales leadership</span>
                        <span className="leader-tag">Team development</span>
                    </div>
                </div>
            </div>
        </section>
    );
}