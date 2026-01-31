'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { siteConfig } from '@/data/config'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-slate-600">
            Don't just take our word for it
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {siteConfig.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-primary-brand-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-brand-600 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="border-t border-slate-200 pt-4">
                <div className="font-bold text-slate-900">{testimonial.name}</div>
                <div className="text-sm text-slate-600">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
