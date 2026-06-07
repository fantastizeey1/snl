import React from 'react';
import Link from 'next/link';

export default function AboutCta() {
    return (
        <section className="bottom-cta-about">
            <div className="bottom-cta-inner">
                <span className="section-eyebrow">Ready to work together?</span>
                <h2 className="font-serif-about">Remove the execution<br /><em>constraint. Today.</em></h2>
                <p>Whether you need to transform a sales team, build pipeline discipline, or accelerate revenue — SNL Services is your execution partner.</p>
                <div className="flex justify-center gap-3.5 flex-wrap">
                    <Link href="/contact-us" className="cta-white">Get in touch</Link>
                    <Link href="/academy" className="cta-outline">Explore SNL Academy</Link>
                </div>
            </div>
        </section>
    );
}