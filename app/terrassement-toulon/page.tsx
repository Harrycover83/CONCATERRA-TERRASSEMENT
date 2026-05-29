import type { Metadata } from "next"
import { LocalPageLayout } from "@/components/sections/LocalPageLayout"
import { COMPANY } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Terrassement Toulon — Entreprise de terrassement Var (83) — Concaterra",
  description:
    "Terrassement à Toulon et dans le Var (83) : terrassement général, VRD, enrochement, aménagement. Concaterra Terrassement intervient sur Toulon et le Var. Devis gratuit.",
  keywords: [
    "terrassement Toulon",
    "entreprise terrassement Toulon",
    "terrassement 83",
    "VRD Toulon",
    "travaux publics Toulon Var",
  ],
  alternates: {
    canonical: `${COMPANY.siteUrl}/terrassement-toulon`,
  },
  openGraph: {
    title: "Terrassement Toulon — Concaterra Terrassement, Var (83)",
    description:
      "Entreprise de terrassement intervenant à Toulon et dans le Var. Devis gratuit sous 24h. Concaterra Terrassement, basé à Gonfaron (83590).",
    url: `${COMPANY.siteUrl}/terrassement-toulon`,
  },
}

export default function TerrassementToulonPage() {
  return (
    <LocalPageLayout
      city="Toulon"
      slug="terrassement-toulon"
      lat={43.1242}
      lng={5.928}
      description="Terrassement à Toulon et dans l'agglomération varoise"
      intro="Entreprise de terrassement et travaux publics intervenant à Toulon et dans l'agglomération toulonnaise. Terrassement général, VRD, enrochement : devis gratuit sous 24h."
      specificContent={
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <h2 className="font-barlow-condensed font-bold text-2xl text-[#1A3020] uppercase">
            Terrassement à Toulon : les spécificités du terrain varois
          </h2>
          <p>
            Toulon, préfecture du Var, présente des terrains variés allant du
            littoral méditerranéen aux collines du Faron. Cette diversité
            topographique nécessite une expertise spécifique pour les travaux
            de terrassement : roches calcaires, sols argileux, terrains en
            pente, contraintes liées à l&apos;urbanisation dense.
          </p>
          <p>
            Concaterra Terrassement intervient régulièrement sur l&apos;agglomération
            toulonnaise pour des chantiers résidentiels (construction de maisons,
            piscines, aménagements extérieurs) et des chantiers professionnels
            (réseaux VRD, voirie, terrassement industriel).
          </p>
          <h2 className="font-barlow-condensed font-bold text-2xl text-[#1A3020] uppercase">
            Zones d&apos;intervention autour de Toulon
          </h2>
          <p>
            Outre Toulon intra-muros, nous intervenons dans toutes les communes
            de la métropole TPM : La Seyne-sur-Mer, Hyères, La Garde, Six-Fours,
            Sanary, Bandol, Le Pradet, La Crau, Ollioules, Solliès-Pont.
          </p>
        </div>
      }
    />
  )
}
