import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/sections/Hero"
import { Services } from "@/components/sections/Services"
import { Gallery } from "@/components/sections/Gallery"
import { Testimonials } from "@/components/sections/Testimonials"
import { FAQ } from "@/components/sections/FAQ"
import { ZoneMap } from "@/components/sections/ZoneMap"
import { StatsSection } from "@/components/sections/StatsSection"
import { Button } from "@/components/ui/button"
import { Award, MapPin, Zap, Phone, FileText, CheckCircle } from "lucide-react"
import { COMPANY } from "@/lib/constants"
import { FondationsSection } from "@/components/sections/FondationsSection"

export const metadata: Metadata = {
  title: "Renforcement de Fondation Var | Micropieux & Reprise en sous-œuvre — Concaterra",
  description:
    "Spécialiste renforcement de fondation dans le Var (83). Micropieux, reprise en sous-œuvre, intervention après sinistre sécheresse. Prise en charge Cat Nat. Devis gratuit.",
  keywords: [
    "renforcement fondation Var",
    "micropieux Var",
    "reprise en sous-oeuvre 83",
    "fondation fissures sécheresse Var",
    "terrassement Gonfaron",
    "entreprise fondations PACA",
  ],
  openGraph: {
    title: "Renforcement de Fondation — Concaterra, Var (83)",
    description:
      "Spécialiste micropieux, reprise en sous-œuvre et renforcement de fondation dans le Var. Sinistres sécheresse, Cat Nat. Devis gratuit sous 24h.",
    url: COMPANY.siteUrl,
    siteName: COMPANY.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chantier terrassement Var Concaterra",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  alternates: { canonical: COMPANY.siteUrl },
}

export default function HomePage() {
  return (
    <>
      <Hero />

      <FondationsSection />

      <StatsSection />

      {/* Section "Qui sommes-nous" */}
      <section className="py-24 bg-white" id="qui-sommes-nous">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#D97706] font-semibold uppercase tracking-widest text-xs mb-3">
              À propos
            </p>
            <h2 className="font-barlow-condensed font-bold text-4xl sm:text-5xl text-[#1C2B3A] uppercase mb-5">
              Qui sommes-nous ?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Concaterra Terrassement est une SARL de travaux publics basée à{" "}
              <strong className="text-[#1C2B3A]">Gonfaron (83590)</strong>, dans le Var.
              Spécialisés dans le <strong className="text-[#1C2B3A]">renforcement de fondation</strong> (micropieux, reprise en sous-œuvre, sinistres sécheresse)
              et les travaux publics (terrassement, VRD, enrochement, aménagement paysager),
              nous intervenons sur tous vos chantiers en Provence-Alpes-Côte d&apos;Azur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                Icon: Award,
                title: "Expertise",
                text: "Des années d'expérience dans les travaux publics et le terrassement en région PACA. Matériel professionnel et méthodes éprouvées pour chaque chantier.",
              },
              {
                Icon: MapPin,
                title: "Proximité",
                text: "Entreprise locale basée à Gonfaron, au cœur du Var. Nous connaissons les terrains, les réseaux et les contraintes de chaque commune du 83.",
              },
              {
                Icon: Zap,
                title: "Réactivité",
                text: "Devis gratuit sous 24h, intervention rapide sur chantier. Un interlocuteur unique du début à la fin de votre projet.",
              },
            ].map(({ Icon, title, text }) => (
              <div
                key={title}
                className="group relative bg-[#F8F9FA] hover:bg-[#1C2B3A] rounded-2xl p-8 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D97706]/10 group-hover:bg-[#D97706]/20 flex items-center justify-center mb-5 transition-colors">
                  <Icon className="w-6 h-6 text-[#D97706]" aria-hidden="true" />
                </div>
                <h3 className="font-barlow-condensed font-bold text-xl text-[#1C2B3A] group-hover:text-white uppercase mb-3 transition-colors">
                  {title}
                </h3>
                <p className="text-gray-500 group-hover:text-white/60 text-sm leading-relaxed transition-colors">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-[#D97706] hover:bg-[#B45309] text-white font-bold shadow-lg shadow-[#D97706]/20"
            >
              <Link href="/contact">
                <FileText className="w-4 h-4 mr-2" aria-hidden="true" />
                Demander un devis gratuit
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Services />
      <ZoneMap />
      <Gallery />
      <Testimonials />
      <FAQ />

      {/* CTA final */}
      <section className="py-24 bg-[#0D1B2A] relative overflow-hidden">
        {/* Ligne décorative */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D97706] to-transparent" aria-hidden="true" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-[#D97706] font-semibold uppercase tracking-widest text-xs mb-4">
            Passez à l&apos;action
          </p>
          <h2 className="font-barlow-condensed font-extrabold text-4xl sm:text-5xl md:text-6xl text-white uppercase mb-6 leading-tight">
            Prêt à démarrer<br />
            <span className="text-[#D97706]">votre projet ?</span>
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Contactez-nous dès aujourd&apos;hui. Devis gratuit et sans engagement — réponse sous 24h.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button
              asChild
              size="lg"
              className="bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-base px-10 h-12 shadow-lg shadow-[#D97706]/20"
            >
              <Link href="/contact">
                <FileText className="w-4 h-4 mr-2" aria-hidden="true" />
                Demander un devis
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white/10 hover:bg-white/20 border border-white/40 hover:border-white/70 text-white font-bold text-base px-10 h-12 backdrop-blur-sm"
            >
              <a href={`tel:${COMPANY.phone}`}>
                <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                {COMPANY.phoneFormatted}
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs text-white/30">
            {["Devis 100% gratuit", "Sans engagement", "Réponse sous 24h", "Intervention dans tout le Var"].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#D97706]" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
