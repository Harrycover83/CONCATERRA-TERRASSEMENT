import type { Metadata } from "next"
import { ContactClient } from "./ContactClient"
import { COMPANY } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Contact & Devis gratuit — Concaterra Terrassement Var (83)",
  description:
    "Demandez votre devis gratuit pour vos travaux de terrassement, VRD ou aménagement dans le Var. Concaterra Terrassement répond sous 24h. Basé à Gonfaron (83590).",
  keywords: [
    "devis terrassement Var",
    "contact terrassement 83",
    "devis gratuit travaux publics Var",
    "terrassement Gonfaron contact",
  ],
  alternates: {
    canonical: `${COMPANY.siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact & Devis gratuit — Concaterra Terrassement Var (83)",
    description:
      "Formulaire de devis gratuit pour terrassement dans le Var. Réponse sous 24h. Concaterra Terrassement, Gonfaron (83590).",
    url: `${COMPANY.siteUrl}/contact`,
  },
}

export default function ContactPage() {
  return <ContactClient />
}
