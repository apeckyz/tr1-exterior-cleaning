'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, Shield, Users } from 'lucide-react'
import { siteConfig } from '@/data/config'

export default function TrustIndicators() {
  return (
    <section className="section-padding bg-black border-y border-slate-800">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              {siteConfig.about.headline}
            </h2>
            
            <p className="text-lg text-slate-400 leading-relaxed">
              {siteConfig.about.story}
            </p>
            
            <p className="text-lg text-slate-400 leading-relaxed">
              {siteConfig.about.positioning}
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-tr1-blue/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-tr1-blue" />
                </div>
                <div className="text-sm font-semibold text-white">Premier Service</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-tr1-blue/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-tr1-blue" />
                </div>
                <div className="text-sm font-semibold text-white">Fully Insured</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-tr1-blue/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-tr1-blue" />
                </div>
                <div className="text-sm font-semibold text-white">Expert Team</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/contrast.jpg"
                alt="TR1 Exterior Cleaning - Professional roof cleaning results"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="text-white space-y-2">
                  <div className="text-3xl md:text-4xl font-bold">TR1 Exterior Cleaning</div>
                  <div className="text-lg text-slate-200">Professional Results • Cornwall & Devon</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
