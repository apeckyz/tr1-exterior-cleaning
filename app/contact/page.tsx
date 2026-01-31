'use client'

import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'

export default function ContactPage() {
  return (
    <PageTransition>
      <main className="min-h-screen">
        <div className="bg-black pt-28">
          <Footer />
        </div>
      </main>
    </PageTransition>
  )
}
