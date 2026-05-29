import type { Metadata } from "next"
import { LocalPageLayout } from "@/components/sections/LocalPageLayout"
import { COMPANY } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Terrassement Draguignan — Entreprise de terrassement Var (83) — Concaterra",
  description:
    "Terrassement à Draguignan et dans le Haut-Var (83) : terrassement général, VRD, enrochement. Concaterra Terrassement intervient sur Draguignan et le secteur. Devis gratuit.",
  keywords: [
    "terrassement Draguignan",
    "entreprise terrassement Draguignan",
    "terrassement haut Var",
    "VRD Draguignan",
    "travaux publics Draguignan 83",
  ],
  alternates: {
    canonical: `${COMPANY.siteUrl}/terrassement-draguignan`,
  },
  openGraph: {
    title: "Terrassement Draguignan — Concaterra Terrassement, Var (83)",
    description:
      "Entreprise de terrassement intervenant à Draguignan et dans le Haut-Var. Devis gratuit sous 24h. Concaterra Terrassement, Gonfaron (83590).",
    url: `${COMPANY.siteUrl}/terrassement-draguignan`,
  },
}

export default function TerrassementDraguignanPage() {
  return (
    <LocalPageLayout
      city="Draguignan"
      slug="terrassement-draguignan"
      lat={43.5382}
      lng={6.4656}
      description="Terrassement à Draguignan et dans le Haut-Var"
      intro="Entreprise de terrassement et travaux publics au service des particuliers et professionnels à Draguignan. Terrassement, VRD, enrochement : devis gratuit sous 24h."
      specificContent={
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <h2 className="font-barlow-condensed font-bold text-2xl text-[#1A3020] uppercase">
            Terrassement à Draguignan et dans le Haut-Var
          </h2>
          <p>
            Draguignan, sous-préfecture du Var, est au cœur d&apos;un secteur
            en plein développement. La forte activité de construction dans
            l&apos;arrière-pays varois (maisons individuelles, lotissements,
            projets commerciaux) génère une demande soutenue en terrassement
            et VRD.
          </p>
          <p>
            Concaterra Terrassement, basé à Gonfaron à environ 35 km de
            Draguignan, intervient régulièrement sur le secteur dracénois pour
            des chantiers de toutes tailles, avec un délai d&apos;intervention
            rapide et un devis sous 24h.
          </p>
          <h2 className="font-barlow-condensed font-bold text-2xl text-[#1A3020] uppercase">
            Zones d&apos;intervention autour de Draguignan
          </h2>
          <p>
            Nous intervenons dans toutes les communes du bassin dracénois :
            Draguignan, Trans-en-Provence, Les Arcs-sur-Argens, Le Muy,
            Vidauban, Lorgues, Figanières, Flayosc, Taradeau, Callas et
            l&apos;ensemble du Pays Dracénois.
          </p>
        </div>
      }
    />
  )
}
