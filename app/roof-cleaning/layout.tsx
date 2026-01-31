import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Roof Cleaning Cornwall | Professional Moss Removal | TR1 Exterior Cleaning',
  description: 'Expert roof cleaning services in Cornwall. Remove moss, algae, and lichens safely. Extends roof life, improves appearance. Free gutter cleaning with every roof clean. Get a free estimate.',
  keywords: 'roof cleaning Cornwall, moss removal, roof moss cleaning, algae removal roof, roof cleaning service Cornwall',
}

export default function RoofCleaningLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
