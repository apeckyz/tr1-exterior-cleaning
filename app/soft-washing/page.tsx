'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'

export default function SoftWashing() {
  const features = [
    "Safe, non-aggressive chemicals",
    "UK Health & Safety Executive approved",
    "Longer lasting results",
    "No damage to surfaces",
    "Uses less water",
    "Little or no noise",
    "More cost-effective"
  ]

  const surfaces = [
    "Walls and Render",
    "Roofs",
    "Conservatories",
    "Wood Panelling"
  ]

  return (
    <PageTransition>
      <main className="min-h-screen bg-tr1-black">
        
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black z-0" />
          <div className="absolute inset-0 z-0">
            <Image
              src="/wallafter.jpg"
              alt="Wall after soft washing"
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
                Soft Washing
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
                Specialist low-pressure cleaning using safe, HSE-approved chemicals. Perfect for render, roofs, conservatories, and wood panelling. Longer lasting results with no surface damage.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What is Soft Washing */}
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
                What is Soft Washing?
              </h2>
              
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                A cleaning method using low-pressure equipment to clean and sanitize exterior surfaces from the safety of the ground or a platform. Uses safe, non-aggressive chemicals fully approved by the UK Health & Safety Executive.
              </p>

              <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 mb-12">
                <h3 className="text-2xl font-bold text-tr1-white mb-6">Best Used For:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {surfaces.map((surface, index) => (
                    <motion.div
                      key={surface}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-6 h-6 text-tr1-blue flex-shrink-0" />
                      <span className="text-lg text-slate-300">{surface}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="section-padding bg-slate-900">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-tr1-white mb-8">
                Key Benefits
              </h2>
              
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex gap-4 items-start"
                  >
                    <CheckCircle2 className="w-6 h-6 text-tr1-blue flex-shrink-0 mt-1" />
                    <p className="text-lg text-slate-300 leading-relaxed">
                      {feature}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-tr1-black border-t border-slate-800">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-tr1-white mb-6">
                Ready for Professional Soft Washing?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Get a free estimate for our specialist soft washing service.
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
