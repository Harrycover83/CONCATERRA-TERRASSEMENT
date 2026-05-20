import Link from "next/link"
import { Breadcrumb } from "@/components/common/Breadcrumb"
import { Button } from "@/components/ui/button"
import { COMPANY, SERVICES } from "@/lib/constants"

interface ServicePageLayoutProps {
  title: string
  slug: string
  metaDescription?: string
  keywords?: string[]
  intro: string
  prestations: { title: string; description: string }[]
  arguments: { title: string; description: string }[]
  content: React.ReactNode
}

export function ServicePageLayout({
  title,
  slug,
  intro,
  prestations,
  arguments: args,
  content,
}: ServicePageLayoutProps) {
  // Services liés (2 autres)
  const relatedServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Nos services", href: "/services" },
          { label: title, href: `/services/${slug}` },
        ]}
      />

      <div className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="bg-[#1C2B3A] py-16 text-white">
          <div className="container mx-auto px-4">
            <p className="text-[#D97706] font-semibold uppercase tracking-widest text-sm mb-3">
              Service — Var (83)
            </p>
            <h1 className="font-barlow-condensed font-extrabold text-4xl sm:text-5xl md:text-6xl uppercase mb-4 max-w-3xl">
              {title} dans le Var (83)
            </h1>
            <p className="text-gray-300 max-w-2xl text-lg mb-6">{intro}</p>
            <Button
              asChild
              className="bg-[#D97706] hover:bg-[#B45309] text-white font-bold"
            >
              <Link href="/contact">Devis gratuit sous 24h</Link>
            </Button>
          </div>
        </section>

        {/* Contenu principal */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-gray max-w-none">
              {content}
            </div>
          </div>
        </section>

        {/* Nos prestations */}
        <section className="py-16 bg-[#F5F5F0]">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-barlow-condensed font-bold text-3xl text-[#1C2B3A] uppercase mb-8">
              Nos prestations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {prestations.map((p) => (
                <div
                  key={p.title}
                  className="bg-white rounded-xl p-6 border border-gray-100"
                >
                  <h3 className="font-barlow-condensed font-bold text-lg text-[#1C2B3A] uppercase mb-2">
                    {p.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi nous choisir */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-barlow-condensed font-bold text-3xl text-[#1C2B3A] uppercase mb-8">
              Pourquoi nous choisir ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {args.map((arg) => (
                <div key={arg.title} className="border-l-4 border-[#D97706] pl-4">
                  <h3 className="font-semibold text-[#1C2B3A] mb-2">{arg.title}</h3>
                  <p className="text-gray-600 text-sm">{arg.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Zone d'intervention */}
        <section className="py-16 bg-[#F5F5F0]">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-barlow-condensed font-bold text-3xl text-[#1C2B3A] uppercase mb-6">
              Zone d&apos;intervention
            </h2>
            <p className="text-gray-600 mb-4">
              Concaterra Terrassement intervient sur l&apos;ensemble du
              département du Var (83) :
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {COMPANY.zone.map((city) => (
                <span
                  key={city}
                  className="bg-white border border-gray-200 rounded-full px-3 py-1 text-sm text-gray-700"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Services liés */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-barlow-condensed font-bold text-2xl text-[#1C2B3A] uppercase mb-6">
              Autres services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-[#D97706] hover:bg-[#D97706]/5 transition-all"
                >
                  <span className="text-2xl" aria-hidden="true">{s.icon}</span>
                  <span className="text-sm font-semibold text-[#1C2B3A]">{s.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#D97706]">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="font-barlow-condensed font-extrabold text-3xl sm:text-4xl text-white uppercase mb-4">
              Demandez un devis gratuit
            </h2>
            <p className="text-white/90 mb-6">
              Réponse sous 24h — Intervention dans tout le Var (83)
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#D97706] hover:bg-gray-100 font-bold"
              >
                <Link href="/contact">Remplir le formulaire</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-bold"
              >
                <a href={`tel:${COMPANY.phone}`}>{COMPANY.phoneFormatted}</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
