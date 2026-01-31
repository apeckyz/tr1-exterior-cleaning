'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'

export default function Gutters() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-tr1-black">
        
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black z-0" />
          <div className="absolute inset-0 z-0">
            <Image
              src="/clean gutter.jpg"
              alt="Clean gutter after professional cleaning"
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
                Gutter Cleaning
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
                Internal high-powered vacuuming to remove debris and external soft washing to remove green algae. Can reach high and inaccessible gutters.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Methods Section */}
        <section className="section-padding bg-tr1-black">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-tr1-white mb-12 text-center">
                Our Cleaning Methods
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-slate-900 border border-slate-800 rounded-lg p-8"
                >
                  <div className="w-16 h-16 bg-tr1-blue/20 rounded-lg flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-tr1-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-tr1-white mb-4">
                    Internal Cleaning
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    High-powered Gutter Vacuuming to remove debris and ensure rainwater flows correctly. Can reach high and inaccessible gutters.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-slate-900 border border-slate-800 rounded-lg p-8"
                >
                  <div className="w-16 h-16 bg-tr1-blue/20 rounded-lg flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-tr1-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-tr1-white mb-4">
                    External Cleaning
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Soft washing the outside of gutters to remove green algae and leave them looking bright and new.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Special Offer */}
        <section className="section-padding bg-tr1-blue">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-tr1-white mb-4">
                Free Gutter Cleaning
              </h2>
              <p className="text-xl text-tr1-white">
                With every roof clean, we'll do your gutters for free!
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-tr1-black">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-tr1-white mb-6">
                Keep Your Gutters Flowing
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Get a free estimate for professional gutter cleaning service.
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
