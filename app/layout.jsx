import '@/global.css'
import { Inter, Playfair_Display } from 'next/font/google'

// Keep Inter for clean, readable body paragraphs
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Add Playfair Display for those beautiful, luxury serif headings
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

// Viewport export (required to silence Next.js warnings)
export const viewport = {
  themeColor: '#D4AF37', // Kept your signature gold
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

// Complete metadata overhaul for the new brand
export const metadata = {
  title: 'SovereignSkies | Where The Sky Bows',
  description: 'Elite aerial cinematography for luxury real estate, world-class hospitality, and high-end motion picture productions. Directed by Hugh Franco.',
  keywords: 'aerial cinematography, drone videography, luxury real estate drones, heavy-lift drones, FPV tracking, resort video, SovereignSkies, Hugh Franco',
  authors: [{ name: 'Hugh Franco' }],
  creator: 'SovereignSkies',
  publisher: 'SovereignSkies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'SovereignSkies | Aerial Cinematography',
    description: 'Precision aerial solutions. Elevating the destination and the narrative.',
    url: 'https://sovereignskies.com',
    siteName: 'SovereignSkies',
    images: [
      {
        url: 'https://sovereignskies.com/og-image.jpg', // Make sure to upload an actual image here later
        width: 1200,
        height: 630,
        alt: 'SovereignSkies - Where The Sky Bows',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SovereignSkies | Aerial Cinematography',
    description: 'Precision aerial solutions. Elevating the destination and the narrative.',
    images: ['https://sovereignskies.com/twitter-image.jpg'],
    creator: '@SovereignSkyz_',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icons/favicon.ico',
    shortcut: '/icons/favicon-16x16.png',
    apple: '/icons/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased scroll-smooth">
      <head>
        <link rel="icon" href="/icons/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      {/* Applied the new fonts to the body */}
      <body className={`${inter.variable} ${playfair.variable} bg-black text-white font-inter antialiased`}>
        {children}
      </body>
    </html>
  )
}