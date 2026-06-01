"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { AlertTriangle, CheckCircle, Shield, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

const CAUSES = [
  {
    title: "Retrait-gonflement des argiles (RGA)",
    desc: "55 % du territoire national désormais en zone à risque. Le Var est particulièrement exposé aux sécheresses répétées.",
  },
  {
    title: "Tassement différentiel",
    desc: "Sol hétérogène, remblai mal compacté, proximité d'arbres — les fondations s'affaissent de façon inégale.",
  },
  {
    title: "Fondations insuffisantes sur bâti ancien",
    desc: "Maisons provençales construites sans étude géotechnique, insuffisamment profondes pour les sols argileux.",
  },
  {
    title: "Surcharge lors d'une extension",
    desc: "Surélévation ou extension sans reprise de fondation adaptée à la nouvelle charge.",
  },
]

const SOLUTIONS = [
  {
    title: "Micropieux",
    desc: "Pieux forés de petit diamètre (15–30 cm), armés et injectés au coulis de ciment jusqu'au sol stable. Technique de référence pour la reprise en sous-œuvre.",
  },
  {
    title: "Reprise en sous-œuvre",
    desc: "Renforcement ou extension en profondeur des fondations existantes pour les ancrer dans une couche porteuse.",
  },
  {
    title: "Injection de coulis / résines",
    desc: "Consolidation du sol sous les fondations par injection haute pression. Solution peu invasive, idéale en milieu contraint.",
  },
  {
    title: "Terrassement de confortement",
    desc: "Drainage périphérique, purge de sol instable, mise en place de matériaux drainants — pour agir sur les causes profondes.",
  },
]

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.09, ease: "easeOut" as const },
  }),
}

export function FondationsSection() {
  return (
    <section className="py-20 bg-[#1E4A0E] relative overflow-hidden" id="fondations">
      {/* Ligne décorative haut */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D42020] to-transparent"
        aria-hidden="true"
      />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/5" aria-hidden="true" />

      <div className="container mx-auto px-4">
        {/* En-tête */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="text-[#D42020] font-semibold uppercase tracking-widest text-xs mb-3">
            Notre cœur de métier
          </p>
          <h2 className="font-barlow-condensed font-extrabold text-4xl sm:text-5xl md:text-6xl text-white uppercase mb-5 leading-tight">
            Votre maison se fissure ?<br />
            <span className="text-[#D42020]">On intervient.</span>
          </h2>
          <p className="text-white/55 max-w-2xl mx-auto text-base leading-relaxed">
            Sécheresse, tassement différentiel, sol argileux — les fondations des maisons du Var
            sont exposées à des risques croissants. Concaterra est spécialisé dans leur diagnostic
            et leur renforcement durable.
          </p>
        </motion.div>

        {/* Grille causes + solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {/* Colonne gauche : causes */}
          <motion.div
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/15 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5 text-red-400" aria-hidden="true" />
              </div>
              <h3 className="font-barlow-condensed font-bold text-xl text-white uppercase">
                Les causes fréquentes dans le Var
              </h3>
            </div>
            <ul className="space-y-4">
              {CAUSES.map(({ title, desc }, i) => (
                <motion.li
                  key={title}
                  className="flex gap-3"
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#D42020] mt-2 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-white font-semibold text-sm mb-0.5">{title}</p>
                    <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Colonne droite : solutions */}
          <motion.div
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#D42020]/20 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-[#D42020]" aria-hidden="true" />
              </div>
              <h3 className="font-barlow-condensed font-bold text-xl text-white uppercase">
                Nos techniques de renforcement
              </h3>
            </div>
            <ul className="space-y-4">
              {SOLUTIONS.map(({ title, desc }, i) => (
                <motion.li
                  key={title}
                  className="flex gap-3"
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#D42020] mt-2 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-white font-semibold text-sm mb-0.5">{title}</p>
                    <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bandeau assurance */}
        <motion.div
          className="bg-[#D42020]/10 border border-[#D42020]/25 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <div className="w-12 h-12 rounded-xl bg-[#D42020]/20 flex items-center justify-center flex-shrink-0">
            <Shield className="w-6 h-6 text-[#D42020]" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <p className="text-[#D42020] font-semibold uppercase tracking-widest text-xs mb-1">
              Prise en charge assurance
            </p>
            <h4 className="text-white font-barlow-condensed font-bold text-xl uppercase mb-2">
              Sinistre reconnu Cat Nat ? Vos travaux peuvent être couverts.
            </h4>
            <p className="text-white/50 text-sm leading-relaxed">
              Le régime des catastrophes naturelles (loi 1982) couvre les dommages liés à la
              sécheresse et au retrait-gonflement des argiles depuis 1989. Une fois l&apos;arrêté
              Cat Nat publié, vous disposez de 30 jours pour déclarer le sinistre à votre assureur.
              Nous vous accompagnons dans la constitution de votre dossier et réalisons les travaux
              compatibles avec la prise en charge.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Button
              asChild
              size="lg"
              className="bg-[#D42020] hover:bg-[#B01A1A] text-white font-bold whitespace-nowrap shadow-lg shadow-[#D42020]/20"
            >
              <Link href="/contact">
                <FileText className="w-4 h-4 mr-2" aria-hidden="true" />
                Devis gratuit
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
