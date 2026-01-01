// app/layout.jsx
import '@/global.css'
import { Inter, Space_Grotesk } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-bleach',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

// Viewport export (required to silence the warnings)
export const viewport = {
  themeColor: '#D4AF37',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

// Metadata without viewport-related fields
export const metadata = {
  title: 'Kaesar Reich | Sovereign Trinity',
  description: 'The Silenced have found a Voice. Forge your path to digital sovereignty through elite education in the Reich.',
  keywords: 'kaesar reich, digital education, marketing courses, AI mastery, web development, trading, business strategy, data analytics',
  authors: [{ name: 'Kaesar Collective' }],
  creator: 'Kaesar Reich',
  publisher: 'Kaesar Collective',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Kaesar Reich | Sovereign Trinity',
    description: 'The Silenced have found a Voice.',
    url: 'https://kaesarreich.com',
    siteName: 'Kaesar Reich',
    images: [
      {
        url: 'https://kaesarreich.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kaesar Reich - Forge Your Empire',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaesar Reich | Sovereign Trinity',
    description: 'The Silenced have found a Voice.',
    images: ['https://kaesarreich.com/twitter-image.jpg'],
    creator: '@kaesarreich',
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
  verification: {
    google: 'your-google-verification-token',
    yandex: 'your-yandex-verification-token',
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
        {/* Font preconnects */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-black text-white font-inter antialiased`}>
        {/* Global Scanline Overlay */}
        <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
          <div className="scanline absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent animate-scan" />
        </div>
        {children}
      </body>
    </html>
  )
}