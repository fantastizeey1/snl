import './about.css';
import AboutHero from '@/components/about/AboutHero';
import MissionStrip from '@/components/about/MissionStrip';
import CompanyOverview from '@/components/about/CompanyOverview';
import Pillars from '@/components/about/Pillars';
import Lifecycle from '@/components/about/Lifecycle';
import Values from '@/components/about/Values';
import Leadership from '@/components/about/Leadership';
import AboutCta from '@/components/about/AboutCta';

export default function AboutPage() {
    return (
        <>
            <main className="max-w-7xl mx-auto px-6 overflow-hidden">
                <AboutHero />
                <MissionStrip />
                <CompanyOverview />
                <Pillars />
                <Lifecycle />
                <Values />
                <Leadership />
                <AboutCta />
            </main>

        </>
    );
}