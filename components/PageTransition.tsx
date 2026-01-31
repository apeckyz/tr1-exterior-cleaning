'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

/**
 * PageTransition Component
 * 
 * Wraps page content with smooth slide animations.
 * Provides a fast, fluid feel when navigating between pages.
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Page content to animate
 * 
 * @example
 * <PageTransition>
 *   <YourPageContent />
 * </PageTransition>
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}
