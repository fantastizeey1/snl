'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type EventCategory = 'all' | 'training' | 'corporate';

interface PastEvent {
    year: string;
    category: 'training' | 'corporate';
    typeLabel: string;
    title: string;
    subtitle: string;
    desc: string[];
    tags: string[];
    date: string;
    time?: string;
    partners: { label: string; name: string }[];
    externalLink?: string;
    images: string[];
}

export default function EventList() {
    const [activeCategory, setActiveCategory] = useState<EventCategory>('all');

    const events: PastEvent[] = [
        {
            year: '2026',
            category: 'training',
            typeLabel: 'Webinar · Business Education · Community',
            title: 'CommonsNaija × SNL Services — Free Webinar',
            subtitle: 'Building Something Nobody Asked For',
            desc: [
                "A free 60-minute webinar hosted by CommonsNaija × SNL Services, featuring Emmanuel Bobmanuel. The session tackled why most Nigerian businesses close within 5 years — and the #1 reason isn't money.",
                "Practical, actionable, and built for Nigerians ready to turn ideas into real income, this session drew participants across Nigeria for an honest conversation about building sustainable businesses."
            ],
            tags: ['Free webinar', 'Google Meet', 'Business Education'],
            date: 'Saturday, 2nd May 2026',
            time: '5:00 PM WAT',
            partners: [{ label: 'CN', name: 'CommonsNaija' }],
            images: ['/images/flyers-1.jpg']
        },
        {
            year: '2026',
            category: 'corporate',
            typeLabel: 'Community · SME Fair · Brand Activation',
            title: 'Easter SME Fair — SNL Services Booth',
            subtitle: 'Easter SME Fair — SNL Services Brand Activation',
            desc: [
                "A multi-merchant ecosystem showcasing products and services from over 20 unique vendors across Lagos, Nigeria.",
                "The SNL Services Activation booth offered onsite coaching sessions for SME founders wishing to scale beyond solo performance and design repeatable pipeline models."
            ],
            tags: ['20+ exhibitors', 'Brand activation', 'Lagos, Nigeria'],
            date: 'Easter 2026',
            partners: [{ label: 'BC', name: 'Bellaz Connection' }],
            images: [
                '/images/activation-1.jpg',
                '/images/activation-2.jpg',
                '/images/activation-3.jpg',
                '/images/activation-4.jpg'
            ]
        },
        {
            year: '2026',
            category: 'corporate',
            typeLabel: 'Media Feature • Women\'s Month • Empowerment',
            title: 'Live With Latasha × BusinessDay',
            subtitle: 'A Celebration of Voices, Impact, and Empowerment',
            desc: [
                "In a landmark collaboration for Women's Month 2026, SNL Services partnered with the 'Live With Latasha' initiative to amplify the stories of impact-driven women across the continent.",
                "This affair, documented by BusinessDay Media, explored the intersection of professional excellence and community empowerment. At SNL, our involvement was rooted in the belief that true commercial success is inclusive. By celebrating these voices, we continue our mission to move beyond just service delivery into meaningful community advocacy."
            ],
            tags: ['BusinessDay Featured', 'Women\'s Month', 'Community Affairs'],
            date: 'March 28, 2026',
            partners: [
                { label: 'BD', name: 'BusinessDay Media' },
                { label: 'LL', name: 'Live With Latasha' }
            ],
            externalLink: 'https://businessday.ng/bd-weekender/article/live-with-latasha-womens-month-of-march-a-celebration-of-voices-impact-and-empowerment/',
            images: ['/images/natasha.jpg']
        }
    ];

    const filteredEvents = activeCategory === 'all'
        ? events
        : events.filter(e => e.category === activeCategory);

    return (
        <section className="past py-16">
            <div className="past-inner max-w-[1240px] mx-auto px-8">
                <div className="past-header flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
                    <div>
                        <span className="theme-eyebrow-text">Event archive</span>
                        <h2 className="font-serif-theme text-4xl text-[#1A0030] mt-2">A look back at<br /><em>where we've been.</em></h2>
                    </div>
                    <div className="filter-row">
                        {['all', 'training', 'corporate'].map((category) => (
                            <button
                                key={category}
                                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category as EventCategory)}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)} Events
                            </button>
                        ))}
                    </div>
                </div>

                {filteredEvents.map((event, idx) => (
                    <div key={idx} className="past-featured card-hover-effect overflow-hidden bg-white mb-12">
                        <div className="pf-visual">
                            {event.images.length === 1 ? (
                                <div className="relative w-full h-full min-h-[300px]">
                                    <Image
                                        src={event.images[0]}
                                        alt={event.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ) : (
                                <div className="pf-photo-grid w-full h-full min-h-[300px]">
                                    {event.images.map((img, imgIdx) => (
                                        <div key={imgIdx} className="pf-photo relative">
                                            <Image
                                                src={img}
                                                alt={`${event.title} screenshot ${imgIdx + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                    <div className="pf-photo bg-[#450065] flex items-center justify-center">
                                        <span className="text-white/20 text-3xl font-bold">SNL</span>
                                    </div>
                                </div>
                            )}
                            <div className="pf-overlay"></div>
                            <div className="pf-year-badge">{event.year}</div>
                            <div className="pf-overlay-content">
                                <div className="pf-title-block">
                                    <div className="pf-event-type font-mono-theme text-white/50">{event.typeLabel}</div>
                                    <div className="pf-title font-serif-theme text-white mt-1">{event.title}</div>
                                </div>
                            </div>
                        </div>

                        <div className="pf-body">
                            <div className="pf-desc">
                                <h3 className="font-serif-theme text-2xl text-[#1A0030]">{event.subtitle}</h3>
                                {event.desc.map((p, pIdx) => (
                                    <p key={pIdx} className="text-[#71717A] text-sm mt-4 leading-relaxed">{p}</p>
                                ))}
                                <div className="pf-tags mt-6">
                                    {event.tags.map((tag, tagIdx) => (
                                        <span key={tagIdx} className="pf-tag font-semibold text-xs tracking-wider">{tag}</span>
                                    ))}
                                </div>
                                {event.externalLink && (
                                    <a
                                        href={event.externalLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-premium-primary mt-8 inline-block"
                                    >
                                        Read full feature on BusinessDay &rarr;
                                    </a>
                                )}
                            </div>

                            <div className="pf-sidebar border-t md:border-t-0 md:border-l border-[#E8E2F0] pt-8 md:pt-0 md:pl-8">
                                <h4 className="font-mono-theme text-[#71717A] mb-4">Event details</h4>
                                <div className="pf-meta-item">
                                    <div className="pf-meta-icon bg-[#EDE7F6] text-[#7D3C98]">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="3" y="4" width="18" height="18" rx="2" />
                                            <line x1="3" y1="10" x2="21" y2="10" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="pf-meta-label">Date</div>
                                        <div className="pf-meta-val font-semibold">{event.date}</div>
                                    </div>
                                </div>
                                {event.time && (
                                    <div className="pf-meta-item mt-4">
                                        <div className="pf-meta-icon bg-[#EDE7F6] text-[#7D3C98]">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <circle cx="12" cy="12" r="10" />
                                                <polyline points="12 6 12 12 16 14" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="pf-meta-label">Time</div>
                                            <div className="pf-meta-val font-semibold">{event.time}</div>
                                        </div>
                                    </div>
                                )}

                                <div className="pf-partners mt-8 pt-6">
                                    <h4 className="font-mono-theme text-[#71717A] mb-4">Collaborators</h4>
                                    {event.partners.map((partner, pIdx) => (
                                        <div key={pIdx} className="pf-partner-row flex items-center gap-3">
                                            <div className="partner-logo-mock font-bold bg-[#EDE7F6] text-[#7D3C98] rounded-lg w-9 h-9 flex items-center justify-center text-xs">
                                                {partner.label}
                                            </div>
                                            <div className="partner-info-name text-sm font-semibold">{partner.name}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}