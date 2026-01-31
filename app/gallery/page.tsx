'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'

export default function Gallery() {
  const galleryImages = [
    { src: '/before.jpg', title: 'Roof Before', category: 'Roof Cleaning' },
    { src: '/after.jpg', title: 'Roof After', category: 'Roof Cleaning' },
    { src: '/contrast.jpg', title: 'Roof Contrast', category: 'Roof Cleaning' },
    { src: '/deckingbefore.jpg', title: 'Decking Before', category: 'Decking' },
    { src: '/deckingafter.jpg', title: 'Decking After', category: 'Decking' },
    { src: '/decking-inprocess.jpg', title: 'Decking In Progress', category: 'Decking' },
    { src: '/wallbefore.jpg', title: 'Wall Before', category: 'Wall Cleaning' },
    { src: '/wallafter.jpg', title: 'Wall After', category: 'Wall Cleaning' },
    { src: '/wallcleanbefore.jpg', title: 'Wall Before 2', category: 'Wall Cleaning' },
    { src: '/wallcleanafter.jpg', title: 'Wall After 2', category: 'Wall Cleaning' },
    { src: '/drivewaymidclean.jpg', title: 'Driveway Mid-Clean', category: 'Driveway' },
    { src: '/patio clean.jpg', title: 'Patio Clean', category: 'Patio' },
    { src: '/garden concrete after.jpg', title: 'Garden Concrete After', category: 'Concrete' },
    { src: '/garden concrete clean floor.jpg', title: 'Garden Floor Clean', category: 'Concrete' },
    { src: '/commercialbefore.jpg', title: 'Commercial Before', category: 'Commercial' },
    { src: '/commercial after.jpg', title: 'Commercial After', category: 'Commercial' },
    { src: '/commercialclean.jpg', title: 'Commercial Clean', category: 'Commercial' },
    { src: '/gutter clean.jpg', title: 'Gutter Clean', category: 'Gutters' },
    { src: '/clean gutter.jpg', title: 'Clean Gutter', category: 'Gutters' },
  ]

  return (
    <PageTransition>
      <main className="min-h-screen bg-tr1-black">
        
        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-tr1-black z-0" />
          
          <div className="container-custom relative z-10 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-tr1-white mb-6">
                Our Work Gallery
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
                See the transformations we've achieved for our clients across Cornwall and Devon.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="section-padding bg-tr1-black">
          <div className="container-custom">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 9) * 0.1, duration: 0.5 }}
                  className="group relative aspect-square overflow-hidden rounded-lg bg-slate-900"
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6">
                    <div className="text-tr1-white">
                      <h3 className="text-lg md:text-xl font-bold mb-1">{image.title}</h3>
                      <p className="text-sm md:text-base text-slate-300">{image.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-slate-900">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-tr1-white mb-6">
                Ready for Your Transformation?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Get a free estimate and see what we can do for your property.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-tr1-blue text-tr1-white font-semibold rounded-lg hover:bg-primary-brand-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get Your Free Estimate
              </a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  )
}
