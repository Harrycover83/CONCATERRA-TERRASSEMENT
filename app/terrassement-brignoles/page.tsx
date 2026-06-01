import type { Metadata } from "next"
import { LocalPageLayout } from "@/components/sections/LocalPageLayout"
import { COMPANY } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Terrassement Brignoles — Entreprise de terrassement Var (83) — Concaterra",
  description:
    "Terrassement à Brignoles et dans le centre-Var (83) : terrassement, VRD, enrochement. Concaterra Terrassement intervient sur Brignoles et le secteur. Devis gratuit.",
  keywords: [
    "terrassement Brignoles",
    "entreprise terrassement Brignoles",
    "terrassement centre Var",
    "VRD Brignoles",
    "travaux publics Brignoles 83",
  ],
  alternates: {
    canonical: `${COMPANY.siteUrl}/terrassement-brignoles`,
  },
  openGraph: {
    title: "Terrassement Brignoles — Concaterra Terrassement, Var (83)",
    description:
      "Entreprise de terrassement intervenant à Brignoles et dans le centre-Var. Devis gratuit sous 1 semaine. Concaterra Terrassement, Gonfaron (83590).",
    url: `${COMPANY.siteUrl}/terrassement-brignoles`,
  },
}

export default function TerrassementBrignolesPage() {
  return (
    <LocalPageLayout
      city="Brignoles"
      slug="terrassement-brignoles"
      lat={43.4065}
      lng={6.0635}
      description="Terrassement à Brignoles et dans le centre-Var"
      intro="Concaterra Terrassement intervient à Brignoles et dans le centre-Var pour vos travaux de terrassement, VRD et enrochement. Devis gratuit sous 1 semaine."
      specificContent={
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <h2 className="font-barlow-condensed font-bold text-2xl text-[#57A639] uppercase">
            Terrassement à Brignoles et dans le centre-Var
          </h2>
          <p>
            Brignoles est une ville au cœur du Var, idéalement située entre
            Toulon, Aix-en-Provence et Draguignan. Ce positionnement central en
            fait un secteur très actif pour la construction et l&apos;aménagement,
            avec de nombreux projets de maisons individuelles, ZAC et travaux
            d&apos;infrastructure.
          </p>
          <p>
            Concaterra Terrassement intervient à Brignoles et dans le
            centre-Var depuis son siège de Gonfaron, à une vingtaine de
            kilomètres. Nous sommes l&apos;interlocuteur de proximité pour
            vos projets de terrassement dans le 83.
          </p>
          <h2 className="font-barlow-condensed font-bold text-2xl text-[#57A639] uppercase">
            Zones d&apos;intervention autour de Brignoles
          </h2>
          <p>
            Nous intervenons dans les communes du centre-Var : Brignoles,
            La Roquebrussanne, Besse-sur-Issole, Rocbaron, Méounes-lès-Montrieux,
            Néoules, Saint-Maximin-la-Sainte-Baume, Nans-les-Pins, Plan-d&apos;Aups
            et les communes voisines.
          </p>
        </div>
      }
    />
  )
}
