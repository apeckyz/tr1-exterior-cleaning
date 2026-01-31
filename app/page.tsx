import Hero from '@/components/Hero'
import TrustIndicators from '@/components/TrustIndicators'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'
import ServicesPreview from '@/components/ServicesPreview'
import WhyUs from '@/components/WhyUs'
import GoogleReviews from '@/components/GoogleReviews'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TR1 Exterior Cleaning | Professional Roof, Driveway & Patio Cleaning Cornwall',
  description: 'Professional exterior cleaning services in Cornwall. Specialising in roof cleaning, soft washing, driveway cleaning, patio cleaning, and gutter cleaning. 5-star rated service with free estimates.',
  keywords: 'exterior cleaning Cornwall, roof cleaning, driveway cleaning, patio cleaning, soft washing, gutter cleaning, pressure washing Cornwall',
}

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-black">
        <Hero />
        <TrustIndicators />
        <ServicesPreview />
        <WhyUs />
        <GoogleReviews />
        <Footer />
      </main>
    </PageTransition>
  )
}
