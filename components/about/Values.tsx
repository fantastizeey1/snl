import React from 'react';

interface ValueData {
    title: string;
    desc: string;
}

export default function Values() {
    const valuesList: ValueData[] = [
        {
            title: 'Discipline over inspiration',
            desc: 'Motivation is ephemeral. Process is permanent. We build commercial organisations that perform consistently — not because the team is having a good day, but because the system demands it. Discipline is the foundation every sustainable revenue engine is built on.'
        },
        {
            title: 'Visibility creates accountability',
            desc: 'You cannot manage what you cannot see. Every engagement we run is designed to create transparency — in pipeline, in forecast, in team performance. Visibility is not surveillance; it is the precondition for honest coaching, accurate planning, and trusted leadership.'
        },
        {
            title: 'Practitioners, not presenters',
            desc: 'Our team has carried quota, run enterprise sales cycles, and built commercial functions from the ground up. We do not teach from textbooks. We teach from scar tissue — and that difference is felt the moment we walk into a room with your team.'
        },
        {
            title: 'Long-term over short-term',
            desc: 'We are not optimising for the engagement fee. We are optimising for the kind of relationship where clients return, refer, and grow with us over years. That means telling hard truths, recommending the right solution even when it is a smaller one, and always putting client outcomes first.'
        }
    ];

    return (
        <section className="values">
            <div className="values-inner">
                <div className="values-header">
                    <span className="section-eyebrow">What we stand for</span>
                    <h2 className="section-title font-serif-about">Principles we <em>never</em> compromise.</h2>
                </div>
                <div className="values-grid">
                    {valuesList.map((val, idx) => (
                        <div key={idx} className="value-card">
                            <h3 className="value-title font-serif-about">{val.title}</h3>
                            <p className="value-desc">{val.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}