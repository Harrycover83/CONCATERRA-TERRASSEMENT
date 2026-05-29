import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumb } from "@/components/common/Breadcrumb"
import { SERVICES, COMPANY } from "@/lib/constants"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HardHat, GitBranch, Mountain, TreePine, RefreshCcw, Truck } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "terrassement-general": HardHat,
  "vrd-voirie-reseaux": GitBranch,
  "enrochement": Mountain,
  "amenagement-paysager": TreePine,
  "concassage-recyclage": RefreshCcw,
  "transport-materiaux": Truck,
}

export const metadata: Metadata = {
  title: "Nos services de terrassement et travaux publics dans le Var",
  description:
    "Découvrez toutes nos prestations : terrassement, VRD, enrochement, aménagement paysager, concassage et transport dans le Var (83). Devis gratuit.",
  alternates: { canonical: `${COMPANY.siteUrl}/services` },
  openGraph: {
    title: "Services — Concaterra Terrassement Var (83)",
    description:
      "Terrassement, VRD, enrochement, aménagement paysager, concassage et transport de matériaux dans le Var.",
    url: `${COMPANY.siteUrl}/services`,
  },
}

export default function ServicesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Nos services", href: "/services" }]} />

      <div className="pt-16 md:pt-20">
        {/* En-tête */}
        <section className="bg-[#1A3020] py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <p className="text-[#D42020] font-semibold uppercase tracking-widest text-sm mb-3">
              Concaterra Terrassement
            </p>
            <h1 className="font-barlow-condensed font-extrabold text-4xl sm:text-5xl md:text-6xl uppercase mb-4">
              Nos prestations
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Du terrassement initial à la livraison clé en main, nous prenons
              en charge l&apos;ensemble de vos travaux publics dans le Var (83).
            </p>
          </div>
        </section>

        {/* Grille services */}
        <section className="py-20 bg-[#F5F5F0]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((service) => {
                const Icon = SERVICE_ICONS[service.slug] ?? HardHat
                return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="block group"
                >
                  <Card className="h-full border-2 border-transparent hover:border-[#D42020] transition-all duration-200">
                    <CardHeader>
                      <div className="w-11 h-11 rounded-xl bg-[#D42020]/10 group-hover:bg-[#D42020] flex items-center justify-center mb-3 transition-colors duration-300">
                        <Icon className="w-5 h-5 text-[#D42020] group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                      </div>
                      <CardTitle className="font-barlow-condensed font-bold text-xl text-[#1A3020] uppercase group-hover:text-[#D42020] transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {service.shortDesc}
                      </p>
                      <p className="text-[#D42020] text-sm font-medium group-hover:underline">
                        Découvrir →
                      </p>
                    </CardContent>
                  </Card>
                </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-barlow-condensed font-bold text-3xl text-[#1A3020] uppercase mb-4">
              Un projet ? Obtenez votre devis gratuit
            </h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Contactez-nous pour étudier votre projet. Réponse sous 24h,
              intervention sur tout le Var (83).
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#D42020] hover:bg-[#B01A1A] text-white font-bold"
            >
              <Link href="/contact">Demander un devis</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}
