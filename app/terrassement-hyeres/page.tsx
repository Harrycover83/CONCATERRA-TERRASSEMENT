import type { Metadata } from "next"
import { LocalPageLayout } from "@/components/sections/LocalPageLayout"
import { COMPANY } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Terrassement Hyères — Entreprise de terrassement Var (83) — Concaterra",
  description:
    "Terrassement à Hyères et dans l'est-Var (83) : terrassement général, VRD, enrochement. Concaterra intervient sur Hyères, La Londe, Carqueiranne. Devis gratuit.",
  keywords: [
    "terrassement Hyères",
    "entreprise terrassement Hyères",
    "terrassement est Var",
    "VRD Hyères",
    "travaux publics Hyères 83",
  ],
  alternates: {
    canonical: `${COMPANY.siteUrl}/terrassement-hyeres`,
  },
  openGraph: {
    title: "Terrassement Hyères — Concaterra Terrassement, Var (83)",
    description:
      "Entreprise de terrassement intervenant à Hyères et dans l'est-Var. Devis gratuit sous 24h. Concaterra Terrassement, Gonfaron (83590).",
    url: `${COMPANY.siteUrl}/terrassement-hyeres`,
  },
}

export default function TerrassementHyeresPage() {
  return (
    <LocalPageLayout
      city="Hyères"
      slug="terrassement-hyeres"
      lat={43.1199}
      lng={6.1288}
      description="Terrassement à Hyères et dans l'est-Var"
      intro="Concaterra Terrassement intervient à Hyères et dans l'est-Var pour tous vos chantiers de terrassement, VRD et aménagements extérieurs. Devis gratuit sous 24h."
      specificContent={
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <h2 className="font-barlow-condensed font-bold text-2xl text-[#1C2B3A] uppercase">
            Terrassement à Hyères : entre mer et collines
          </h2>
          <p>
            Hyères-les-Palmiers, avec ses 55 000 habitants, est la plus grande
            commune du Var en superficie. Son territoire très varié — littoral,
            presqu&apos;île de Giens, Massif des Maures, plaine alluviale — offre des
            conditions de terrain extrêmement diversifiées pour les
            travaux de terrassement.
          </p>
          <p>
            Que vous construisiez une villa sur les hauteurs d&apos;Hyères avec une
            vue mer, que vous aménagez une piscine en zone littorale ou que vous
            réalisez des travaux VRD en plaine, Concaterra Terrassement adapte
            ses techniques aux contraintes spécifiques de chaque parcelle.
          </p>
          <h2 className="font-barlow-condensed font-bold text-2xl text-[#1C2B3A] uppercase">
            Zones d&apos;intervention autour de Hyères
          </h2>
          <p>
            Nous intervenons à Hyères et dans les communes voisines : La Londe-les-Maures,
            Carqueiranne, Le Pradet, Pierrefeu-du-Var, Cuers, Sollies-Pont,
            Collobrières et les communes du massif des Maures.
          </p>
        </div>
      }
    />
  )
}
