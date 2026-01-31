'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'

/**
 * PrivacyModal Component
 * 
 * A modal dialog for displaying privacy policy content.
 * Features backdrop blur, smooth animations, and scroll lock.
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Controls modal visibility
 * @param {() => void} props.onClose - Callback when modal is closed
 * 
 * @example
 * const [isOpen, setIsOpen] = useState(false)
 * <PrivacyModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
 */
export default function PrivacyModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900">Privacy Policy</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6 text-slate-600" />
                </button>
              </div>

              <div className="overflow-y-auto p-6 space-y-4 text-slate-700">
                <p className="text-sm text-slate-500">Last updated: January 2026</p>
                
                <section>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Introduction</h3>
                  <p>
                    We respect your privacy and are committed to protecting your personal data. 
                    This privacy policy will inform you about how we look after your personal data 
                    when you visit our website and tell you about your privacy rights.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Data We Collect</h3>
                  <p>We may collect, use, store and transfer different kinds of personal data about you:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Identity Data (name, username)</li>
                    <li>Contact Data (email address, telephone numbers)</li>
                    <li>Technical Data (IP address, browser type)</li>
                    <li>Usage Data (how you use our website)</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">How We Use Your Data</h3>
                  <p>
                    We will only use your personal data when the law allows us to. Most commonly, 
                    we will use your personal data to provide services to you, to improve our website, 
                    and to communicate with you about our services.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Data Security</h3>
                  <p>
                    We have put in place appropriate security measures to prevent your personal data 
                    from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Your Rights</h3>
                  <p>
                    Under certain circumstances, you have rights under data protection laws in relation 
                    to your personal data, including the right to request access, correction, erasure, 
                    restriction, transfer, or to object to processing.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Contact Us</h3>
                  <p>
                    If you have any questions about this privacy policy or our privacy practices, 
                    please contact us using the contact information provided on our website.
                  </p>
                </section>
              </div>

              <div className="p-6 border-t border-slate-200">
                <button
                  onClick={onClose}
                  className="w-full px-6 py-3 bg-primary-brand-600 text-white font-semibold rounded-lg hover:bg-primary-brand-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
