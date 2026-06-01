"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { SERVICES } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { HardHat, GitBranch, Mountain, TreePine, Shield, ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "terrassement-general": HardHat,
  "vrd-voirie-reseaux": GitBranch,
  "enrochement": Mountain,
  "amenagement-paysager": TreePine,
  "renforcement-fondations": Shield,
}

export function Services() {
  return (
    <section className="py-24 bg-[#F8F9FA]" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[#D42020] font-semibold uppercase tracking-widest text-xs mb-3">
            Ce que nous faisons
          </p>
          <h2 className="font-barlow-condensed font-bold text-4xl sm:text-5xl text-[#57A639] uppercase mb-5">
            Nos services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            De la fouille initiale à la livraison du terrain, Concaterra
            Terrassement prend en charge l&apos;ensemble de vos travaux dans le
            Var (83).
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[service.slug] ?? HardHat
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
              >
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <div className="h-full bg-white rounded-2xl p-7 border border-transparent hover:border-[#D42020]/30 hover:shadow-lg hover:shadow-[#D42020]/5 transition-all duration-300">
                    {/* Icône */}
                    <div className="w-11 h-11 rounded-xl bg-[#D42020]/10 group-hover:bg-[#D42020] flex items-center justify-center mb-5 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-[#D42020] group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                    </div>
                    {/* Titre */}
                    <h3 className="font-barlow-condensed font-bold text-lg text-[#57A639] group-hover:text-[#D42020] uppercase mb-2 transition-colors">
                      {service.title}
                    </h3>
                    {/* Description */}
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>
                    {/* Lien */}
                    <span className="inline-flex items-center gap-1 text-[#D42020] text-sm font-medium group-hover:gap-2 transition-all">
                      En savoir plus
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-[#57A639] hover:bg-[#4D9032] text-white font-bold shadow-md"
          >
            <Link href="/services">Toutes nos prestations</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
