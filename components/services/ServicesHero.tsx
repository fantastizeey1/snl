'use client';
import React, { useState, useEffect } from 'react';

export default function ServicesHero() {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { idx: '01', id: 'svc-saas', label: 'Sales-as-a-Service' },
        { idx: '02', id: 'svc-pods', label: 'Sales Pods' },
        { idx: '03', id: 'svc-ops', label: 'Sales Ops & CRM' },
        { idx: '04', id: 'svc-academy', label: 'Training & Certification' },
        { idx: '05', id: 'svc-market', label: 'Market Entry' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY + 200;
            let currentIdx = 0;
            for (let i = 0; i < tabs.length; i++) {
                const el = document.getElementById(tabs[i].id);
                if (el && el.offsetTop <= y) {
                    currentIdx = i;
                }
            }
            setActiveTab(currentIdx);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleTabClick = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            window.scrollTo({
                top: el.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header className="hero-svc">
            <div className="max-w-[1240px] mx-auto px-8">
                <div className="hero-inner">
                    <span className="eyebrow on-dark font-mono-svc">Core Services</span>
                    <h1 className="font-serif-svc text-white mt-9 leading-tight">The integrated<br /><em>commercial stack.</em></h1>
                    <p className="lead-svc text-white/70 text-lg max-w-[60ch] mt-7">
                        Our services are designed as an integrated commercial stack. <strong>Each layer reinforces the others</strong>, creating a defensible and scalable revenue system for our clients — from first contact to closed revenue.
                    </p>
                </div>

                <nav className="svc-tabs" aria-label="Service navigation">
                    {tabs.map((tab, i) => (
                        <div
                            key={tab.id}
                            onClick={() => handleTabClick(tab.id)}
                            className={`svc-tab ${i === activeTab ? 'is-active' : ''}`}
                        >
                            <span className="idx">{tab.idx}</span> {tab.label}
                        </div>
                    ))}
                </nav>
            </div>
        </header>
    );
}