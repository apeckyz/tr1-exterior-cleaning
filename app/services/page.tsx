import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'
import Services from '@/components/Services'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | TR1 Exterior Cleaning Cornwall',
  description: 'Comprehensive exterior cleaning services including roof cleaning, soft washing, driveway & patio cleaning, and gutter cleaning. Professional, reliable service across Cornwall.',
  keywords: 'exterior cleaning services, roof cleaning Cornwall, soft washing, driveway cleaning, patio cleaning, gutter cleaning services',
}

export default function ServicesPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-black">
        <div className="pt-32 pb-16">
          <Services />
        </div>
        <Footer />
      </main>
    </PageTransition>
  )
}
