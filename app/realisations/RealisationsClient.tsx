"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"
import { Camera } from "lucide-react"
import { Breadcrumb } from "@/components/common/Breadcrumb"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

const Lightbox = dynamic(() => import("yet-another-react-lightbox"), {
  ssr: false,
})
import "yet-another-react-lightbox/styles.css"

const CATEGORIES = [
  { value: "all", label: "Toutes catégories" },
  { value: "fondations", label: "Fondations spéciales" },
  { value: "terrassement", label: "Terrassement" },
  { value: "vrd", label: "VRD & Voirie" },
  { value: "enrochement", label: "Enrochement" },
  { value: "amenagement", label: "Aménagement" },
  { value: "demolition", label: "Démolition" },
]

interface Realisation {
  src: string
  alt: string
  category: string
  title: string
  location: string
}

const REALISATIONS: Realisation[] = [
  {
    src: "/images/chantiers/realisation-1.jpg",
    alt: "Terrassement général pour maison individuelle à Gonfaron",
    category: "terrassement",
    title: "Terrassement maison individuelle",
    location: "Gonfaron (83)",
  },
  {
    src: "/images/chantiers/realisation-3.jpg",
    alt: "VRD et réseaux assainissement pour lotissement dans le Var",
    category: "vrd",
    title: "VRD lotissement",
    location: "Le Luc (83)",
  },
  {
    src: "/images/chantiers/realisation-3.jpg",
    alt: "Enrochement et soutènement de talus à Brignoles",
    category: "enrochement",
    title: "Soutènement enrochement",
    location: "Brignoles (83)",
  },
  {
    src: "/images/chantiers/realisation-4.jpg",
    alt: "Aménagement allée carrossable et portail entrée propriété Var",
    category: "amenagement",
    title: "Allée d'accès carrossable",
    location: "Hyères (83)",
  },
  {
    src: "/images/chantiers/realisation-5.jpg",
    alt: "Terrassement et création plateforme pour hangar agricole",
    category: "terrassement",
    title: "Plateforme hangar agricole",
    location: "Vidauban (83)",
  },
  {
    src: "/images/chantiers/realisation-6.jpg",
    alt: "Voirie et réseaux divers pour zone d'activité dans le Var",
    category: "vrd",
    title: "Voirie zone d'activité",
    location: "Draguignan (83)",
  },
  {
    src: "/images/chantiers/realisation-7.jpg",
    alt: "Protection berge enrochement naturel cours d'eau Var",
    category: "enrochement",
    title: "Protection de berge",
    location: "Argens (83)",
  },
  {
    src: "/images/chantiers/realisation-8.jpg",
    alt: "Mur d'enrochement en pierre naturelle avec ouvriers Concaterra Var",
    category: "enrochement",
    title: "Mur enrochement pierre naturelle",
    location: "Var (83)",
  },
  {
    src: "/images/chantiers/realisation-9.jpg",
    alt: "Mur de soutènement enrochement avec vue mer côte varoise",
    category: "enrochement",
    title: "Soutènement vue mer",
    location: "Côte Varoise (83)",
  },
  {
    src: "/images/chantiers/realisation-10.jpg",
    alt: "Mur enrochement pierres dorées provençales avec garde-corps",
    category: "enrochement",
    title: "Enrochement pierres provençales",
    location: "Var (83)",
  },
  {
    src: "/images/chantiers/realisation-11.jpg",
    alt: "Murs de soutènement en pierre sèche en terrasses sur terrain en pente Var",
    category: "enrochement",
    title: "Terrasses en pierre sèche",
    location: "Var (83)",
  },
  {
    src: "/images/chantiers/realisation-12.jpg",
    alt: "Mur de soutènement enrochement en arc avec pierres naturelles",
    category: "enrochement",
    title: "Mur de soutènement en arc",
    location: "Var (83)",
  },
  {
    src: "/images/chantiers/realisation-13.jpg",
    alt: "Plateforme terrassée avec mur d'enrochement et mini-pelle Concaterra",
    category: "enrochement",
    title: "Plateforme avec mur enrochement",
    location: "Var (83)",
  },
  {
    src: "/images/chantiers/realisation-14.jpg",
    alt: "Reprise en sous-œuvre avec plots béton armé pour renforcement fondations maison Var",
    category: "fondations",
    title: "Reprise en sous-œuvre — plots béton",
    location: "Var (83)",
  },
  {
    src: "/images/chantiers/realisation-15.jpg",
    alt: "Ferraillage semelle filante pour reprise en sous-œuvre fondations maison Var",
    category: "fondations",
    title: "Ferraillage semelle filante",
    location: "Var (83)",
  },
  {
    src: "/images/chantiers/realisation-16.jpg",
    alt: "Cage de ferraillage semelle béton armé renforcement fondations Concaterra",
    category: "fondations",
    title: "Cage ferraillage béton armé",
    location: "Var (83)",
  },
  {
    src: "/images/chantiers/realisation-17.jpg",
    alt: "Réseaux PVC et ferraillage fondations reprise en sous-œuvre maison Var",
    category: "fondations",
    title: "Réseaux et fondations sous-œuvre",
    location: "Var (83)",
  },
  {
    src: "/images/chantiers/realisation-18.jpg",
    alt: "Démolition villa vue mer avec mini-pelles Concaterra côte varoise",
    category: "demolition",
    title: "Démolition villa vue mer",
    location: "Côte Varoise (83)",
  },
  {
    src: "/images/chantiers/realisation-19.jpg",
    alt: "Chantier démolition terrassement bord de mer avec excavateurs Var",
    category: "demolition",
    title: "Terrassement et démolition bord de mer",
    location: "Côte Varoise (83)",
  },
  {
    src: "/images/chantiers/realisation-20.jpg",
    alt: "Fouilles terrassement villa vue mer avec drainage Var",
    category: "terrassement",
    title: "Terrassement vue mer avec drainage",
    location: "Côte Varoise (83)",
  },
  {
    src: "/images/chantiers/realisation-21.jpg",
    alt: "Pose fosse septique Filtro 5 assainissement non collectif Var",
    category: "vrd",
    title: "Pose fosse septique assainissement",
    location: "Var (83)",
  },
  {
    src: "/images/chantiers/realisation-22.jpg",
    alt: "Installation modules tunnel drainage eaux pluviales en tranée Var",
    category: "vrd",
    title: "Modules tunnel drainage eaux pluviales",
    location: "Var (83)",
  },
  {
    src: "/images/chantiers/realisation-23.jpg",
    alt: "Pose réservoir défense incendie Tubac par excavateur CAT Var",
    category: "vrd",
    title: "Pose réservoir défense incendie",
    location: "Var (83)",
  },
  {
    src: "/images/chantiers/realisation-24.jpg",
    alt: "Aménagement talus vue mer avec mur de pierre et allée côte varoise",
    category: "amenagement",
    title: "Aménagement talus vue mer",
    location: "Côte Varoise (83)",
  },
  {
    src: "/images/chantiers/realisation-25.jpg",
    alt: "Aménagement jardin de propriété avec bassin rond et massifs fleuris Var",
    category: "amenagement",
    title: "Jardin de domaine avec bassin",
    location: "Var (83)",
  },
  {
    src: "/images/chantiers/realisation-26.jpg",
    alt: "Aménagement terrain vue mer avec palmiers et mini-pelle CAT côte varoise",
    category: "amenagement",
    title: "Aménagement terrain vue mer",
    location: "Côte Varoise (83)",
  },
]

function RealisationCard({ r }: { r: Realisation }) {
  const [error, setError] = useState(false)
  if (error) {
    return (
      <div className="relative aspect-[4/3] bg-[#57A639] flex flex-col items-center justify-center gap-2">
        <Camera className="w-8 h-8 text-[#D42020]/40" />
        <span className="text-white/30 text-xs uppercase tracking-widest font-medium">
          {r.title}
        </span>
        <span className="text-white/20 text-xs">Photo à venir</span>
      </div>
    )
  }
  return (
    <Image
      src={r.src}
      alt={r.alt}
      width={600}
      height={450}
      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
      sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
      onError={() => setError(true)}
    />
  )
}

export function RealisationsClient() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  const filtered =
    activeCategory === "all"
      ? REALISATIONS
      : REALISATIONS.filter((r) => r.category === activeCategory)

  const slides = filtered.map((r) => ({
    src: r.src,
    alt: r.alt,
  }))

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index)
  }, [])

  const categoryLabel = (cat: string) =>
    CATEGORIES.find((c) => c.value === cat)?.label ?? cat

  return (
    <>
      <Breadcrumb items={[{ label: "Nos réalisations", href: "/realisations" }]} />

      <div className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="bg-[#57A639] py-16 text-white">
          <div className="container mx-auto px-4">
            <p className="text-[#D42020] font-semibold uppercase tracking-widest text-sm mb-3">
              Chantiers réalisés dans le Var
            </p>
            <h1 className="font-barlow-condensed font-extrabold text-4xl sm:text-5xl uppercase mb-4">
              Nos réalisations
            </h1>
            <p className="text-white/80 max-w-xl text-lg">
              Terrassement, VRD, enrochement, aménagement paysager — découvrez
              nos chantiers réalisés pour des particuliers et professionnels
              dans le Var (83).
            </p>
          </div>
        </section>

        {/* Filtres + galerie */}
        <section className="py-16 bg-[#F5F5F0]">
          <div className="container mx-auto px-4">
            {/* Filtres */}
            <div className="mb-10 flex justify-center">
              <Tabs
                value={activeCategory}
                onValueChange={setActiveCategory}
              >
                <TabsList className="flex-wrap h-auto gap-1 bg-white shadow-sm">
                  {CATEGORIES.map((cat) => (
                    <TabsTrigger
                      key={cat.value}
                      value={cat.value}
                      className="data-[state=active]:bg-[#D42020] data-[state=active]:text-white"
                    >
                      {cat.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            {/* Masonry grid */}
            <div className="columns-2 md:columns-3 xl:columns-4 gap-3 space-y-3">
              {filtered.map((r, idx) => (
                <div
                  key={r.src}
                  className="break-inside-avoid relative group cursor-pointer rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
                  onClick={() => openLightbox(idx)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Voir en grand : ${r.title}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") openLightbox(idx)
                  }}
                >
                  <RealisationCard r={r} />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100">
                    <Badge
                      className="w-fit mb-1 bg-[#D42020] text-white border-none text-xs"
                    >
                      {categoryLabel(r.category)}
                    </Badge>
                    <p className="text-white font-semibold text-sm leading-tight">
                      {r.title}
                    </p>
                    <p className="text-white/80 text-xs">{r.location}</p>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center text-gray-500 py-16">
                Aucune réalisation dans cette catégorie pour le moment.
              </p>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-[#D42020]">
          <div className="container mx-auto px-4 text-center">
            <p className="text-white font-barlow-condensed font-bold text-2xl uppercase mb-4">
              Votre chantier pourrait figurer ici
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-[#D42020] font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Demander un devis gratuit
            </a>
          </div>
        </section>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
      />
    </>
  )
}
