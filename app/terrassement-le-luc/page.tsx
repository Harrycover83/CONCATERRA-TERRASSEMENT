import type { Metadata } from "next"
import { LocalPageLayout } from "@/components/sections/LocalPageLayout"
import { COMPANY } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Terrassement Le Luc — Entreprise de terrassement Var (83) — Concaterra",
  description:
    "Terrassement au Luc et dans le Var (83) : terrassement général, VRD, enrochement. Concaterra intervient au Luc, Vidauban, Le Cannet-des-Maures. Devis gratuit.",
  keywords: [
    "terrassement Le Luc",
    "entreprise terrassement Luc Var",
    "terrassement Plaine des Maures",
    "VRD Le Luc 83",
    "travaux publics Le Luc Var",
  ],
  alternates: {
    canonical: `${COMPANY.siteUrl}/terrassement-le-luc`,
  },
  openGraph: {
    title: "Terrassement Le Luc — Concaterra Terrassement, Var (83)",
    description:
      "Entreprise de terrassement intervenant au Luc et dans la Plaine des Maures. Devis gratuit sous 1 semaine. Concaterra Terrassement, Gonfaron (83590).",
    url: `${COMPANY.siteUrl}/terrassement-le-luc`,
  },
}

export default function TerrassementLeLucPage() {
  return (
    <LocalPageLayout
      city="Le Luc"
      slug="terrassement-le-luc"
      lat={43.3964}
      lng={6.3134}
      description="Terrassement au Luc et dans la Plaine des Maures"
      intro="Concaterra Terrassement est basé à Gonfaron, tout proche du Luc. Nous intervenons au Luc et dans la Plaine des Maures pour vos terrassements, VRD et aménagements. Devis gratuit sous 1 semaine."
      specificContent={
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <h2 className="font-barlow-condensed font-bold text-2xl text-[#57A639] uppercase">
            Terrassement au Luc : notre secteur de proximité immédiate
          </h2>
          <p>
            Le Luc-en-Provence est la commune voisine de Gonfaron, notre siège
            social. Concaterra Terrassement intervient au Luc en quelques
            minutes, ce qui nous permet d&apos;offrir une réactivité maximale
            pour les devis et les interventions urgentes.
          </p>
          <p>
            Le secteur du Luc, avec la Plaine des Maures et le nœud autoroutier
            A8/A57, est une zone en développement constant : zones d&apos;activité,
            lotissements, projets agricoles et viticoles. Nous connaissons
            parfaitement les terrains locaux : sols argilo-calcaires, nappes
            phréatiques, contraintes liées aux cours d&apos;eau de la plaine.
          </p>
          <h2 className="font-barlow-condensed font-bold text-2xl text-[#57A639] uppercase">
            Zones d&apos;intervention autour du Luc
          </h2>
          <p>
            Nos chantiers au quotidien : Le Luc-en-Provence, Gonfaron,
            Le Cannet-des-Maures, Vidauban, Les Mayons, La Garde-Freinet,
            Grimaud, Cogolin, Sainte-Maxime et l&apos;ensemble du golfe de Saint-Tropez.
          </p>
        </div>
      }
    />
  )
}
