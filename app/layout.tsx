import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, Cormorant_Garamond, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'


// ── Font optimisation via next/font ──────────────────────────────────────────
// next/font eliminates the render-blocking Google Fonts <link> tags and
// self-hosts the font files at build time, removing a third-party network
// round-trip on every page load.

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-geist-mono',
  display: 'swap',
})

// ── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: 'SNL Services – Sales-as-a-Service',
    template: '%s | SNL Services',
  },
  description:
    'SNL Services designs, deploys, and operates commercial engines for organisations that refuse to leave growth to chance.',
  metadataBase: new URL('https://snl-services.com'),
  openGraph: {
    title: 'SNL Services – Sales-as-a-Service',
    description:
      'SNL Services designs, deploys, and operates commercial engines for organisations that refuse to leave growth to chance.',
    siteName: 'SNL Services',
    locale: 'en_US',
    type: 'website',
    url: 'https://snl-services.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SNL Services – Sales-as-a-Service',
    description:
      'SNL Services designs, deploys, and operates commercial engines for organisations that refuse to leave growth to chance.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

// ── Root layout ───────────────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-US"
      // Inject CSS custom properties that map to the next/font variables so
      // globals.css continues to reference --serif / --sans / etc. unchanged.
      className={`${playfair.variable} ${dmSans.variable} ${cormorant.variable} ${geistMono.variable}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}