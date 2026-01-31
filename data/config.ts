export const siteConfig = {
  businessType: "Exterior Cleaning",
  businessName: "TR1 Exterior Cleaning",
  tagline: "We'll take care of your Roof, Gutters, Driveways, and Patios",
  serviceArea: "Covering the whole of Cornwall and Devon",
  
  hero: {
    headline: "You name it, we will clean it",
    subheadline: "Providing top-quality service from start to finish with exceptional attention to detail. Specialist Roof and Softwashing company serving Cornwall and Devon.",
    ctaText: "Get a Free Estimate",
    ctaSecondary: "Our Services",
  },

  about: {
    headline: "From Auto Valeting to Exterior Cleaning Excellence",
    story: "Founded by John and his team in 2022, who transitioned from running a premium Auto Valeting company. Noticing a gap in the market for absolute attention to detail, they applied their vast knowledge of safe washing and chemical use to exterior cleaning.",
    positioning: "Quickly cemented themselves as one of the premier Roof and Softwashing companies in Devon and Cornwall.",
    established: 2022
  },

  services: [
    {
      id: 1,
      title: "Soft Washing",
      description: "Specialist low-pressure cleaning using safe, HSE-approved chemicals. Perfect for render, roofs, conservatories, and wood panelling. Longer lasting results with no surface damage.",
      icon: "Droplets",
      features: [
        "Safe, non-aggressive chemicals",
        "UK Health & Safety Executive approved",
        "Longer lasting results",
        "No damage to surfaces",
        "Uses less water",
        "Little or no noise",
        "More cost-effective"
      ]
    },
    {
      id: 2,
      title: "Roof Cleaning",
      description: "Complete roof overhaul to save money on replacement. With every roof clean we will do your gutters for free.",
      icon: "Shield",
      bonus: "Free gutter cleaning with every roof clean"
    },
    {
      id: 3,
      title: "Driveways, Patios & Decking",
      description: "Professional cleaning using modern commercial pressure washer equipment. Restore your kerb appeal and bring tired, dull driveways back to life.",
      icon: "Home",
      surfaces: ["Monoblock", "Tarmac", "Paving", "Concrete", "Decking"]
    },
    {
      id: 4,
      title: "Gutter Cleaning",
      description: "Internal high-powered vacuuming to remove debris and external soft washing to remove green algae. Can reach high and inaccessible gutters.",
      icon: "Sparkles",
      methods: [
        "Internal: High-powered Gutter Vacuuming",
        "External: Soft washing for bright, clean gutters"
      ]
    },
  ],

  whyUs: {
    headline: "Why Choose TR1 Exterior Cleaning",
    subheadline: "Experience and quality you can trust",
    points: [
      {
        title: "Experienced & Reliable",
        description: "Pride in high-quality workmanship on jobs of all sizes. Transitioned from premium Auto Valeting with vast knowledge of safe washing and chemical use.",
      },
      {
        title: "Fully Insured & Safe",
        description: "Using only government-approved solutions that are fully approved by the UK Health & Safety Executive. Complete peace of mind on every job.",
      },
      {
        title: "Customer Satisfaction Guaranteed",
        description: "Exceptional attention to detail from start to finish. We're not happy until you're thrilled with the results.",
      },
    ],
  },

  testimonials: [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Homeowner, Cornwall",
      content: "Absolutely phenomenal service. My house looks brand new. The team was professional, punctual, and meticulous.",
      rating: 5,
    },
    {
      id: 2,
      name: "David Chen",
      role: "Property Manager, Devon",
      content: "We've used them for all our properties. Consistent quality, fair pricing, and excellent communication.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Business Owner, Plymouth",
      content: "They transformed our storefront. The attention to detail is unmatched. Highly recommend!",
      rating: 5,
    },
  ],

  trustedBy: [
    "Cornwall Homes",
    "Devon Properties",
    "Southwest Estates",
    "Coastal Living",
  ],

  contact: {
    phone: "07519 310385",
    email: "tr1exteriorcleaning@outlook.com",
    address: "Serving Cornwall and Devon",
    hours: {
      weekday: "Monday - Friday: 09:00 – 17:00",
      weekend: "Saturday - Sunday: Closed"
    },
    whatsapp: "07519310385",
    googleReviews: "https://www.google.com/maps?cid=12979050668972903199"
  },

  social: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
  },
}

export type SiteConfig = typeof siteConfig
