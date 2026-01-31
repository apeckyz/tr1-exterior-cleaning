'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { siteConfig } from '@/data/config'

export default function WhyUs() {
  return (
    <section id="why-us" className="section-padding bg-black">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-tr1-blue to-primary-brand-700" />
              
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-white text-center space-y-6">
                  <div className="text-7xl font-bold">2022</div>
                  <div className="text-2xl font-semibold">Established</div>
                  <div className="text-lg opacity-90">Serving Cornwall & Devon</div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-8 -right-8 bg-black p-8 rounded-xl shadow-xl border border-slate-800"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-tr1-blue">100%</div>
                <div className="text-sm text-slate-400 mt-1">Satisfaction Rate</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
                {siteConfig.whyUs.headline}
              </h2>
              <p className="text-lg text-slate-400">
                {siteConfig.whyUs.subheadline}
              </p>
            </div>

            <div className="space-y-6">
              {siteConfig.whyUs.points.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-tr1-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {point.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-tr1-blue text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get Started Today
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
