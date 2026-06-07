import React from 'react';

export default function PartnersStrip() {
    const partners = [
        { label: 'BC', name: 'Bellaz Connection' },
        { label: 'CN', name: 'CommonsNaija' },
        { label: 'RA', name: 'RemitAssure' },
        { label: 'BD', name: 'Business Day' }
    ];

    return (
        <section className="partners-strip">
            <div className="partners-label font-sans">Partners &amp; collaborators</div>
            <div className="partners-row">
                {partners.map((partner, idx) => (
                    <div key={idx} className="partner-pill">
                        <div className="partner-pill-logo font-bold">{partner.label}</div>
                        {partner.name}
                    </div>
                ))}
            </div>
        </section>
    );
}