import React from 'react';
import Link from 'next/link';
import './course-details.css';
import Footer from '@/components/layout/Footer';



interface ModuleData {
    num: string;
    title: string;
    topics: string[];
}

interface MetaRowData {
    icon: React.ReactNode;
    label: string;
    val: React.ReactNode;
}

export default function SalesExecutionFundamentalsPage() {
    const curriculum: ModuleData[] = [
        {
            num: 'Module 1',
            title: 'Sales Fundamentals & Mindset',
            topics: [
                'Modern sales: from transactional to transformational',
                'The customer-centric approach and why it wins',
                'The core stages of a typical sales process',
                'Building a positive, resilient sales mindset'
            ]
        },
        {
            num: 'Module 2',
            title: 'Prospecting & Lead Generation',
            topics: [
                'Defining Ideal Customer Profiles and buyer personas',
                'Inbound and outbound prospecting methods',
                'Qualifying leads with discipline and rigour',
                'The role of CRM and data in modern prospecting'
            ]
        },
        {
            num: 'Module 3',
            title: 'Building Rapport & Needs Analysis',
            topics: [
                'Techniques for genuine rapport with prospects',
                'Open-ended questioning and the SPIN framework',
                'Active listening and non-verbal cues',
                'Identifying explicit and implicit customer needs'
            ]
        },
        {
            num: 'Module 4',
            title: 'Product & Service Presentation',
            topics: [
                'Crafting value propositions that resonate',
                'Features vs. benefits — the golden rule',
                'Tailored presentations and storytelling in sales',
                'Engaging presentation skills and visual aids'
            ]
        },
        {
            num: 'Module 5',
            title: 'Handling Objections',
            topics: [
                'Anticipating common sales objections',
                'Frameworks: LAER, Feel-Felt-Found, Boomerang, Reframe',
                'Understanding root causes and maintaining control',
                'Pre-empting objections before they arise'
            ]
        },
        {
            num: 'Module 6',
            title: 'Negotiation & Closing the Sale',
            topics: [
                'Win-win negotiation principles, BATNA and ZOPA',
                'Anchoring, concessions, and handling price objections',
                'Recognising buying signals and closing techniques',
                'Confidence in asking for the business'
            ]
        }
    ];

    const metaRows: MetaRowData[] = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                </svg>
            ),
            label: 'Duration',
            val: '5 days (full-day)'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
            ),
            label: 'Format',
            val: 'Workshop + role-play'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                </svg>
            ),
            label: 'Audience',
            val: 'SDRs & AEs'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
            ),
            label: 'Level',
            val: 'Foundation'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
            ),
            label: 'Delivery',
            val: 'In-person or virtual'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6" />
                    <path d="M8 14l-2 7 6-3 6 3-2-7" />
                </svg>
            ),
            label: 'Certification',
            val: <span className="cert-pill-academy">SNL Certified</span>
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            ),
            label: 'Group size',
            val: '8–20 participants'
        }
    ];

    return (
        <>


            <main className="max-w-[1240px] mx-auto px-8 overflow-hidden bg-white">

                {/* Breadcrumb Navigation */}
                <nav aria-label="breadcrumbs" className="breadcrumb-academy">
                    <p>
                        <Link href="/">Home</Link>
                        <span className="mx-2 text-gray-300">&gt;</span>
                        <Link href="/academy">Academy</Link>
                        <span className="mx-2 text-gray-300">&gt;</span>
                        <span className="text-gray-900 font-semibold">Sales Execution Fundamentals</span>
                    </p>
                </nav>

                <div className="course-page-wrap">

                    {/* Header Hero Area */}
                    <div className="hero-course">
                        <div className="hero-eyebrow-course">
                            <span className="hero-track-course">Sales Training &amp; Certification</span>
                            <span className="hero-dot-course"></span>
                            <span className="hero-num-course">Course 01</span>
                        </div>
                        <h1 className="hero-title-course font-serif-theme">Sales Execution<br />Fundamentals</h1>
                        <p className="hero-desc-course">The complete sales cycle, mastered. From mindset to close — built on structured playbooks, not personality-driven selling.</p>
                        <div className="hero-badges-course">
                            <span className="hero-badge-course">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                5-day programme
                            </span>
                            <span className="hero-badge-course">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                                8–20 participants
                            </span>
                            <span className="hero-badge-course">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="3" width="20" height="14" rx="2" />
                                    <line x1="8" y1="21" x2="16" y2="21" />
                                    <line x1="12" y1="17" x2="12" y2="21" />
                                </svg>
                                In-person or virtual
                            </span>
                            <span className="hero-badge-course">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="8" r="6" />
                                    <path d="M8 14l-2 7 6-3 6 3-2-7" />
                                </svg>
                                SNL Certified
                            </span>
                            <span className="hero-badge-course">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                    <path d="M12 20V10M18 20V4M6 20v-4" />
                                </svg>
                                Foundation level
                            </span>
                        </div>
                    </div>

                    {/* Left Column - Main Details */}
                    <div className="main-col">
                        <div className="content-card-academy">
                            <h2>Course overview</h2>
                            <p className="overview-text-academy">Most sales training teaches charisma. SNL teaches discipline. This is the flagship programme of SNL Academy — a complete, end-to-end sales cycle masterclass that takes participants from sales mindset to confident deal close in five intensive days.</p>
                            <p className="overview-text-academy">Built on the structured playbook methodology that defines SNL Services, this course replaces gut-feel selling with repeatable frameworks. Whether you're a new SDR finding your feet, or an account executive looking to sharpen your craft, you leave with the skills, language, and confidence to execute sales like a seasoned operator.</p>
                            <p className="overview-text-academy">Every module is grounded in real enterprise sales motions, with role-play, peer feedback, and practical exercises throughout. This is the foundation every revenue professional needs.</p>
                        </div>

                        <div className="content-card-academy">
                            <h2>Who this course is for</h2>
                            <div className="audience-list-academy">
                                {[
                                    'Sales Development Representatives (SDRs) and Account Executives (AEs)',
                                    'New sales hires building their first complete sales toolkit',
                                    'Experienced sellers wanting to formalise and refine their approach',
                                    'Founders and consultants doing their own selling',
                                    'Sales managers seeking a shared methodology for their teams'
                                ].map((aud, idx) => (
                                    <div key={idx} className="aud-item-academy">
                                        <div className="aud-dot-academy" />
                                        <span className="aud-text-academy">{aud}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="content-card-academy">
                            <h2>Learning outcomes</h2>
                            <div className="outcomes-list-academy">
                                {[
                                    'Apply a structured, customer-centric approach across the full sales cycle',
                                    'Identify, qualify, and engage high-value prospects with discipline',
                                    'Build genuine rapport and uncover real customer needs through skilled questioning',
                                    'Present solutions that connect to value, not just features',
                                    'Handle objections with confidence using proven frameworks',
                                    'Negotiate and close deals while protecting margin and the relationship'
                                ].map((outcome, idx) => (
                                    <div key={idx} className="outcome-academy">
                                        <div className="outcome-num-academy">0{idx + 1}</div>
                                        <div className="outcome-text-academy">{outcome}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="content-card-academy">
                            <h2>Curriculum — 6 modules</h2>
                            <div className="modules-grid-academy">
                                {curriculum.map((mod, idx) => (
                                    <div key={idx} className="module-card-academy">
                                        <div className="module-num-academy">{mod.num}</div>
                                        <div className="module-title-academy font-serif-theme">{mod.title}</div>
                                        <div className="module-topics-academy">
                                            {mod.topics.map((topic, tIdx) => (
                                                <div key={tIdx} className="topic-academy">{topic}</div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="content-card-academy">
                            <h2>Delivery format</h2>
                            <div className="delivery-grid-academy">
                                <div className="del-card-academy">
                                    <div className="del-icon-wrap-academy">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                            <circle cx="12" cy="12" r="10" />
                                            <polyline points="12 6 12 12 16 14" />
                                        </svg>
                                    </div>
                                    <div className="del-label-academy">Duration</div>
                                    <div className="del-value-academy">5 full-day sessions</div>
                                </div>

                                <div className="del-card-academy">
                                    <div className="del-icon-wrap-academy">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                            <circle cx="9" cy="7" r="4" />
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>
                                    </div>
                                    <div className="del-label-academy">Group size</div>
                                    <div className="del-value-academy">8–20 participants</div>
                                </div>

                                <div className="del-card-academy">
                                    <div className="del-icon-wrap-academy">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                            <polyline points="14 2 14 8 20 8" />
                                        </svg>
                                    </div>
                                    <div className="del-label-academy">Materials</div>
                                    <div className="del-value-academy">Workbook + playbook included</div>
                                </div>

                                <div className="del-card-academy">
                                    <div className="del-icon-wrap-academy">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                            <polyline points="9 11 12 14 22 4" />
                                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                        </svg>
                                    </div>
                                    <div className="del-label-academy">Practice included</div>
                                    <div className="del-value-academy">Role-play scenarios &amp; peer feedback</div>
                                </div>

                                <div className="del-card-academy">
                                    <div className="del-icon-wrap-academy">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="2" y="3" width="20" height="14" rx="2" />
                                            <line x1="8" y1="21" x2="16" y2="21" />
                                            <line x1="12" y1="17" x2="12" y2="21" />
                                        </svg>
                                    </div>
                                    <div className="del-label-academy">Format</div>
                                    <div className="del-value-academy">Workshop + role-play</div>
                                </div>

                                <div className="del-card-academy">
                                    <div className="del-icon-wrap-academy">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                            <circle cx="12" cy="12" r="10" />
                                            <line x1="2" y1="12" x2="22" y2="12" />
                                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                        </svg>
                                    </div>
                                    <div className="del-label-academy">Delivery mode</div>
                                    <div className="del-value-academy">In-person or virtual</div>
                                </div>
                            </div>

                            <div className="cert-block-academy">
                                <div className="cert-icon-wrap-academy">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="8" r="6" />
                                        <path d="M8 14l-2 7 6-3 6 3-2-7" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="cert-title-academy">SNL Certified — Sales Execution Fundamentals</div>
                                    <p className="cert-desc-academy">Participants who complete all modules and pass the practical assessment receive the SNL Sales Execution Fundamentals certification. This is the foundational credential of the SNL Academy and a prerequisite for advanced sales training programmes.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="sidebar-academy">
                        <div className="sidebar-enrol">
                            <p className="enrol-price">Corporate &amp; cohort pricing available</p>
                            <Link href="/contact" className="enrol-cta-btn">Book This Course</Link>
                            {/* Pointing to public folder download brochure */}
                            <a href="/brochures/Course_01_Sales_Execution_Fundamentals.pdf" className="enrol-cta-sec-btn" download>Download Brochure</a>
                            <p className="enrol-note">Delivered for teams of 8–20. Contact us to discuss dates, custom delivery, or a pilot session.</p>
                        </div>

                        <div className="sidebar-card-academy">
                            <div className="sidebar-card-head-academy">
                                <h3>Course details</h3>
                            </div>
                            <div className="sidebar-card-body-academy">
                                {metaRows.map((row, idx) => (
                                    <div key={idx} className="meta-row-academy">
                                        <div className="meta-icon-academy">{row.icon}</div>
                                        <div>
                                            <div className="meta-label-sm-academy">{row.label}</div>
                                            <div className="meta-val-academy">{row.val}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sub-Academy Training Links Navigation */}
                        <div className="sidebar-card-academy">
                            <div className="sidebar-card-head-academy">
                                <h3>Also in sales training</h3>
                            </div>
                            <div className="sidebar-card-body-academy">
                                <div className="meta-row-academy bg-purple-xlight cursor-pointer">
                                    <div className="flex-1 min-w-0">
                                        <div className="meta-label-sm-academy text-[#7D3C98]">Course 01 — Current</div>
                                        <div className="meta-val-academy text-xs leading-normal">Sales Execution Fundamentals</div>
                                    </div>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7D3C98" strokeWidth="2" strokeLinecap="round">
                                        <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                </div>

                                {[
                                    { num: '02', name: 'Pipeline Management & Deal Governance' },
                                    { num: '03', name: 'CRM Strategy & Sales Operations Mastery' },
                                    { num: '04', name: 'Outbound Prospecting & Appointment Setting' },
                                    { num: '05', name: 'Revenue Forecasting & Commercial Reporting' }
                                ].map((other, idx) => (
                                    <div key={idx} className="meta-row-academy cursor-pointer">
                                        <div className="flex-1 min-w-0">
                                            <div className="meta-label-sm-academy">Course {other.num}</div>
                                            <div className="meta-val-academy text-xs leading-normal">{other.name}</div>
                                        </div>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round">
                                            <polyline points="9 18 15 12 9 6" />
                                        </svg>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Call to Action Banner */}
                    <div className="cta-banner-course">
                        <div className="cta-banner-left-course">
                            <div className="cta-eyebrow-course">Ready to get started?</div>
                            <h2 className="font-serif-theme">Sell with discipline from day one</h2>
                            <p>Contact us to discuss corporate bookings, cohort programmes, or custom delivery for your organisation.</p>
                        </div>
                        <div className="cta-banner-actions-course">
                            <Link href="/contact" className="cta-btn-primary-course">Get in Touch</Link>
                            <Link href="/academy" className="cta-btn-sec-course">View All Courses</Link>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </>
    );
}