import React from 'react';
import './event.css';
import EventHero from '@/components/event/EventHero';
import Link from 'next/link';
import NotifyStrip from '@/components/event/NotifyStrip';
import PartnersStrip from '@/components/event/PartnersStrip';
import EventList from '@/components/event/EventList';


export default function EventPage() {
    return (
        <>

            <main className="max-w-[1240px] mx-auto px-8 overflow-hidden">
                <EventHero />

                {/* Tab Sub-Navigation bar */}
                <div className="tab-bar-event">
                    <button className="tab-btn active font-semibold">
                        Past events <span className="tab-count">3</span>
                    </button>
                    <Link href="/contact" className="tab-cta font-semibold">
                        Host an event with SNL &rarr;
                    </Link>
                </div>

                <EventList />
                <PartnersStrip />
                <NotifyStrip />
            </main>

        </>
    );
}