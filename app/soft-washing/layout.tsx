import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Soft Washing Cornwall | Render, Wall & Roof Cleaning | TR1 Exterior Cleaning',
  description: 'Professional soft washing services in Cornwall. Safe, HSE-approved chemicals for render, walls, roofs, and conservatories. Longer lasting results with no surface damage.',
  keywords: 'soft washing Cornwall, render cleaning, wall cleaning, low pressure cleaning, soft wash service Cornwall',
}

export default function SoftWashingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
