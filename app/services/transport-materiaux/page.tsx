import type { Metadata } from "next"
import { ServicePageLayout } from "@/components/sections/ServicePageLayout"
import { COMPANY } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Transport de matériaux dans le Var (83) — Concaterra Terrassement",
  description:
    "Transport de matériaux dans le Var : camions benne, livraison agrégats, location engins avec conducteur à Gonfaron et dans le 83. Concaterra — devis gratuit.",
  keywords: [
    "transport matériaux Var",
    "camion benne 83",
    "livraison agrégats Var",
    "location engin conducteur PACA",
    "transport BTP Var",
  ],
  alternates: {
    canonical: `${COMPANY.siteUrl}/services/transport-materiaux`,
  },
  openGraph: {
    title: "Transport de matériaux — Var (83) — Concaterra Terrassement",
    description:
      "Camions benne, livraison agrégats et location engins avec conducteur dans le Var. Concaterra Terrassement, Gonfaron (83590).",
    url: `${COMPANY.siteUrl}/services/transport-materiaux`,
  },
}

export default function TransportMateriauxPage() {
  return (
    <ServicePageLayout
      title="Transport de matériaux"
      slug="transport-materiaux"
      metaDescription="Transport de matériaux dans le Var par Concaterra."
      keywords={["transport matériaux Var", "camion benne 83", "agrégats"]}
      intro="Concaterra Terrassement assure le transport de matériaux dans tout le Var (83) : évacuation de déblais, livraison de gravats, sable, gravier et tout-venant. Camions bennes et location d'engins avec conducteur pour vos chantiers dans le 83."
      prestations={[
        {
          title: "Évacuation de déblais",
          description:
            "Chargement et transport des terres, gravats et déchets inertes de votre chantier vers les filières adaptées (décharges, plateformes de recyclage).",
        },
        {
          title: "Livraison de granulats",
          description:
            "Approvisionnement en sable, gravier, grave concassée, tout-venant, enrobé froid. Livraison directe sur chantier dans le Var.",
        },
        {
          title: "Transport de remblais",
          description:
            "Livraison de terres de remblai propres, compactables. Approvisionnement depuis des sources certifiées pour garantir la qualité des apports.",
        },
        {
          title: "Location camion benne",
          description:
            "Location de camions bennes avec chauffeur pour vos besoins ponctuels : approvisionnement, évacuation, navette entre chantiers dans le Var.",
        },
        {
          title: "Location engins avec conducteur",
          description:
            "Mise à disposition de pelles hydrauliques, chargeurs, tombereaux avec conducteur qualifié pour renforcer vos équipes sur chantier.",
        },
        {
          title: "Transport matières premières",
          description:
            "Livraison de béton concassé recyclé, pierre naturelle, enrochement, gabions. Approvisionnement depuis les carrières varoises et régionales.",
        },
      ]}
      arguments={[
        {
          title: "Réactivité logistique",
          description:
            "Basés à Gonfaron, nous intervenons rapidement sur tout le Var pour vos besoins urgents de transport. Disponibilité du lundi au vendredi.",
        },
        {
          title: "Parc matériel adapté",
          description:
            "Camions bennes de différentes capacités pour s'adapter à vos volumes. Accès aux chantiers difficiles grâce à notre flotte polyvalente.",
        },
        {
          title: "Tarifs compétitifs",
          description:
            "Proximité géographique = frais de déplacement réduits. Tarifs à la journée, au voyage ou au forfait selon vos besoins.",
        },
      ]}
      content={
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <h2 className="font-barlow-condensed font-bold text-2xl text-[#57A639] uppercase">
            Transport de matériaux dans le Var : un service indispensable sur chantier
          </h2>
          <p>
            Tout chantier de terrassement, de VRD ou de construction génère des
            besoins importants en transport : évacuation des déblais,
            approvisionnement en granulats, livraison de remblais. La qualité et
            la réactivité de ce service logistique peuvent faire la différence
            entre un chantier qui avance et un chantier bloqué.
          </p>
          <p>
            Concaterra Terrassement assure le transport de matériaux sur
            l&apos;ensemble du Var (83), en intervenant aussi bien pour les
            particuliers que pour les entreprises et les collectivités, de
            Gonfaron à Toulon en passant par Draguignan, Brignoles et Hyères.
          </p>

          <h2 className="font-barlow-condensed font-bold text-2xl text-[#57A639] uppercase">
            Évacuation des déblais : conformité et traçabilité
          </h2>
          <p>
            L&apos;évacuation des terres et gravats de chantier est encadrée par
            la réglementation sur les déchets inertes. Concaterra Terrassement
            vous remet les <strong>bordereaux de suivi des déchets
            inertes (BSDI)</strong> pour chaque évacuation, garantissant la
            traçabilité et la conformité réglementaire de votre chantier dans
            le Var.
          </p>
          <p>
            Nous privilégions les filières de valorisation : plateformes de
            recyclage du Var qui réceptionnent les inertes propres
            (béton, terre, cailloux) pour les réintégrer dans le circuit des
            matériaux de construction.
          </p>

          <h2 className="font-barlow-condensed font-bold text-2xl text-[#57A639] uppercase">
            Location d&apos;engins avec conducteur dans le Var
          </h2>
          <p>
            Vous disposez de votre propre équipe chantier mais avez besoin d&apos;un
            engin supplémentaire ponctuellement ? Concaterra Terrassement propose
            la <strong>location d&apos;engins avec conducteur</strong> dans le Var :
            pelles hydrauliques, chargeurs, tombereaux. Nos conducteurs
            d&apos;engins qualifiés s&apos;intègrent facilement à votre équipe et
            maîtrisent parfaitement les terrains varois.
          </p>
        </div>
      }
    />
  )
}
