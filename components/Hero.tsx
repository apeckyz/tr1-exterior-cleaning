'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { siteConfig } from '@/data/config'
import RainGrid from './RainGrid'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Interactive RainGrid Background - Fixed behind content */}
      <div className="absolute inset-0 z-0">
        <RainGrid 
          backgroundColor="#000000"
          gridColor="rgba(125, 211, 252, 0.15)"
          rainColor="rgba(200, 230, 255, 0.7)"
          particleCount={120}
          repelRadius={120}
          repelStrength={0.5}
        />
      </div>
      
      <div className="relative z-10 container-custom pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8 text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.1]"
            >
              {siteConfig.hero.headline}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12"
            >
              <div className="relative w-64 h-64 flex-shrink-0">
                <Image
                  src="/tr1-logo.png"
                  alt="TR1 Exterior Cleaning"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              <div className="relative">
                <div className="bg-slate-900/80 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-slate-800">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-tr1-blue/20 rounded-full flex items-center justify-center">
                      <div className="text-2xl">⭐</div>
                    </div>
                    <div>
                      <div className="font-bold text-white">5.0 Google Rating</div>
                      <div className="text-sm text-slate-400">Based on Google Reviews</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto"
            >
              {siteConfig.hero.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-tr1-blue text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                {siteConfig.hero.ctaText}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/services"
                className="group inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg border-2 border-slate-700 hover:border-tr1-blue transition-all duration-200 hover:shadow-lg"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                {siteConfig.hero.ctaSecondary}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex items-center justify-center gap-8 pt-8 border-t border-slate-800"
            >
              <div>
                <div className="text-3xl font-bold text-tr1-blue">✓</div>
                <div className="text-sm text-slate-400">Fully Insured</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-tr1-blue">HSE</div>
                <div className="text-sm text-slate-400">Approved</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-tr1-blue">100%</div>
                <div className="text-sm text-slate-400">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
    </section>
  )
}
