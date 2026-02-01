import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CookieConsent from '@/components/CookieConsent'
import { MorphicNavbar } from '@/components/kokonutui/morphic-navbar'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TR1 Exterior Cleaning | Professional Cleaning Services Cornwall',
  description: 'Professional exterior cleaning services in Cornwall. Specialising in roof cleaning, soft washing, driveway cleaning, patio cleaning, and gutter cleaning.',
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: ['/favicon/favicon.ico'],
  },
  manifest: '/favicon/site.webmanifest',
  openGraph: {
    title: 'TR1 Exterior Cleaning | Professional Cleaning Services Cornwall',
    description: 'Professional exterior cleaning services in Cornwall. Specialising in roof cleaning, soft washing, driveway cleaning, patio cleaning, and gutter cleaning.',
    type: 'website',
    images: [
      {
        url: '/tr1.jpg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TR1 Exterior Cleaning | Professional Cleaning Services Cornwall',
    description: 'Professional exterior cleaning services in Cornwall. Specialising in roof cleaning, soft washing, driveway cleaning, patio cleaning, and gutter cleaning.',
    images: ['/tr1.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <MorphicNavbar />
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
