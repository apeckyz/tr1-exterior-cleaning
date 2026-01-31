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
  title: 'Premium Service Business Template',
  description: 'A designer-led, premium landing page template for service businesses',
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
    title: 'Premium Service Business Template',
    description: 'A designer-led, premium landing page template for service businesses',
    type: 'website',
    images: [
      {
        url: '/tr1.jpg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Service Business Template',
    description: 'A designer-led, premium landing page template for service businesses',
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
