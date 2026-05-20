import type { Metadata } from "next"
import { ServicePageLayout } from "@/components/sections/ServicePageLayout"
import { COMPANY } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Terrassement général dans le Var (83) — Fouilles, déblais, remblais",
  description:
    "Terrassement général dans le Var par Concaterra : fouilles, déblais, remblais, nivellement terrain à Gonfaron et dans tout le 83. Devis gratuit sous 24h.",
  keywords: [
    "terrassement général Var",
    "terrassement Gonfaron",
    "fouilles 83",
    "déblais remblais Var",
    "nivellement terrain PACA",
  ],
  alternates: {
    canonical: `${COMPANY.siteUrl}/services/terrassement-general`,
  },
  openGraph: {
    title: "Terrassement général Var (83) — Concaterra Terrassement",
    description:
      "Fouilles, déblais, remblais et nivellement terrain dans le Var. Concaterra Terrassement, basé à Gonfaron (83590). Devis gratuit.",
    url: `${COMPANY.siteUrl}/services/terrassement-general`,
  },
}

export default function TerrassementGeneralPage() {
  return (
    <ServicePageLayout
      title="Terrassement général"
      slug="terrassement-general"
      metaDescription="Terrassement général dans le Var par Concaterra."
      keywords={["terrassement Var", "fouilles 83", "déblais remblais"]}
      intro="Concaterra Terrassement réalise tous vos travaux de terrassement général dans le Var : fouilles, déblais, remblais, nivellement de terrain. Expertise locale et matériel professionnel pour chaque chantier à Gonfaron et dans tout le 83."
      prestations={[
        {
          title: "Fouilles et tranchées",
          description:
            "Réalisation de fouilles en pleine masse ou en tranchées pour fondations, réseaux, piscines et ouvrages souterrains. Respect des cotes et des plans.",
        },
        {
          title: "Déblais et évacuation",
          description:
            "Chargement et transport des terres excédentaires vers des filières agréées ou valorisation comme remblais sur d'autres chantiers dans le Var.",
        },
        {
          title: "Remblayage et compactage",
          description:
            "Remblayage couche par couche avec compactage systématique pour garantir la stabilité à long terme de votre terrain.",
        },
        {
          title: "Nivellement de terrain",
          description:
            "Réglage et nivellement fin de votre terrain : création de plateformes, talus, modelages paysagers avec contrôle des altitudes.",
        },
        {
          title: "Décapage de terre végétale",
          description:
            "Enlèvement de la couche de terre végétale en surface, stockage séparé pour réutilisation en finition de chantier.",
        },
        {
          title: "Préparation de plateforme",
          description:
            "Création de plateformes pour constructions, parkings, voiries. Mise en œuvre d'une couche de forme adaptée au projet.",
        },
      ]}
      arguments={[
        {
          title: "Expérience locale",
          description:
            "Nous connaissons les spécificités géologiques du Var : argiles, roches calcaires, terrains en pente. Une expérience terrain irremplaçable.",
        },
        {
          title: "Matériel adapté",
          description:
            "Pelles hydrauliques, bulldozers, compacteurs, camions bennes : nous disposons du matériel adapté à chaque type de chantier.",
        },
        {
          title: "Réactivité",
          description:
            "Devis gratuit sous 24h, démarrage rapide. Un seul interlocuteur de la visite de chantier à la réception des travaux.",
        },
      ]}
      content={
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <h2 className="font-barlow-condensed font-bold text-2xl text-[#1C2B3A] uppercase">
            Le terrassement général : la base de tout projet de construction
          </h2>
          <p>
            Le terrassement général constitue la première étape de tout projet
            de construction dans le Var. Qu&apos;il s&apos;agisse d&apos;une
            maison individuelle à Gonfaron, d&apos;un bâtiment commercial à
            Draguignan ou d&apos;un aménagement paysager à Toulon, la qualité du
            terrassement conditionne la solidité et la durabilité de
            l&apos;ensemble des ouvrages qui suivront.
          </p>
          <p>
            Concaterra Terrassement réalise des chantiers de terrassement
            général sur l&apos;ensemble du département du Var (83), avec des
            équipes expérimentées et du matériel professionnel adapté aux
            différentes natures de sol rencontrées en Provence.
          </p>

          <h2 className="font-barlow-condensed font-bold text-2xl text-[#1C2B3A] uppercase">
            Les étapes d&apos;un terrassement général réussi
          </h2>
          <p>
            Avant tout démarrage, nous réalisons une visite de chantier gratuite
            pour évaluer la nature du sol, les volumes à terrasser, et les
            contraintes d&apos;accès. Cette phase préalable est essentielle pour
            établir un devis précis et anticiper les difficultés.
          </p>
          <p>
            Les travaux débutent généralement par le <strong>décapage de la
            terre végétale</strong>, stockée séparément pour être réutilisée en
            fin de chantier. Suivent les <strong>fouilles</strong> selon les
            plans fournis par le maître d&apos;œuvre, puis
            l&apos;<strong>évacuation des déblais</strong> excédentaires.
          </p>
          <p>
            Le <strong>remblayage</strong> s&apos;effectue couche par couche
            avec compactage rigoureux à chaque niveau, garantissant la stabilité
            à long terme. Enfin, le <strong>nivellement final</strong> prépare
            le terrain pour les travaux suivants (fondations, VRD, etc.).
          </p>

          <h2 className="font-barlow-condensed font-bold text-2xl text-[#1C2B3A] uppercase">
            Terrassement dans le Var : des contraintes spécifiques
          </h2>
          <p>
            Le Var présente des caractéristiques géologiques variées : terrains
            argileux dans les plaines, affleurements calcaires sur les reliefs,
            remblais anciens dans les zones péri-urbaines. Notre connaissance
            des terrains varois nous permet d&apos;adapter nos méthodes en
            conséquence et d&apos;éviter les mauvaises surprises.
          </p>
          <p>
            Nous travaillons en conformité avec les obligations réglementaires :
            DICT (Déclaration d&apos;Intention de Commencement de Travaux) pour
            repérer les réseaux souterrains, respect des règles de sécurité sur
            chantier, et gestion des terres excavées selon les filières agréées.
          </p>

          <h2 className="font-barlow-condensed font-bold text-2xl text-[#1C2B3A] uppercase">
            Terrassement pour particuliers et professionnels
          </h2>
          <p>
            Concaterra Terrassement intervient aussi bien pour les
            <strong> particuliers</strong> (maison individuelle, piscine,
            jardin, accès) que pour les <strong>professionnels</strong>{" "}
            (bâtiments industriels, commerciaux, parkings) et les{" "}
            <strong>collectivités</strong> (voirie, espaces publics). Notre
            capacité d&apos;adaptation et notre parc matériel nous permettent de
            prendre en charge des chantiers de toutes tailles dans le Var (83).
          </p>
        </div>
      }
    />
  )
}
