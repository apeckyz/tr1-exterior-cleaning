import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'
import WhyUs from '@/components/WhyUs'
import Testimonials from '@/components/Testimonials'
import MediaPlaceholder from '@/components/MediaPlaceholder'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | TR1 Exterior Cleaning Cornwall',
  description: 'Learn about TR1 Exterior Cleaning - Cornwall\'s trusted exterior cleaning specialists. Professional, reliable, and fully insured with 5-star customer reviews.',
  keywords: 'about TR1 exterior cleaning, Cornwall cleaning company, professional exterior cleaning, trusted cleaning service',
}

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="min-h-screen">
        
        <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 via-white to-slate-100">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6">
                About Our Company
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Building trust through excellence, one project at a time
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Our Story
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Founded over 15 years ago, we've grown from a small local operation into 
                  a trusted name in professional services. Our journey has been built on a 
                  simple philosophy: deliver exceptional quality, every single time.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  What started as a passion project has evolved into a full-service business 
                  that serves thousands of satisfied clients. We've never lost sight of what 
                  matters most—your satisfaction and trust.
                </p>
              </div>
              <div>
                <MediaPlaceholder type="image" aspectRatio="landscape" className="rounded-2xl shadow-xl" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-24">
              <div className="text-center p-8 bg-white rounded-2xl border-2 border-slate-200">
                <div className="text-5xl font-bold text-primary-brand-600 mb-2">15+</div>
                <div className="text-slate-600 font-semibold">Years in Business</div>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl border-2 border-slate-200">
                <div className="text-5xl font-bold text-primary-brand-600 mb-2">5,000+</div>
                <div className="text-slate-600 font-semibold">Happy Clients</div>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl border-2 border-slate-200">
                <div className="text-5xl font-bold text-primary-brand-600 mb-2">100%</div>
                <div className="text-slate-600 font-semibold">Satisfaction Rate</div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Our Values
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="p-6 bg-slate-50 rounded-xl">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Quality First</h3>
                  <p className="text-slate-600">
                    We never compromise on quality. Every project receives our full attention and expertise.
                  </p>
                </div>
                <div className="p-6 bg-slate-50 rounded-xl">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Customer Focus</h3>
                  <p className="text-slate-600">
                    Your needs drive everything we do. We listen, adapt, and deliver exactly what you need.
                  </p>
                </div>
                <div className="p-6 bg-slate-50 rounded-xl">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Integrity</h3>
                  <p className="text-slate-600">
                    Honest communication and transparent pricing. No surprises, just reliable service.
                  </p>
                </div>
                <div className="p-6 bg-slate-50 rounded-xl">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Innovation</h3>
                  <p className="text-slate-600">
                    We stay ahead with the latest techniques and equipment to serve you better.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WhyUs />
        <Testimonials />
        <Footer />
      </main>
    </PageTransition>
  )
}
