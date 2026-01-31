'use client'

import { motion } from 'framer-motion'
import { Droplets, Sparkles, Home, Shield } from 'lucide-react'
import { siteConfig } from '@/data/config'

const iconMap = {
  Droplets,
  Sparkles,
  Home,
  Shield,
}

export default function Services() {
  return (
    <section id="services" className="section-padding bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-slate-400">
            Comprehensive solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative bg-slate-900 border-2 border-slate-800 rounded-2xl p-8 hover:border-tr1-blue hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-tr1-blue/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="w-14 h-14 bg-tr1-blue/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-tr1-blue transition-colors duration-300">
                    <Icon className="w-7 h-7 text-tr1-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
