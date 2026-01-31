'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, MessageCircle, Star } from 'lucide-react'
import { siteConfig } from '@/data/config'
import PrivacyModal from './PrivacyModal'

/**
 * Footer Component
 * 
 * Comprehensive footer with contact form, social links, and legal information.
 * Includes JMCDEV attribution and Privacy Policy modal.
 * 
 * Customization:
 * - Update JMCDEV link color by modifying hover:text-primary-brand-600 class
 * - Change social media links in data/config.ts
 * - Customize form styling via Tailwind classes
 */
export default function Footer() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false)
  return (
    <footer id="contact" className="bg-black text-white border-t border-slate-800">
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Make Your Appointment Now
              </h2>
              <p className="text-lg md:text-xl text-slate-300 mb-8">
                Get a free estimate and experience top-quality exterior cleaning service.
              </p>

              <div className="space-y-4">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>{siteConfig.contact.phone}</span>
                </a>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-green-500 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp: {siteConfig.contact.phone}</span>
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>{siteConfig.contact.email}</span>
                </a>
                <a
                  href={siteConfig.contact.googleReviews}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-yellow-500 transition-colors"
                >
                  <Star className="w-5 h-5" />
                  <span>Leave us a Google Review</span>
                </a>
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="w-5 h-5" />
                  <span>{siteConfig.contact.address}</span>
                </div>
                <div className="pt-4 border-t border-slate-700">
                  <div className="text-sm font-semibold text-white mb-2">Opening Hours</div>
                  <div className="text-slate-300 text-sm space-y-1">
                    <div>{siteConfig.contact.hours.weekday}</div>
                    <div>{siteConfig.contact.hours.weekend}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-900 rounded-2xl p-8 shadow-2xl border border-slate-800"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Get a Free Estimate
              </h3>
              
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)
                const name = formData.get('name')
                const email = formData.get('email')
                const phone = formData.get('phone')
                const service = formData.get('service')
                const areaSize = formData.get('area-size')
                const date = formData.get('booking-date')
                const time = formData.get('booking-time')
                const message = formData.get('message')
                
                const whatsappMessage = `Hi, I'd like to book a service:%0A%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AService: ${service}%0AArea Size: ${areaSize}m²%0APreferred Date: ${date}%0APreferred Time: ${time}%0AAdditional Details: ${message}`
                
                window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${whatsappMessage}`, '_blank')
              }}>
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-black border-2 border-slate-700 rounded-lg focus:border-tr1-blue focus:outline-none transition-colors text-white"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-black border-2 border-slate-700 rounded-lg focus:border-tr1-blue focus:outline-none transition-colors text-white"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-black border-2 border-slate-700 rounded-lg focus:border-tr1-blue focus:outline-none transition-colors text-white"
                    placeholder="07519 310385"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-slate-300 mb-2">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 bg-black border-2 border-slate-700 rounded-lg focus:border-tr1-blue focus:outline-none transition-colors text-white"
                    required
                  >
                    <option value="">Select a service...</option>
                    <option value="roof-cleaning">Roof Cleaning</option>
                    <option value="soft-washing">Soft Washing</option>
                    <option value="driveways-patios-decking">Driveways, Patios & Decking</option>
                    <option value="gutter-cleaning">Gutter Cleaning</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="area-size" className="block text-sm font-semibold text-slate-300 mb-2">
                    Area Size (m²)
                  </label>
                  <input
                    type="number"
                    id="area-size"
                    name="area-size"
                    className="w-full px-4 py-3 bg-black border-2 border-slate-700 rounded-lg focus:border-tr1-blue focus:outline-none transition-colors text-white"
                    placeholder="e.g. 50"
                    min="1"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="booking-date" className="block text-sm font-semibold text-slate-300 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="booking-date"
                      name="booking-date"
                      className="w-full px-4 py-3 bg-black border-2 border-slate-700 rounded-lg focus:border-tr1-blue focus:outline-none transition-colors text-white"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div>
                    <label htmlFor="booking-time" className="block text-sm font-semibold text-slate-300 mb-2">
                      Preferred Time
                    </label>
                    <select
                      id="booking-time"
                      name="booking-time"
                      className="w-full px-4 py-3 bg-black border-2 border-slate-700 rounded-lg focus:border-tr1-blue focus:outline-none transition-colors text-white"
                    >
                      <option value="">Select time...</option>
                      <option value="09:00">09:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">01:00 PM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full px-4 py-3 bg-black border-2 border-slate-700 rounded-lg focus:border-tr1-blue focus:outline-none transition-colors text-white resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book via WhatsApp
                </button>
              </form>
            </motion.div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
              <div className="text-2xl font-bold tracking-tighter text-white">
                {siteConfig.businessName}
              </div>

              <div className="flex gap-6">
                <a
                  href="https://www.facebook.com/tr1exteriorcleaning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-tr1-blue transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>

              <div className="text-slate-400 text-sm">
                © {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <button
                onClick={() => setIsPrivacyModalOpen(true)}
                className="text-slate-400 hover:text-tr1-blue transition-colors underline-offset-4 hover:underline"
              >
                Privacy Policy
              </button>

              <div className="text-slate-500">
                Designed by{' '}
                <a
                  href="https://jmcdev.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:text-tr1-blue hover:underline transition-colors underline-offset-4"
                >
                  jmcdev
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PrivacyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
    </footer>
  )
}
