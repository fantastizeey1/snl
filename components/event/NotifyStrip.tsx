'use client';

import React, { useState } from 'react';

export default function NotifyStrip() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleNotify = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setSubmitted(true);
    };

    return (
        <section className="notify-strip">
            <div className="notify-inner">
                <span className="section-eyebrow">Stay in the loop</span>
                <h2 className="font-serif-event text-white">Never miss an SNL<br /><em>event again.</em></h2>
                <form onSubmit={handleNotify} className="notify-form">
                    <input
                        className="notify-input"
                        type="email"
                        placeholder="Your email address"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={submitted}
                    />
                    <button
                        type="submit"
                        className="notify-submit"
                        disabled={submitted}
                        style={submitted ? { background: '#D1FAE5', color: '#059669' } : {}}
                    >
                        {submitted ? '✓ Added' : 'Notify me'}
                    </button>
                </form>
            </div>
        </section>
    );
}