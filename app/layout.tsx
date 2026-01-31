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
