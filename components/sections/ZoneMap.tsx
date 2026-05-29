"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { COMPANY } from "@/lib/constants"
import { Button } from "@/components/ui/button"

export function ZoneMap() {
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185000!2d${COMPANY.lng}!3d${COMPANY.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ccb80ce0e1c9c7%3A0x0!2sGonfaron%2C%2083590!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr`

  return (
    <section className="py-20 bg-[#F5F5F0]" id="zone">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#D42020] font-semibold uppercase tracking-widest text-sm mb-2">
            Déplacements dans tout le 83
          </p>
          <h2 className="font-barlow-condensed font-bold text-3xl sm:text-4xl md:text-5xl text-[#1A3020] uppercase mb-4">
            Zone d&apos;intervention
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Basés à Gonfaron (83590), nous intervenons sur l&apos;ensemble du
            département du Var et en région PACA.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Carte Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zone d'intervention Concaterra Terrassement — Var (83)"
              aria-label="Carte Google Maps de la zone d'intervention de Concaterra Terrassement dans le Var"
            />
          </motion.div>

          {/* Liste des communes */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-barlow-condensed font-bold text-2xl text-[#1A3020] uppercase mb-6">
              Communes desservies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {COMPANY.zone.map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <span className="w-2 h-2 rounded-full bg-[#D42020] flex-shrink-0" aria-hidden="true" />
                  {city}
                </div>
              ))}
            </div>

            <div className="bg-[#1A3020] rounded-xl p-6 text-white">
              <p className="font-semibold mb-2">Vous n&apos;êtes pas dans cette liste ?</p>
              <p className="text-gray-300 text-sm mb-4">
                Nous nous déplaçons dans tout le Var (83) et les départements
                limitrophes. Contactez-nous pour vérifier nos possibilités
                d&apos;intervention.
              </p>
              <Button
                asChild
                className="bg-[#D42020] hover:bg-[#B01A1A] text-white font-semibold"
              >
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
