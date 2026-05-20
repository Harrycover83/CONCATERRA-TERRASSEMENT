import type { Metadata } from "next"
import { RealisationsClient } from "./RealisationsClient"
import { COMPANY } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Nos réalisations — Chantiers de terrassement dans le Var (83) — Concaterra",
  description:
    "Découvrez nos réalisations de terrassement, VRD, enrochement et aménagement dans le Var (83). Chantiers résidentiels et professionnels à Gonfaron, Toulon, Draguignan.",
  keywords: [
    "réalisations terrassement Var",
    "chantiers VRD 83",
    "photos terrassement PACA",
    "galerie travaux publics Var",
  ],
  alternates: {
    canonical: `${COMPANY.siteUrl}/realisations`,
  },
  openGraph: {
    title: "Nos réalisations — Terrassement Var (83) — Concaterra",
    description:
      "Galerie photos de nos chantiers de terrassement dans le Var. Concaterra Terrassement, Gonfaron (83590).",
    url: `${COMPANY.siteUrl}/realisations`,
  },
}

export default function RealisationsPage() {
  return <RealisationsClient />
}
