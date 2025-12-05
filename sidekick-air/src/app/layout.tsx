import type { Metadata, Viewport } from 'next'
import { displayFont, bodyFont } from '@/lib/fonts'
import { Header } from '@/components/layout'
import { Footer } from '@/components/layout'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://sidekickair.com'),
  title: 'Sidekick Air | Reimagining Recovery',
  description: 'The world\'s first inflatable therapy table. Professional-grade strength. Packs like a yoga mat. Go anywhere healing needs to happen.',
  keywords: ['therapy table', 'massage table', 'portable therapy', 'inflatable table', 'physical therapy', 'sports recovery', 'sidekick air'],
  authors: [{ name: 'Sidekick Air' }],
  creator: 'Sidekick Air',
  publisher: 'Sidekick Air',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sidekickair.com',
    siteName: 'Sidekick Air',
    title: 'Sidekick Air | Reimagining Recovery',
    description: 'The world\'s first inflatable therapy table. Professional-grade strength. Packs like a yoga mat.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sidekick Air - Reimagining Recovery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sidekick Air | Reimagining Recovery',
    description: 'The world\'s first inflatable therapy table. Professional-grade strength. Packs like a yoga mat.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1C1C1E',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-screen bg-graphite antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
