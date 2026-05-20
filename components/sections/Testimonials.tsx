"use client"

import { motion } from "framer-motion"
import { COMPANY } from "@/lib/constants"

const TESTIMONIALS = [
  {
    name: "Marc D.",
    location: "Gonfaron (83590)",
    text: "Excellent travail de terrassement pour notre maison individuelle. Équipe sérieuse, ponctuelle et très professionnelle. Le terrain a été parfaitement préparé.",
    rating: 5,
    date: "2024-11-15",
  },
  {
    name: "Sophie L.",
    location: "Le Luc (83340)",
    text: "Nous avons fait appel à Concaterra pour les VRD de notre villa. Très satisfaits : devis clair, délais respectés, travail soigné. Je recommande vivement.",
    rating: 5,
    date: "2024-09-08",
  },
  {
    name: "Patrick G.",
    location: "Draguignan (83300)",
    text: "Chantier d'enrochement réalisé dans les règles de l'art. Victor est à l'écoute et propose des solutions adaptées. Tarifs compétitifs pour un travail de qualité.",
    rating: 5,
    date: "2024-07-22",
  },
]

export function Testimonials() {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${COMPANY.siteUrl}/#business`,
    review: TESTIMONIALS.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: 5,
      },
      datePublished: t.date,
      reviewBody: t.text,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 5,
      reviewCount: TESTIMONIALS.length,
      bestRating: 5,
    },
  }

  return (
    <section className="py-20 bg-[#1C2B3A]" id="temoignages">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#D97706] font-semibold uppercase tracking-widest text-sm mb-2">
            Ce que disent nos clients
          </p>
          <h2 className="font-barlow-condensed font-bold text-3xl sm:text-4xl md:text-5xl text-white uppercase">
            Témoignages
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, index) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6"
            >
              {/* Étoiles */}
              <div className="flex gap-1 mb-4" aria-label={`Note : ${t.rating}/5`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#D97706]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-4 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <footer className="flex items-center justify-between">
                <div>
                  <cite className="text-white font-semibold not-italic text-sm">
                    {t.name}
                  </cite>
                  <p className="text-gray-500 text-xs">{t.location}</p>
                </div>
                <time
                  dateTime={t.date}
                  className="text-gray-500 text-xs"
                >
                  {new Date(t.date).toLocaleDateString("fr-FR", {
                    year: "numeric",
                    month: "long",
                  })}
                </time>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
