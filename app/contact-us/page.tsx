'use client';

import React, { useState } from 'react';
import './contact.css';
import Footer from '@/components/layout/Footer';

interface InterestOption {
    value: string;
    label: string;
}

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        roleSelect: '',
        otherRole: '',
        teamSize: '',
        message: ''
    });

    const [interests, setInterests] = useState<string[]>([]);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const interestOptions: InterestOption[] = [
        { value: 'revenue-management', label: 'Revenue Management' },
        { value: 'consulting / advisory', label: 'Consulting / advisory' },
        { value: 'sales enablement', label: 'Sales Enablement' },
        { value: 'corporate-bootcamp', label: 'Corporate Bootcamp' },
        { value: 'sme-accelerator', label: 'SME Accelerator' },
        { value: 'other', label: 'Something else' }
    ];

    const handleInterestChange = (value: string) => {
        setInterests(prev =>
            prev.includes(value) ? prev.filter(i => i !== value) : [...prev, value]
        );
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        const formAction = 'https://script.google.com/macros/s/AKfycbzPyPG5TDgPK9DVqH7ZZ-og88G9rA_IanabPX2EKu4hXz-pcLvTLl5ZsORc9qzPLj17/exec';

        // Resolve role (Standard Dropdown vs Custom typing "Other")
        const finalRoleValue = formData.roleSelect === 'Other' ? formData.otherRole : formData.roleSelect;

        const payload = new FormData();
        payload.append('firstName', formData.firstName);
        payload.append('lastName', formData.lastName);
        payload.append('email', formData.email);
        payload.append('phone', formData.phone);
        payload.append('company', formData.company);
        payload.append('role', finalRoleValue);
        payload.append('interest', interests.join(', '));
        payload.append('teamSize', formData.teamSize);
        payload.append('message', formData.message);

        try {
            await fetch(formAction, {
                method: 'POST',
                body: payload,
                mode: 'no-cors' // Google Script requires no-cors for direct browser post
            });

            setStatus('success');
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    return (
        <>


            <section className="contact-page-hero">
                <div className="hero-inner-contact">
                    <div className="hero-label-contact font-mono-theme">Contact us</div>
                    <h1 className="hero-title-contact font-serif-theme">Let's start a<br /><em>conversation</em></h1>
                    <p className="hero-sub-contact">Whether you're looking to transform your sales team, accelerate your SME, or explore a partnership — we'd love to hear from you.</p>
                </div>
            </section>

            <div className="contact-page-body max-w-[1240px] mx-auto px-8">

                {/* Contact Form Container */}
                <div className="form-card">
                    {status !== 'success' ? (
                        <div id="form-content">
                            <h2>Send us a message</h2>
                            <p className="form-sub text-sm mt-1">Fill in the form below and a member of our team will be in touch within one business day.</p>

                            <form onSubmit={handleSubmit}>
                                <div className="form-row-contact">
                                    <div className="form-group-contact">
                                        <label htmlFor="first-name">First name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            id="first-name"
                                            placeholder="e.g. Sam"
                                            required
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group-contact">
                                        <label htmlFor="last-name">Last name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            id="last-name"
                                            placeholder="e.g. Bilson"
                                            required
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-group-contact">
                                    <label htmlFor="email">Email address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="you@company.com"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-row-contact">
                                    <div className="form-group-contact">
                                        <label htmlFor="phone">Phone number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            placeholder="+234 800 000 0000"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group-contact">
                                        <label htmlFor="company">Company / Organisation</label>
                                        <input
                                            type="text"
                                            name="company"
                                            id="company"
                                            placeholder="Your company name"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-group-contact">
                                    <label htmlFor="role-select">Your role</label>
                                    <select
                                        id="role-select"
                                        name="roleSelect"
                                        required
                                        value={formData.roleSelect}
                                        onChange={handleInputChange}
                                    >
                                        <option value="" disabled>Select your role</option>
                                        <option value="Founder / CEO">Founder / CEO</option>
                                        <option value="Sales Leader / Director">Sales Leader / Director</option>
                                        <option value="Sales Manager">Sales Manager</option>
                                        <option value="Sales Representative">Sales Representative</option>
                                        <option value="HR / L&D Professional">HR / L&D Professional</option>
                                        <option value="Operations / Strategy">Operations / Strategy</option>
                                        <option value="Other">Other (Please specify)</option>
                                    </select>
                                </div>

                                {formData.roleSelect === 'Other' && (
                                    <div className="form-group-contact">
                                        <label htmlFor="other-role-input">Please specify your role</label>
                                        <input
                                            type="text"
                                            name="otherRole"
                                            id="other-role-input"
                                            placeholder="e.g. Consultant"
                                            required
                                            value={formData.otherRole}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                )}

                                <div className="form-group-contact">
                                    <label>I'm interested in</label>
                                    <div className="check-grid-contact">
                                        {interestOptions.map((opt) => (
                                            <label
                                                key={opt.value}
                                                className={`check-item ${interests.includes(opt.value) ? 'checked' : ''}`}
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={interests.includes(opt.value)}
                                                    onChange={() => handleInterestChange(opt.value)}
                                                />
                                                {opt.label}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="form-group-contact">
                                    <label htmlFor="team-size">Team size</label>
                                    <select
                                        name="teamSize"
                                        id="team-size"
                                        required
                                        value={formData.teamSize}
                                        onChange={handleInputChange}
                                    >
                                        <option value="" disabled>Select team size</option>
                                        <option value="Just me">Just me</option>
                                        <option value="2–10 people">2–10 people</option>
                                        <option value="11–50 people">11–50 people</option>
                                        <option value="51–200 people">51–200 people</option>
                                        <option value="200+ people">200+ people</option>
                                    </select>
                                </div>

                                <div className="form-group-contact">
                                    <label htmlFor="message">Your message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        placeholder="Tell us a bit about your goals, challenges, or what you'd like to discuss…"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-divider-contact" />

                                <button type="submit" className="submit-btn-contact" disabled={status === 'loading'}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="22" y1="2" x2="11" y2="13" />
                                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                    </svg>
                                    {status === 'loading' ? 'Sending message...' : 'Send message'}
                                </button>
                                <p className="form-note">We respect your privacy. Your details are never shared with third parties.</p>

                                {status === 'error' && (
                                    <p className="text-red-600 text-sm mt-4 text-center font-semibold">
                                        There was an error submitting your form. Please try again.
                                    </p>
                                )}
                            </form>
                        </div>
                    ) : (
                        <div className="success-state visible" id="success-state">
                            <div className="success-icon-contact">
                                <svg viewBox="0 0 24 24" fill="none" stroke="#7D3C98" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <h3 className="font-serif-theme">Message received</h3>
                            <p>Thank you for reaching out. A member of the SNL team<br />will be in touch within one business day.</p>
                        </div>
                    )}
                </div>

                {/* Sidebar Cards */}
                <div className="sidebar-contact">
                    <div className="info-card-contact">
                        <div className="info-card-head-contact">
                            <h3 className="font-serif-theme">Contact details</h3>
                            <p>Reach us directly through any of the channels below.</p>
                        </div>
                        <div className="info-card-body-contact">

                            <div className="contact-row-details">
                                <div className="contact-icon-box">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="contact-label-details">Phone</div>
                                    <div className="contact-value-details"><a href="tel:+2349035783892">+234 903 578 3892</a></div>
                                </div>
                            </div>

                            <div className="contact-row-details">
                                <div className="contact-icon-box">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="contact-label-details">Email</div>
                                    <div className="contact-value-details"><a href="mailto:training@snl-services.com">training@snl-services.com</a></div>
                                </div>
                            </div>

                            <div className="contact-row-details">
                                <div className="contact-icon-box">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <line x1="2" y1="12" x2="22" y2="12" />
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="contact-label-details">Website</div>
                                    <div className="contact-value-details"><a href="/">www.snl-services.com</a></div>
                                </div>
                            </div>

                            <div className="contact-row-details">
                                <div className="contact-icon-box">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="contact-label-details">Location</div>
                                    <div className="contact-value-details">Lagos, Nigeria</div>
                                </div>
                            </div>

                            <div className="contact-row-details">
                                <div className="contact-icon-box">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                        <rect x="2" y="9" width="4" height="12" />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="contact-label-details">LinkedIn</div>
                                    <div className="contact-value-details">
                                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">SNL Services Limited</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Business Hours */}
                    <div className="hours-card-contact">
                        <h3>Business hours</h3>
                        <div className="hours-row-details">
                            <span className="hours-day-details">Monday – Friday</span>
                            <span className="hours-time-details">9:00 AM – 6:00 PM</span>
                        </div>
                        <div className="hours-row-details">
                            <span className="hours-day-details">Saturday</span>
                            <span className="hours-time-details">10:00 AM – 2:00 PM</span>
                        </div>
                        <div className="hours-row-details">
                            <span className="hours-day-details">Sunday</span>
                            <span className="hours-time-details closed">Closed</span>
                        </div>
                        <p className="text-[12px] text-[#71717A] leading-relaxed mt-4">
                            All times are West Africa Time (WAT, UTC+1). We aim to respond to all enquiries within one business day.
                        </p>
                    </div>

                    {/* Value Prop widget */}
                    <div className="why-card-contact">
                        <h3 className="font-serif-theme">Why teams choose SNL Services</h3>
                        {[
                            { title: 'Practitioner-led', desc: 'every programme is built and delivered by operators, not academics' },
                            { title: 'Enterprise-tested', desc: 'methodologies refined across technology, fintech, and telecoms sectors' },
                            { title: 'Tailored delivery', desc: 'corporate bootcamps, cohort programmes, and custom builds available' },
                            { title: 'Certified outcomes', desc: 'SNL certification signals execution readiness to clients and leadership' }
                        ].map((pt, idx) => (
                            <div key={idx} className="why-item-contact">
                                <div className="why-dot-contact" />
                                <div className="why-text-contact"><strong>{pt.title}</strong> — {pt.desc}</div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Office Locations */}
            <section className="offices-strip-contact px-8">
                <div className="offices-inner-contact">
                    <h2>Our presence</h2>
                    <div className="offices-grid-contact">
                        <div className="office-card-contact">
                            <div className="office-name-contact">Lagos — Head Office</div>
                            <div className="office-address-contact">
                                SNL Services Limited<br />
                                Lagos, Nigeria<br />
                                <a href="mailto:training@snl-services.com" className="text-[#7D3C98] text-xs font-semibold hover:underline">
                                    training@snl-services.com
                                </a>
                            </div>
                        </div>
                        <div className="office-card-contact">
                            <div className="office-name-contact">In-Person Training</div>
                            <div className="office-address-contact">
                                Facilitated across Lagos and other major Nigerian cities.<br />
                                Custom venue arrangements available on request.
                            </div>
                        </div>
                        <div className="office-card-contact">
                            <div className="office-name-contact">Virtual Delivery</div>
                            <div className="office-address-contact">
                                All SNL Academy programmes available fully online — live instructor-led with breakout rooms and real-time collaboration.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}