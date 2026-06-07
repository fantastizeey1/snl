import React from 'react';

export default function CompanyOverview() {
    return (
        <section className="overview" id="overview">
            <div className="overview-left">
                <div className="overview-section-label">Company overview</div>
                <h2 className="overview-heading font-serif-about">
                    Execution is<br />
                    <em>the constraint.</em><br />
                    We remove it.
                </h2>
                <span className="overview-tagline font-serif-about">Embedded. Accountable. Outcome-aligned.</span>
            </div>
            <div className="overview-right">
                <div className="overview-body">
                    <p>
                        <strong>SNL Services was created to solve a specific problem: the gap between commercial ambition and commercial execution.</strong> Most organisations have the product. Most have the market. What they lack is a repeatable, visible, scalable system for turning opportunity into revenue.
                    </p>
                    <p>
                        We function as an <strong>embedded revenue execution partner</strong> — operating as an extension of our clients' commercial organisations, not as a detached advisory practice. Our work spans the full revenue lifecycle: from market entry and prospecting through opportunity progression, deal governance, and revenue acceleration.
                    </p>
                    <p>
                        Our methodology is built on enterprise-grade frameworks refined across <em>technology, financial services, and telecommunications</em> — adapted for the realities of fast-growing organisations across the African market and beyond.
                    </p>
                    <p>
                        Our approach is <strong>execution‑first, trust‑anchored, and outcome‑aligned.</strong>
                    </p>
                </div>
            </div>
        </section>
    );
}