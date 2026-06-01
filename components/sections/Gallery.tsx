"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Camera } from "lucide-react"
import { Button } from "@/components/ui/button"

const PHOTOS = [
  {
    src: "/images/chantiers/realisation-1.jpg",
    alt: "Chantier terrassement Gonfaron Var 83 — terrassement général",
    category: "Terrassement",
  },
  {
    src: "/images/chantiers/realisation-3.jpg",
    alt: "Travaux VRD Draguignan — voirie et réseaux divers",
    category: "VRD",
  },
  {
    src: "/images/chantiers/realisation-3.jpg",
    alt: "Enrochement soutènement de berge Var",
    category: "Enrochement",
  },
  {
    src: "/images/chantiers/realisation-4.jpg",
    alt: "Aménagement allée carrossable et portail entrée propriété Var",
    category: "Aménagement",
  },
  {
    src: "/images/chantiers/realisation-5.jpg",
    alt: "Renforcement de fondations micropieux Var",
    category: "Fondations",
  },
  {
    src: "/images/chantiers/realisation-6.jpg",
    alt: "Terrassement plateforme chantier Var 83",
    category: "Terrassement",
  },
]

function GalleryItem({ photo, index }: { photo: (typeof PHOTOS)[0]; index: number }) {
  const [error, setError] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="break-inside-avoid relative overflow-hidden rounded-lg group"
    >
      <div className="relative aspect-[4/3] bg-[#57A639]">
        {error ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <Camera className="w-8 h-8 text-[#D42020]/40" />
            <span className="text-white/30 text-xs uppercase tracking-widest font-medium">
              {photo.category}
            </span>
            <span className="text-white/20 text-xs">Photo à venir</span>
          </div>
        ) : (
          <>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              onError={() => setError(true)}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-200 flex items-end p-3">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-medium bg-[#D42020] px-2 py-1 rounded">
                {photo.category}
              </span>
            </div>
          </>
        )}
      </div>
    </motion.div>
  )
}

export function Gallery() {
  return (
    <section className="py-20 bg-[#F5F5F0]" id="galerie">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#D42020] font-semibold uppercase tracking-widest text-sm mb-2">
            Notre travail en images
          </p>
          <h2 className="font-barlow-condensed font-bold text-3xl sm:text-4xl md:text-5xl text-[#57A639] uppercase mb-4">
            Nos réalisations
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Chantiers réalisés dans le Var (83) par Concaterra Terrassement.
          </p>
        </div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {PHOTOS.map((photo, index) => (
            <GalleryItem key={photo.src} photo={photo} index={index} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            asChild
            size="lg"
            className="bg-[#D42020] hover:bg-[#B01A1A] text-white font-bold"
          >
            <Link href="/realisations">Voir toutes nos réalisations</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
