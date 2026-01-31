'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    id: 1,
    author: "Sarah Mitchell",
    rating: 5,
    date: "2 weeks ago",
    text: "Absolutely brilliant service! The team did an amazing job on our roof cleaning. It looks brand new. Very professional and reasonably priced. Highly recommend TR1 Exterior Cleaning!",
    avatar: "SM"
  },
  {
    id: 2,
    author: "David Thompson",
    rating: 5,
    date: "1 month ago",
    text: "Outstanding work on our driveway and patio. The transformation is incredible. The team was punctual, professional, and left everything spotless. Will definitely use again.",
    avatar: "DT"
  },
  {
    id: 3,
    author: "Emma Roberts",
    rating: 5,
    date: "3 weeks ago",
    text: "TR1 did a fantastic job soft washing our render. The attention to detail was impressive and the results speak for themselves. Great communication throughout. 5 stars!",
    avatar: "ER"
  }
]

export default function GoogleReviews() {
  return (
    <section className="section-padding bg-slate-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg md:text-xl text-slate-400">
            Real reviews from real customers on Google
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-black border-2 border-slate-800 rounded-2xl p-8 hover:border-tr1-blue transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-tr1-blue rounded-full flex items-center justify-center text-white font-bold">
                  {review.avatar}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white">{review.author}</h3>
                  <p className="text-sm text-slate-400">{review.date}</p>
                </div>
                <Quote className="w-8 h-8 text-slate-700" />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              <p className="text-slate-300 leading-relaxed">
                {review.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <a
            href="https://g.page/r/CYourGoogleReviewsLinkHere/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-tr1-blue text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Star className="w-5 h-5 mr-2" />
            Leave us a Google Review
          </a>
        </motion.div>
      </div>
    </section>
  )
}
