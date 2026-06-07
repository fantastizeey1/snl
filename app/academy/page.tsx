
import AcademyHero from '@/components/academy/AcademyHero';
import './academy.css';
import AcademyCourses from '@/components/academy/AcademyCourses';
import Footer from '@/components/layout/Footer';

export default function AcademyPage() {
    return (
        <>

            <main className="max-w-[1240px] mx-auto px-8 overflow-hidden bg-white">
                <AcademyHero />

                {/* Dynamic Stats Row Component */}
                <div className="academy-stats">
                    <div className="stat-item-academy">
                        <div className="stat-num-academy font-serif-theme">13</div>
                        <div className="stat-label-academy font-mono-theme">Courses available</div>
                    </div>
                    <div className="stat-item-academy">
                        <div className="stat-num-academy font-serif-theme">2</div>
                        <div className="stat-label-academy font-mono-theme">Programme tracks</div>
                    </div>
                    <div className="stat-item-academy">
                        <div className="stat-num-academy font-serif-theme">5</div>
                        <div className="stat-label-academy font-mono-theme">Certifications</div>
                    </div>
                </div>

                <AcademyCourses />
            </main>
            <Footer />
        </>
    );
}