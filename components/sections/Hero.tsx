"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, FileText, ChevronDown, Shield, Clock, MapPin, CheckCircle } from "lucide-react"

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0D1B2A]"
      aria-label="Section principale"
    >
      {/* Photo de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/chantiers/hero-bg.jpg')" }}
        role="img"
        aria-label="Renforcement de fondation micropieux Var Concaterra"
      />
      {/* Gradient overlay — plus sombre en bas pour lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/85 via-[#0D1B2A]/75 to-[#0D1B2A]/97" aria-hidden="true" />

      {/* Ligne décorative top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D97706] to-transparent" aria-hidden="true" />

      {/* Contenu */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white pt-20">

        {/* Badge urgence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#D97706]/15 border border-[#D97706]/40 rounded-full px-5 py-2 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#D97706] animate-pulse" aria-hidden="true" />
          <span className="text-[#D97706] font-semibold uppercase tracking-widest text-xs">
            Spécialiste Fondations &amp; Terrassement — Var (83)
          </span>
        </motion.div>

        {/* Titre principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-barlow-condensed font-extrabold uppercase leading-[0.88] mb-5"
        >
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-white">
            Renforcement
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-[#D97706]">
            de Fondation
          </span>
          <span className="block text-2xl sm:text-3xl md:text-4xl text-white/60 mt-3 font-normal tracking-wide">
            Micropieux · Reprise en sous-œuvre · Terrassement
          </span>
        </motion.h1>

        {/* Accroche assurance */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap justify-center gap-3 mb-9"
        >
          {[
            "Fissures &amp; tassements",
            "Sinistres sécheresse",
            "Prise en charge Cat Nat",
          ].map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 bg-white/8 border border-white/15 rounded-full px-4 py-1.5 text-xs text-white/75"
              dangerouslySetInnerHTML={{ __html: `<svg class="w-3 h-3 text-[#D97706] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.172l6.879-6.879a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>&nbsp;${item}` }}
            />
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <Button
            asChild
            size="lg"
            className="bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-base px-8 h-13 shadow-xl shadow-[#D97706]/25"
          >
            <Link href="/contact">
              <FileText className="w-4 h-4 mr-2" aria-hidden="true" />
              Diagnostic &amp; devis gratuit
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-white/10 hover:bg-white/20 border border-white/40 hover:border-white/70 text-white font-bold text-base px-8 h-13 backdrop-blur-sm"
          >
            <Link href="tel:0494782188">
              <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
              04 94 78 21 88
            </Link>
          </Button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-5 text-xs text-white/45"
        >
          {[
            { Icon: Shield, text: "SIRET 882 063 712" },
            { Icon: Clock, text: "Réponse sous 24h" },
            { Icon: MapPin, text: "Tout le Var (83)" },
            { Icon: CheckCircle, text: "Garantie décennale" },
          ].map(({ Icon, text }) => (
            <span key={text} className="flex items-center gap-1.5">
              <Icon className="w-3.5 h-3.5 text-[#D97706]" aria-hidden="true" />
              {text}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Flèche défilement */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        aria-hidden="true"
      >
        <ChevronDown className="w-6 h-6 text-white/30" />
      </motion.div>
    </section>
  )
}
