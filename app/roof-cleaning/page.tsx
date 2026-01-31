'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle2, AlertTriangle } from 'lucide-react'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'

export default function RoofCleaningPage() {
  const facts = [
    "The freeze and thaw process of the moss can result in cracked & dislodged tiles.",
    "The weight of all that extra moss on your roof can stress your roofing structure beneath the tiling.",
    "Moss will block your guttering and fail your roof drainage system which could potentially cause future problems in the eaves section of your roof.",
    "Most roofs with mortar systems for the ridges and gables will suffer early deterioration from the moss attacking the cement works.",
    "When dislodged from your roof, moss can become a nuisance when scattered all over your patio/driveway.",
    "Your roof is a major part of your home and unsightly moss and algae growth can sometimes be an eyesore to look at."
  ]

  const benefits = [
    "Cleaning your roof will instantly transform the look of your home.",
    "Manually removing the moss from your roof and treating for further protection can extend the life of your roof.",
    "Increases kerb appeal and can also increase property value.",
    "Keeps your guttering and roof drainage system working as it should - thus protecting the eaves section.",
    "No more sweeping moss from the ground that has fallen from your roof.",
    "By choosing TR1 Exterior Cleaning for a complete overhaul of your roof you can save money on replacing your roof."
  ]

  return (
    <PageTransition>
      <main className="min-h-screen bg-tr1-black">
        
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black z-0" />
          <div className="absolute inset-0 z-0">
            <Image
              src="/contrast.jpg"
              alt="Roof cleaning contrast - before and after"
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
                Roof Cleaning Service
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
                Many concrete and clay tiles in the UK suffer with moss and algae growth. Moss, algae, and lichens typically appear worse on the most north-facing side of your roof, as they thrive in damp, shaded areas. If left untreated, these moss invaders can potentially harm your roofing system, causing potential damp on your internal walls.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Special Offer Banner */}
        <section className="py-8 bg-tr1-blue">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-tr1-white">
                WITH EVERY ROOF CLEAN WE WILL DO YOUR GUTTERS FOR FREE
              </h2>
            </motion.div>
          </div>
        </section>

        {/* Before/After Comparison */}
        <section className="section-padding bg-slate-900">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-tr1-white mb-4">
                See The Transformation
              </h2>
              <p className="text-lg text-slate-400">
                Real results from our professional roof cleaning service
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/before.jpg"
                    alt="Roof before cleaning - covered in moss and algae"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg font-bold">
                    BEFORE
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/after.jpg"
                    alt="Roof after cleaning - clean and restored"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-lg font-bold">
                    AFTER
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Facts Section - Why Moss is Harmful */}
        <section className="section-padding bg-tr1-black">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-8">
                <AlertTriangle className="w-10 h-10 text-tr1-blue" />
                <h2 className="text-4xl md:text-5xl font-bold text-tr1-white">
                  Why Moss is Harmful
                </h2>
              </div>
              
              <ul className="space-y-4">
                {facts.map((fact, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-1">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                    </div>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      {fact}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-slate-900">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-8">
                <CheckCircle2 className="w-10 h-10 text-tr1-blue" />
                <h2 className="text-4xl md:text-5xl font-bold text-tr1-white">
                  Benefits of Roof Cleaning
                </h2>
              </div>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
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
                      {benefit}
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
                Ready to Transform Your Roof?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Get a free estimate and save money on roof replacement with our professional cleaning service.
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
