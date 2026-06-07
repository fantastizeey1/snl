'use client';

import React, { useState } from 'react';
import Link from 'next/link';

type AcademyCategory = 'all' | 'sales' | 'sme';

interface CourseCardData {
    category: 'sales' | 'sme';
    badgeLabel: string;
    numLabel: string;
    icon: React.ReactNode;
    title: string;
    desc: string;
    tags: string[];
    isCert?: boolean;
    link: string;
}

export default function AcademyCourses() {
    const [activeTab, setActiveTab] = useState<AcademyCategory>('all');

    const courses: CourseCardData[] = [
        // --- SALES COURSE CARDS ---
        {
            category: 'sales',
            badgeLabel: 'sales training',
            numLabel: 'COURSE 01',
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                </svg>
            ),
            title: 'Sales Execution Fundamentals',
            desc: 'Full sales cycle mastery from prospecting through deal close — built on structured playbooks, not personality-driven selling. The foundational course for every revenue professional.',
            tags: ['SDRs & AEs', '5 days'],
            isCert: true,
            link: '/academy/sales-execution-fundamentals'
        },
        {
            category: 'sales',
            badgeLabel: 'sales training',
            numLabel: 'COURSE 02',
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: 'Pipeline management & deal governance',
            desc: 'Build, qualify, and progress pipeline with discipline. Covers stage definitions, deal qualification frameworks, forecasting accuracy, and structured pipeline reviews.',
            tags: ['Sales teams', '3 days'],
            isCert: true,
            link: '/academy/pipeline-management-deal-governance'
        },
        {
            category: 'sales',
            badgeLabel: 'sales training',
            numLabel: 'COURSE 03',
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
            ),
            title: 'CRM strategy & sales operations mastery',
            desc: 'Design sales processes inside a CRM, build performance dashboards, configure deal governance workflows, and turn raw data into commercial intelligence.',
            tags: ['Sales ops', '3 days'],
            isCert: true,
            link: '/academy/pipeline-management-deal-governance'
        },
        {
            category: 'sales',
            badgeLabel: 'sales training',
            numLabel: 'COURSE 04',
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
            ),
            title: 'Outbound prospecting & appointment setting',
            desc: 'Structured outbound methodology — messaging frameworks, multi-channel engagement sequences, objection handling, and qualified meeting standards.',
            tags: ['SDRs & BDRs', '2 days'],
            isCert: true,
            link: '/academy/pipeline-management-deal-governance'
        },
        {
            category: 'sales',
            badgeLabel: 'sales training',
            numLabel: 'COURSE 05',
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20V10M18 20V4M6 20v-4" />
                </svg>
            ),
            title: 'Revenue forecasting & commercial reporting',
            desc: 'Build reliable revenue forecasts, design executive-level reporting, and use data to make better commercial decisions.',
            tags: ['Leaders & ops', '2 days'],
            isCert: true,
            link: '/academy/pipeline-management-deal-governance'
        },

        // --- SME COURSE CARDS ---
        {
            category: 'sme',
            badgeLabel: 'SME accelerator',
            numLabel: 'SME 01',
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                    <line x1="4" y1="12" x2="15" y2="12" />
                </svg>
            ),
            title: 'From idea to revenue: starting a business that sells',
            desc: 'Validate your idea, define your target market, build your first value proposition, and get to your first paying customer.',
            tags: ['Founders', '2 days'],
            link: '/academy/pipeline-management-deal-governance'
        },
        {
            category: 'sme',
            badgeLabel: 'SME accelerator',
            numLabel: 'SME 02',
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
            ),
            title: 'Building your commercial engine',
            desc: 'Move from founder-led sales to a repeatable system. Design your process, set up a CRM, and build a forecastable pipeline.',
            tags: ['SME founders', '2 days'],
            link: '/academy/pipeline-management-deal-governance'
        },
        {
            category: 'sme',
            badgeLabel: 'SME accelerator',
            numLabel: 'SME 03',
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="12" y1="8" x2="12" y2="13" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
            ),
            title: 'Financial literacy for founders',
            desc: 'Read a P&L, manage cash flow, price for profit, and make commercial finance decisions with confidence.',
            tags: ['Founders', '1 day'],
            link: '/academy/pipeline-management-deal-governance'
        },
        {
            category: 'sme',
            badgeLabel: 'SME accelerator',
            numLabel: 'SME 04',
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="18" r="3" />
                    <circle cx="6" cy="6" r="3" />
                    <path d="M13 6h3a2 2 0 0 1 2 2v7M11 18H8a2 2 0 0 1-2-2V9" />
                </svg>
            ),
            title: 'Operations & systems for scale',
            desc: 'Stop being the bottleneck. Build SOPs, hire effectively, delegate with confidence, and create infrastructure that scales.',
            tags: ['Growing SMEs', '2 days'],
            link: '/academy/pipeline-management-deal-governance'
        },
        {
            category: 'sme',
            badgeLabel: 'SME accelerator',
            numLabel: 'SME 05',
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                </svg>
            ),
            title: 'Sales & revenue growth for SMEs',
            desc: 'A condensed sales masterclass for founder-sellers. Prospecting, pitching, objection handling, and closing — built for your reality.',
            tags: ['Founder-sellers', '2 days'],
            link: '/academy/pipeline-management-deal-governance'
        },
        {
            category: 'sme',
            badgeLabel: 'SME accelerator',
            numLabel: 'SME 06',
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
            ),
            title: 'Market entry & expansion strategy',
            desc: 'Identify new segments, test new geographies, build partnerships, and expand without overcommitting resources.',
            tags: ['Scaling SMEs', '2 days'],
            link: '/academy/pipeline-management-deal-governance'
        },
        {
            category: 'sme',
            badgeLabel: 'SME accelerator',
            numLabel: 'SME 07',
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            ),
            title: 'Building & leading a high-performance team',
            desc: 'Recruit, onboard, manage performance, and build culture intentionally as you grow from 5 to 50 people.',
            tags: ['Leaders', '2 days'],
            link: '/academy/pipeline-management-deal-governance'
        },
        {
            category: 'sme',
            badgeLabel: 'SME accelerator',
            numLabel: 'SME 08',
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
            ),
            title: 'Digital presence & go-to-market for SMEs',
            desc: 'Build your brand online, leverage LinkedIn, create content that converts, and design a go-to-market strategy on any budget.',
            tags: ['All SMEs', '1 day'],
            link: '/academy/pipeline-management-deal-governance'
        }
    ];

    const showSales = activeTab === 'all' || activeTab === 'sales';
    const showSme = activeTab === 'all' || activeTab === 'sme';

    const renderSection = (category: 'sales' | 'sme', title: string, subtitle: string) => {
        const list = courses.filter(c => c.category === category);
        return (
            <section className="content-section" id={`section-${category}`}>
                <div className="section-header">
                    <h2 className="font-serif-theme text-3xl font-semibold">{title}</h2>
                    <p className="text-[#71717A] text-sm mt-3 leading-relaxed max-w-[600px]">{subtitle}</p>
                </div>

                <div className="course-grid">
                    {list.map((course, idx) => (
                        <div key={idx} className="course-card">
                            <Link href={course.link} className="flex flex-col h-full">
                                <span className={`card-badge ${course.category}`}>
                                    {course.badgeLabel}
                                </span>
                                <div className="card-num font-geist-mono text-xs">{course.numLabel}</div>
                                <div className={`card-icon ${course.category === 'sales' ? 'sales-icon' : 'sme-icon'}`}>
                                    {course.icon}
                                </div>
                                <div className="card-title-academy font-serif-theme">{course.title}</div>
                                <p className="card-desc text-sm leading-relaxed">{course.desc}</p>
                                <div className="card-meta">
                                    {course.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="meta-tag-academy font-semibold text-xs tracking-wider">{tag}</span>
                                    ))}
                                    {course.isCert && <span className="meta-tag-academy cert font-semibold text-xs tracking-wider">Certificate</span>}
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        );
    };

    return (
        <>
            <div className="snl-tabs">
                <button
                    className={`snl-tab ${activeTab === 'all' ? 'active' : ''}`}
                    onClick={() => setActiveTab('all')}
                >
                    All programmes
                </button>
                <button
                    className={`snl-tab ${activeTab === 'sales' ? 'active' : ''}`}
                    onClick={() => setActiveTab('sales')}
                >
                    Sales training
                </button>
                <button
                    className={`snl-tab ${activeTab === 'sme' ? 'active' : ''}`}
                    onClick={() => setActiveTab('sme')}
                >
                    SME accelerator
                </button>
            </div>

            {showSales && renderSection('sales', 'Sales training & certification', 'Execution-grade sales programmes designed to manufacture trust at scale. Each course maps directly to SNL\'s proven commercial methodology.')}
            {activeTab === 'all' && <div className="section-divider-academy" />}
            {showSme && renderSection('sme', 'SME accelerator programme', 'For founders and business leaders building or scaling an SME. Practical, execution-focused courses designed by operators, not academics.')}
        </>
    );
}