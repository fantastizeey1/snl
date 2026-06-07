import React from 'react';

export interface ServiceDeepDiveProps {
    id: string;
    num: string;
    isAlt?: boolean;
    eyebrow: string;
    title: string;
    leadText: React.ReactNode;
    listLabel: string;
    features: { name: string; duration: string }[];
    whoFor: string;
    aside: {
        modelTitle: string;
        modelDesc: string;
        lengthLabel: string;
        lengthVal: string;
        tags: string[];
    };
}

export default function ServiceDeepDive({
    id,
    num,
    isAlt = false,
    eyebrow,
    title,
    leadText,
    listLabel,
    features,
    whoFor,
    aside
}: ServiceDeepDiveProps) {
    return (
        <section className={`svc ${isAlt ? 'alt' : ''}`} id={id}>
            <div className="max-w-[1240px] mx-auto px-8">
                <div className="svc-head">
                    <div className="num font-serif-display">
                        {num}
                        <span className="total">/05</span>
                    </div>
                    <div className="title-block">
                        <div className="eyebrow font-geist-mono">{eyebrow}</div>
                        <h2 className="font-serif-display text-4xl mt-4"><em>{title}</em></h2>
                        <p className="lead font-sans text-lg mt-7">{leadText}</p>
                    </div>
                </div>

                <div className="svc-body">
                    <div>
                        <div className="svc-list-label font-geist-mono">{listLabel}</div>
                        <ul className="svc-list">
                            {features.map((item, idx) => (
                                <li key={idx}>
                                    <span>{item.name}</span>
                                    <span className="duration font-geist-mono">{item.duration}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="who-this-is-for font-sans">
                            <strong>Who this is for:</strong> {whoFor}
                        </div>
                    </div>

                    <aside className="svc-aside">
                        <div>
                            <div className="label font-geist-mono text-xs">{aside.modelTitle}</div>
                            <h4 className="font-serif-display text-xl font-bold mt-2">{aside.modelDesc}</h4>
                        </div>
                        <div className="divider-aside"></div>
                        <div>
                            <div className="label font-geist-mono text-xs">{aside.lengthLabel}</div>
                            <h4 className="font-serif-display text-lg font-bold mt-2">{aside.lengthVal}</h4>
                        </div>
                        <div className="divider-aside"></div>
                        <div className="tag-row">
                            {aside.tags.map((tag, idx) => (
                                <span key={idx} className="tag font-geist-mono text-[10px]">{tag}</span>
                            ))}
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}