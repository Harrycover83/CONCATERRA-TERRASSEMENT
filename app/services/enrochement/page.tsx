import type { Metadata } from "next"
import { ServicePageLayout } from "@/components/sections/ServicePageLayout"
import { COMPANY } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Enrochement et soutènement dans le Var (83) — Concaterra",
  description:
    "Enrochement, soutènement et protection de berges dans le Var par Concaterra. Perrés maçonnés, murs de soutènement, enrochements naturels à Gonfaron et dans le 83.",
  keywords: [
    "enrochement Var",
    "soutènement terrain 83",
    "protection berge Var",
    "mur soutènement PACA",
    "perré maçonné Var",
  ],
  alternates: {
    canonical: `${COMPANY.siteUrl}/services/enrochement`,
  },
  openGraph: {
    title: "Enrochement et soutènement — Var (83) — Concaterra",
    description:
      "Enrochement, soutènement et protection de berges dans le Var. Concaterra Terrassement, Gonfaron (83590).",
    url: `${COMPANY.siteUrl}/services/enrochement`,
  },
}

export default function EnrochementPage() {
  return (
    <ServicePageLayout
      title="Enrochement"
      slug="enrochement"
      metaDescription="Enrochement et soutènement dans le Var par Concaterra."
      keywords={["enrochement Var", "soutènement 83", "protection berge"]}
      intro="Concaterra Terrassement réalise vos travaux d'enrochement et de soutènement dans le Var : protection de berges, murs de soutènement, enrochements naturels. Des solutions robustes et durables pour sécuriser vos terrains en dénivelé dans le 83."
      prestations={[
        {
          title: "Enrochement naturel",
          description:
            "Mise en œuvre de blocs rocheux pour soutenir les talus, consolider les berges et stabiliser les terrains en pente. Pose manuelle ou mécanisée selon l'accessibilité.",
        },
        {
          title: "Protection de berges",
          description:
            "Stabilisation des rives de cours d'eau, fossés et plans d'eau par enrochement. Prévention de l'érosion et protection contre les crues.",
        },
        {
          title: "Soutènement de talus",
          description:
            "Réalisation de soutènements pour terrain en pente : enrochement cyclopéen, murs béton, palplanches. Adaptation aux contraintes géologiques locales.",
        },
        {
          title: "Perrés maçonnés",
          description:
            "Réalisation de perrés maçonnés pour la protection et le soutènement de talus avec un rendu esthétique soigné, intégré dans le paysage varois.",
        },
        {
          title: "Terrassement associé",
          description:
            "Préparation du terrain avant enrochement : déblais, plateforme, réglage et compactage pour une assise stable des ouvrages.",
        },
      ]}
      arguments={[
        {
          title: "Expertise terrain",
          description:
            "Les reliefs du Var (Maures, Esterel, Verdon) présentent des contraintes spécifiques. Nous connaissons les matériaux et techniques adaptés.",
        },
        {
          title: "Matériaux locaux",
          description:
            "Nous privilégions les pierres et matériaux locaux, pour un rendu esthétique naturel et une réduction de l'empreinte carbone du chantier.",
        },
        {
          title: "Durabilité des ouvrages",
          description:
            "Nos enrochements sont conçus pour résister aux intempéries méditerranéennes : crues, sécheresse, gel. Ouvrage garanti dans le temps.",
        },
      ]}
      content={
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <h2 className="font-barlow-condensed font-bold text-2xl text-[#57A639] uppercase">
            L&apos;enrochement : technique et esthétique pour sécuriser vos terrains
          </h2>
          <p>
            L&apos;enrochement est une technique fondamentale dans les travaux
            publics varois, rendue nécessaire par les reliefs accidentés du
            département du Var (83). Qu&apos;il s&apos;agisse de sécuriser un
            terrain en pente sur les contreforts des Maures à Gonfaron, de
            protéger une berge de l&apos;Argens à Draguignan ou de créer un mur
            de soutènement esthétique à Hyères, l&apos;enrochement répond à la
            fois à des impératifs de sécurité et à des exigences d&apos;intégration
            paysagère.
          </p>
          <p>
            Concaterra Terrassement maîtrise l&apos;ensemble des techniques
            d&apos;enrochement pratiquées dans la région Provence-Alpes-Côte
            d&apos;Azur, de la pose de blocs cyclopéens aux perrés maçonnés traditionnels.
          </p>

          <h2 className="font-barlow-condensed font-bold text-2xl text-[#57A639] uppercase">
            Quand l&apos;enrochement est-il nécessaire ?
          </h2>
          <p>
            L&apos;enrochement est recommandé (ou obligatoire) dans plusieurs
            cas de figure fréquents dans le Var :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Terrain en dénivelé avec risque de glissement : création d&apos;un
              mur de soutènement en enrochement
            </li>
            <li>
              Proximité d&apos;un cours d&apos;eau : protection des berges contre
              l&apos;érosion et les crues méditerranéennes
            </li>
            <li>
              Projet de construction en zone pentue : stabilisation du terrain
              avant les fondations
            </li>
            <li>
              Aménagement de talus routiers : sécurisation et esthétique de
              l&apos;ouvrage routier
            </li>
          </ul>

          <h2 className="font-barlow-condensed font-bold text-2xl text-[#57A639] uppercase">
            Enrochement dans le Var : pourquoi choisir un professionnel local
          </h2>
          <p>
            La réussite d&apos;un chantier d&apos;enrochement dans le Var repose
            sur la connaissance des matériaux locaux (calcaire, granite des
            Maures) et des contraintes géologiques propres à chaque zone du
            département. Un prestataire local comme Concaterra Terrassement
            dispose de cette expertise, ainsi que des contacts avec les
            carrières varoise pour l&apos;approvisionnement en matériaux de
            qualité.
          </p>
        </div>
      }
    />
  )
}
