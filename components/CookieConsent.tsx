'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie } from 'lucide-react'

/**
 * CookieConsent Component
 * 
 * A GDPR-compliant cookie consent banner that slides up from the bottom.
 * Saves user preference to localStorage to prevent repeated displays.
 * 
 * Customization:
 * - Modify colors by changing Tailwind classes (bg-slate-900, text-white, etc.)
 * - Adjust animation by editing Framer Motion variants
 * - Change localStorage key by updating STORAGE_KEY constant
 * 
 * @example
 * // Add to layout.tsx or root component
 * <CookieConsent />
 */
export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const STORAGE_KEY = 'cookie-consent'

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY)
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 left-6 md:left-auto md:max-w-md z-50"
        >
          <div className="bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-brand-600 rounded-lg flex items-center justify-center">
                <Cookie className="w-5 h-5 text-white" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2">
                  Cookie Consent
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed mb-4">
                  We use cookies to enhance your browsing experience, serve personalized content, 
                  and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleAccept}
                    className="flex-1 px-4 py-2.5 bg-primary-brand-600 text-white font-semibold rounded-lg hover:bg-primary-brand-700 transition-colors"
                  >
                    Accept
                  </button>
                  <button
                    onClick={handleDecline}
                    className="flex-1 px-4 py-2.5 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-colors"
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
