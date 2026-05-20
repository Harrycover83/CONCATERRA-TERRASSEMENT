"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const PHOTOS = [
  {
    src: "/images/chantiers/realisation-1.jpg",
    alt: "Chantier terrassement Gonfaron Var 83 — terrassement général",
    category: "Terrassement",
  },
  {
    src: "/images/chantiers/realisation-2.jpg",
    alt: "Travaux VRD Draguignan — voirie et réseaux divers",
    category: "VRD",
  },
  {
    src: "/images/chantiers/realisation-3.jpg",
    alt: "Enrochement soutènement de berge Var — gabions",
    category: "Enrochement",
  },
  {
    src: "/images/chantiers/realisation-4.jpg",
    alt: "Aménagement paysager Gonfaron — allée et clôture",
    category: "Aménagement",
  },
  {
    src: "/images/chantiers/realisation-5.jpg",
    alt: "Concassage et recyclage matériaux inertes Var",
    category: "Concassage",
  },
  {
    src: "/images/chantiers/realisation-6.jpg",
    alt: "Transport de matériaux camion benne Var 83",
    category: "Transport",
  },
]

export function Gallery() {
  return (
    <section className="py-20 bg-[#F5F5F0]" id="galerie">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#D97706] font-semibold uppercase tracking-widest text-sm mb-2">
            Notre travail en images
          </p>
          <h2 className="font-barlow-condensed font-bold text-3xl sm:text-4xl md:text-5xl text-[#1C2B3A] uppercase mb-4">
            Nos réalisations
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Chantiers réalisés dans le Var (83) par Concaterra Terrassement.
          </p>
        </div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {PHOTOS.map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="break-inside-avoid relative overflow-hidden rounded-lg group"
            >
              <div className="relative aspect-[4/3] bg-gray-200">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-200 flex items-end p-3">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-medium bg-[#D97706] px-2 py-1 rounded">
                    {photo.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            asChild
            size="lg"
            className="bg-[#D97706] hover:bg-[#B45309] text-white font-bold"
          >
            <Link href="/realisations">Voir toutes nos réalisations</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
