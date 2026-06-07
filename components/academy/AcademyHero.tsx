import React from 'react';

export default function AcademyHero() {
    return (
        <section className="academy-hero-bg">
            <div className="max-w-[1240px] mx-auto px-8 text-center relative z-10">
                <span className="font-mono-theme text-xs font-bold uppercase tracking-[5px] text-[#C8923A] mb-5 block">
                    SNL Academy
                </span>
                <h1 className="font-serif-theme text-white text-4xl md:text-5xl font-light mt-4 leading-tight max-w-[700px] mx-auto">
                    Structured programmes to build<br />commercial capability at scale
                </h1>
                <p className="text-white/60 text-base max-w-[600px] mx-auto mt-6 leading-relaxed">
                    From sales execution to business fundamentals, our certification programmes equip teams and founders with the disciplines, frameworks, and confidence to grow revenue predictably.
                </p>
            </div>
        </section>
    );
}