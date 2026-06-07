import React from 'react';
import Link from 'next/link';
import '../sales-execution-fundamentals/course-details.css'
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

export default function PipelineManagementPage() {
    const curriculum: ModuleData[] = [
        {
            num: 'Module 1',
            title: 'Pipeline Architecture & Stage Design',
            topics: [
                'Defining pipeline stages aligned to your sales cycle',
                'Entry and exit criteria for each stage',
                'Common stage design mistakes and how to avoid them',
                'Mapping pipeline stages to buyer decision milestones'
            ]
        },
        {
            num: 'Module 2',
            title: 'Deal Qualification Frameworks',
            topics: [
                'MEDDIC, BANT, and custom qualification models',
                'Scoring and prioritising opportunities',
                'Identifying red flags and disqualification triggers',
                'Building qualification into your CRM workflow'
            ]
        },
        {
            num: 'Module 3',
            title: 'Pipeline Reviews That Drive Revenue',
            topics: [
                'Structuring weekly and monthly pipeline reviews',
                'The difference between inspection and coaching',
                'Questions that uncover stalled deals and hidden risk',
                'Reviews that produce next actions, not status updates'
            ]
        },
        {
            num: 'Module 4',
            title: 'Forecasting Methodology & Accuracy',
            topics: [
                'Weighted pipeline vs. commit-based forecasting',
                'Building a forecast your leadership can trust',
                'Variance analysis: forecast vs. actual',
                'Leading indicators that predict revenue outcomes'
            ]
        },
        {
            num: 'Module 5',
            title: 'Deal Governance & Escalation',
            topics: [
                'Approval gates for pricing, discounting, and terms',
                'Escalation criteria and deal desk processes',
                'Risk mitigation frameworks for large opportunities',
                'Documenting deal governance in your sales playbook'
            ]
        },
        {
            num: 'Module 6',
            title: 'Pipeline Hygiene & Performance Management',
            topics: [
                'Identifying and purging pipeline bloat',
                'Ageing analysis and velocity metrics',
                'Setting and tracking pipeline coverage ratios',
                'Embedding pipeline discipline into team culture'
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
            val: '3 days (full-day)'
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
            val: 'Workshop + exercises'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                </svg>
            ),
            label: 'Audience',
            val: 'Sales teams & leaders'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
            ),
            label: 'Level',
            val: 'Intermediate'
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
                        <span className="text-gray-900 font-semibold">Pipeline Management &amp; Deal Governance</span>
                    </p>
                </nav>

                <div className="course-page-wrap">

                    {/* Header Hero Area */}
                    <div className="hero-course">
                        <div className="hero-eyebrow-course">
                            <span className="hero-track-course">Sales Training &amp; Certification</span>
                            <span className="hero-dot-course"></span>
                            <span className="hero-num-course">Course 02</span>
                        </div>
                        <h1 className="hero-title-course font-serif-theme">Pipeline Management<br />&amp; Deal Governance</h1>
                        <p className="hero-desc-course">Build, qualify, and progress pipeline with discipline. From stage definitions to forecasting accuracy — structured execution that removes guesswork.</p>
                        <div className="hero-badges-course">
                            <span className="hero-badge-course">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                3-day programme
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
                                Intermediate level
                            </span>
                        </div>
                    </div>

                    {/* Left Column - Main Details */}
                    <div className="main-col">
                        <div className="content-card-academy">
                            <h2>Course overview</h2>
                            <p className="overview-text-academy">Most sales teams have a pipeline. Few have pipeline discipline. Deals linger in stages for weeks without clear qualification criteria. Forecasts swing wildly because there's no shared definition of what "commit" means. Reviews become status updates instead of strategic conversations that move revenue forward.</p>
                            <p className="overview-text-academy">This course gives your team a structured pipeline operating system — from how stages are defined and enforced, to how deals are qualified, reviewed, and forecasted. It replaces gut-feel selling with a governed, visible, and repeatable approach to revenue progression.</p>
                            <p className="overview-text-academy">Built on SNL's proven methodology from enterprise engagements across technology, financial services, and telecommunications — adapted for teams ready to sell with discipline.</p>
                        </div>

                        <div className="content-card-academy">
                            <h2>Who this course is for</h2>
                            <div className="audience-list-academy">
                                {[
                                    'Sales teams transitioning from ad-hoc to structured pipeline management',
                                    'Sales managers who run (or should be running) pipeline reviews',
                                    'Sales operations professionals responsible for CRM and reporting',
                                    'Revenue leaders seeking visibility and forecast accuracy',
                                    'Founders moving from personal selling to team-based sales execution'
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
                                    'Define and enforce pipeline stages with clear entry and exit criteria',
                                    'Apply a structured deal qualification framework to every opportunity',
                                    'Run effective pipeline reviews that drive action, not just updates',
                                    'Build accurate, defensible revenue forecasts your leadership can trust',
                                    'Design deal governance policies including escalation and approval gates',
                                    'Identify and eliminate pipeline bloat, stalled deals, and forecast risk'
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
                                    <div className="del-value-academy">3 full-day sessions</div>
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
                                    <div className="del-value-academy">Workbook + templates included</div>
                                </div>

                                <div className="del-card-academy">
                                    <div className="del-icon-wrap-academy">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                            <polyline points="9 11 12 14 22 4" />
                                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                        </svg>
                                    </div>
                                    <div className="del-label-academy">Templates provided</div>
                                    <div className="del-value-academy">Pipeline reviews, scorecards &amp; forecasts</div>
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
                                    <div className="del-value-academy">Live with breakout rooms</div>
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
                                    <div className="cert-title-academy">SNL Certified — Pipeline &amp; Deal Governance</div>
                                    <p className="cert-desc-academy">Participants who complete all modules and pass the practical assessment receive the SNL Pipeline &amp; Deal Governance certification. Valid for 12 months with annual renewal available. Certification signals execution readiness to enterprise clients and internal leadership.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="sidebar-academy">
                        <div className="sidebar-enrol">
                            <p className="enrol-price">Corporate &amp; cohort pricing available</p>
                            <Link href="/contact" className="enrol-cta-btn">Book This Course</Link>
                            <a href="/brochures/Course_02_Pipeline_Management_Deal_Governance.pdf" className="enrol-cta-sec-btn" download>Download Brochure</a>
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
                                <Link href="/academy/sales-execution-fundamentals" className="meta-row-academy cursor-pointer block">
                                    <div className="flex-1 min-w-0">
                                        <div className="meta-label-sm-academy">Course 01</div>
                                        <div className="meta-val-academy text-xs leading-normal">Sales Execution Fundamentals</div>
                                    </div>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round">
                                        <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                </Link>

                                <div className="meta-row-academy bg-purple-xlight cursor-pointer">
                                    <div className="flex-1 min-w-0">
                                        <div className="meta-label-sm-academy text-[#7D3C98]">Course 02 — Current</div>
                                        <div className="meta-val-academy text-xs leading-normal">Pipeline Management &amp; Deal Governance</div>
                                    </div>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7D3C98" strokeWidth="2" strokeLinecap="round">
                                        <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                </div>

                                {[
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
                            <h2 className="font-serif-theme">Build pipeline discipline across your team</h2>
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