import type { Metadata } from "next"
import { Barlow, Barlow_Condensed } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/common/Navbar"
import { Footer } from "@/components/common/Footer"
import { SchemaOrg } from "@/components/common/SchemaOrg"
import { CookieBanner } from "@/components/common/CookieBanner"
import { Toaster } from "@/components/ui/sonner"
import { COMPANY } from "@/lib/constants"

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow",
  display: "swap",
})

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-barlow-condensed",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Terrassement Var | Concaterra Terrassement — Gonfaron (83)",
    template: "%s | Concaterra Terrassement",
  },
  description:
    "Entreprise de terrassement dans le Var. Travaux de terrassement, VRD, enrochement et aménagement paysager à Gonfaron et dans tout le Var (83). Devis gratuit.",
  metadataBase: new URL(COMPANY.siteUrl),
  keywords: [
    "terrassement Var",
    "terrassement Gonfaron",
    "VRD 83",
    "enrochement Var",
    "entreprise terrassement PACA",
  ],
  openGraph: {
    siteName: COMPANY.name,
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fr"
      className={`${barlow.variable} ${barlowCondensed.variable}`}
    >
      <body className="font-barlow bg-[#F5F5F0] text-[#111827] antialiased">
        <SchemaOrg />
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <CookieBanner />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}
