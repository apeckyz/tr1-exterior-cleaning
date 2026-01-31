'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'
import { siteConfig } from '@/data/config'

export default function ContactPage() {
  return (
    <PageTransition>
      <main className="min-h-screen">
        
        <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 via-white to-slate-100">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6"
              >
                Get in Touch
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-xl text-slate-600 leading-relaxed"
              >
                Ready to get started? Contact us today for a free quote
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">
                    Contact Information
                  </h2>
                  <p className="text-lg text-slate-600 mb-8">
                    Have questions? We're here to help. Reach out through any of the channels below.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-primary-brand-400 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-brand-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary-brand-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
                      <a href={`tel:${siteConfig.contact.phone}`} className="text-slate-600 hover:text-primary-brand-600 transition-colors">
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-primary-brand-400 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-brand-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary-brand-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                      <a href={`mailto:${siteConfig.contact.email}`} className="text-slate-600 hover:text-primary-brand-600 transition-colors">
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-primary-brand-400 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-brand-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary-brand-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Address</h3>
                      <p className="text-slate-600">{siteConfig.contact.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-primary-brand-400 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-brand-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary-brand-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Business Hours</h3>
                      <p className="text-slate-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-slate-600">Saturday: 9:00 AM - 4:00 PM</p>
                      <p className="text-slate-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-slate-200"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Request a Quote
                </h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-slate-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-primary-brand-500 focus:outline-none transition-colors text-slate-900"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-slate-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-primary-brand-500 focus:outline-none transition-colors text-slate-900"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-primary-brand-500 focus:outline-none transition-colors text-slate-900"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-primary-brand-500 focus:outline-none transition-colors text-slate-900"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-primary-brand-500 focus:outline-none transition-colors text-slate-900"
                    >
                      <option value="">Select a service</option>
                      {siteConfig.services.map((service) => (
                        <option key={service.id} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-primary-brand-500 focus:outline-none transition-colors text-slate-900 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-primary-brand-600 text-white font-semibold rounded-lg hover:bg-primary-brand-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  )
}
