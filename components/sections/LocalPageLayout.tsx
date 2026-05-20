import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumb } from "@/components/common/Breadcrumb"
import { Button } from "@/components/ui/button"
import { COMPANY, SERVICES } from "@/lib/constants"

interface LocalPageProps {
  city: string
  slug: string
  lat: number
  lng: number
  description: string
  intro: string
  specificContent?: React.ReactNode
}

export function LocalPageLayout({
  city,
  slug,
  lat,
  lng,
  description,
  intro,
  specificContent,
}: LocalPageProps) {
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50000!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodeURIComponent(city)}%2C%20Var!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr`

  return (
    <>
      <Breadcrumb
        items={[
          { label: `Terrassement ${city}`, href: `/${slug}` },
        ]}
      />

      <div className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="bg-[#1C2B3A] py-16 text-white">
          <div className="container mx-auto px-4">
            <p className="text-[#D97706] font-semibold uppercase tracking-widest text-sm mb-3">
              Intervention locale — {city}, Var (83)
            </p>
            <h1 className="font-barlow-condensed font-extrabold text-4xl sm:text-5xl md:text-6xl uppercase mb-4 max-w-3xl">
              Terrassement {city} — Concaterra, entreprise locale du Var
            </h1>
            <p className="text-gray-300 max-w-2xl text-lg mb-6">{intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-[#D97706] hover:bg-[#B45309] text-white font-bold"
              >
                <Link href="/contact">Devis gratuit sous 24h</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-bold"
              >
                <a href={`tel:${COMPANY.phone}`}>{COMPANY.phoneFormatted}</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Services disponibles */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-barlow-condensed font-bold text-3xl text-[#1C2B3A] uppercase mb-4">
              Nos services à {city}
            </h2>
            <p className="text-gray-600 mb-8">
              Concaterra Terrassement intervient à {city} et dans le secteur pour
              l&apos;ensemble des travaux de terrassement et travaux publics :
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 hover:border-[#D97706] hover:bg-[#D97706]/5 transition-all"
                >
                  <span className="text-2xl flex-shrink-0" aria-hidden="true">{s.icon}</span>
                  <div>
                    <p className="font-semibold text-[#1C2B3A] text-sm">{s.title}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{s.shortDesc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contenu spécifique */}
        {specificContent && (
          <section className="py-16 bg-[#F5F5F0]">
            <div className="container mx-auto px-4 max-w-4xl">
              {specificContent}
            </div>
          </section>
        )}

        {/* Carte */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-barlow-condensed font-bold text-3xl text-[#1C2B3A] uppercase mb-6">
              Nous intervenons à {city} et aux alentours
            </h2>
            <div className="rounded-xl overflow-hidden shadow-lg mb-8">
              <iframe
                src={mapUrl}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Zone d'intervention Concaterra Terrassement — ${city}, Var (83)`}
                aria-label={`Carte de la zone d'intervention de Concaterra Terrassement autour de ${city}`}
              />
            </div>
            <p className="text-gray-600 text-sm">
              Basés à <strong>Gonfaron (83590)</strong>, nous intervenons
              régulièrement à {city} et dans les communes voisines.
              Déplacement gratuit pour l&apos;établissement du devis.
            </p>
          </div>
        </section>

        {/* Pourquoi Concaterra */}
        <section className="py-16 bg-[#F5F5F0]">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-barlow-condensed font-bold text-3xl text-[#1C2B3A] uppercase mb-8">
              Pourquoi choisir Concaterra pour votre terrassement à {city} ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "📍",
                  title: "Entreprise locale du Var",
                  text: `Basés à Gonfaron, nous connaissons parfaitement les terrains et les contraintes spécifiques du secteur de ${city}. Pas d'intermédiaire, un interlocuteur direct.`,
                },
                {
                  icon: "⚡",
                  title: "Réactivité et disponibilité",
                  text: `Devis gratuit sous 24h, intervention rapide. Notre proximité avec ${city} nous permet d'être sur place rapidement en cas d'urgence.`,
                },
                {
                  icon: "🏆",
                  title: "Qualité et sérieux",
                  text: `SARL immatriculée au RCS de Draguignan (SIREN ${COMPANY.siren}), assurée et qualifiée. Travaux réalisés dans les règles de l'art.`,
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-3xl mb-3" aria-hidden="true">{item.icon}</div>
                  <h3 className="font-semibold text-[#1C2B3A] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#D97706]">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="font-barlow-condensed font-extrabold text-3xl sm:text-4xl text-white uppercase mb-4">
              Votre projet de terrassement à {city} ?
            </h2>
            <p className="text-white/90 mb-6">
              Contactez Concaterra Terrassement pour un devis gratuit et sans
              engagement. Réponse sous 24h.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-[#D97706] hover:bg-gray-100 font-bold"
            >
              <Link href="/contact">Demander un devis gratuit</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}
