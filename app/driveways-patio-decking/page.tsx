'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'

export default function DrivewaysPatioDecking() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-tr1-black">
        
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black z-0" />
          <div className="absolute inset-0 z-0">
            <Image
              src="/drivewaymidclean.jpg"
              alt="Driveway cleaning in progress"
              fill
              className="object-cover opacity-40"
              priority
            />
          </div>
          
          <div className="container-custom relative z-10 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-tr1-white mb-6">
                Driveways, Patios & Decking
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
                Professional cleaning using modern commercial pressure washer equipment. Restore your kerb appeal and bring tired, dull driveways back to life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding bg-tr1-black">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-tr1-white mb-8">
                Surfaces We Clean
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {['Monoblock', 'Tarmac', 'Paving', 'Concrete', 'Decking'].map((surface, index) => (
                  <motion.div
                    key={surface}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-slate-900 border border-slate-800 rounded-lg p-6"
                  >
                    <h3 className="text-2xl font-bold text-tr1-white mb-2">{surface}</h3>
                    <p className="text-slate-300">
                      Professional cleaning that removes dirt and grime without damaging the surface.
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-tr1-blue/10 border border-tr1-blue/30 rounded-lg p-8">
                <p className="text-lg text-slate-300 leading-relaxed">
                  Ideal for selling or renting properties. Our professional cleaning service will restore your property's kerb appeal and bring tired, dull driveways back to life.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-slate-900">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-tr1-white mb-6">
                Ready to Restore Your Driveway?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Get a free estimate for professional driveway, patio, or decking cleaning.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-tr1-blue text-tr1-white font-semibold rounded-lg hover:bg-primary-brand-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get Your Free Estimate
              </a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  )
}
