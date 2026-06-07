// app/page.tsx
// This is a React Server Component (no 'use client' needed).
// Each section component declares its own 'use client' boundary only where
// client-side interactivity is required — keeping the JS bundle minimal.

import type { Metadata } from 'next'
import HeroSlider from '@/components/homepage/HeroSlider'
import BrandStrip from '@/components/homepage/BrandStrip'
import OffersSection from '@/components/homepage/OffersSection'
import CommercialStack from '@/components/homepage/CommercialStack'
import ProcessSection from '@/components/homepage/ProcessSection'
import MetricsSection from '@/components/homepage/MetricsSection'
import WhySection from '@/components/homepage/WhySection'
import CTA from '@/components/homepage/CTA'

// Page-level metadata (overrides / extends the root layout metadata)
export const metadata: Metadata = {
  title: 'SNL Services – Sales-as-a-Service',
  description:
    'SNL Services designs, deploys, and operates commercial engines for organisations that refuse to leave growth to chance. We execute. You scale.',
  alternates: {
    canonical: 'https://snl-services.com',
  },
}

export default function HomePage() {
  return (
    <main>
      {/*
        HeroSlider — 'use client' (needs useState / timers / touch events)
        All other sections below are Server Components unless they declare
        their own 'use client' boundary.
      */}
      <HeroSlider />
      <BrandStrip />
      <OffersSection />
      <CommercialStack />
      <ProcessSection />
      <MetricsSection />
      <WhySection />
      <CTA />
    </main>
  )
}