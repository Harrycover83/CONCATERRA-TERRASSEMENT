import type { Metadata } from "next"
import { ServicePageLayout } from "@/components/sections/ServicePageLayout"
import { COMPANY } from "@/lib/constants"

export const metadata: Metadata = {
  title: "VRD Voirie et Réseaux Divers dans le Var (83) — Concaterra",
  description:
    "VRD dans le Var : réseaux eau, électricité, assainissement, chaussées à Gonfaron et dans le 83. Concaterra Terrassement — devis gratuit sous 24h.",
  keywords: [
    "VRD Var",
    "voirie réseaux Gonfaron",
    "assainissement 83",
    "réseaux eau électricité Var",
    "travaux VRD PACA",
  ],
  alternates: {
    canonical: `${COMPANY.siteUrl}/services/vrd-voirie-reseaux`,
  },
  openGraph: {
    title: "VRD Voirie & Réseaux Divers — Var (83) — Concaterra",
    description:
      "Travaux de VRD dans le Var : assainissement, eau potable, électricité, chaussées. Concaterra Terrassement, Gonfaron (83590).",
    url: `${COMPANY.siteUrl}/services/vrd-voirie-reseaux`,
  },
}

export default function VRDPage() {
  return (
    <ServicePageLayout
      title="VRD — Voirie & Réseaux"
      slug="vrd-voirie-reseaux"
      metaDescription="VRD Voirie et Réseaux Divers dans le Var par Concaterra."
      keywords={["VRD Var", "assainissement 83", "voirie réseaux"]}
      intro="Concaterra Terrassement réalise vos travaux de VRD (Voirie et Réseaux Divers) dans le Var : assainissement, eau potable, réseaux secs, chaussées. Une maîtrise complète des réseaux souterrains pour viabiliser vos terrains à Gonfaron et dans tout le 83."
      prestations={[
        {
          title: "Assainissement eaux usées",
          description:
            "Pose de canalisations PVC, regard de visite, raccordement au réseau public ou installation d'une fosse septique conforme. Garantie d'étanchéité.",
        },
        {
          title: "Réseaux eaux pluviales",
          description:
            "Drainage, collecte et gestion des eaux de pluie : réseaux EP, noues, bassins de rétention, cunettes. Conformité aux règles de ruissellement.",
        },
        {
          title: "Adduction d'eau potable",
          description:
            "Raccordement au réseau communal d'eau potable (AEP), pose de conduites PE, compteurs et accessoires. Coordination avec les services des eaux.",
        },
        {
          title: "Réseaux secs (électricité, télécom)",
          description:
            "Pose de fourreaux pour câbles électriques (Enedis), télécommunications et fibre optique. Travail en coordination avec les concessionnaires.",
        },
        {
          title: "Voirie et chaussées",
          description:
            "Création et réfection de voiries : terrassement, couche de forme, grave concassée, enrobé. Trottoirs, bordures, parkings.",
        },
        {
          title: "Éclairage public",
          description:
            "Pose de fourreaux et massifs pour candélabres, raccordement électrique, câblage enterré conformément aux normes en vigueur.",
        },
      ]}
      arguments={[
        {
          title: "Coordination multi-réseaux",
          description:
            "Nous gérons simultanément plusieurs réseaux sur un même chantier, en coordination avec tous les concessionnaires du Var.",
        },
        {
          title: "Conformité réglementaire",
          description:
            "DICT systématique, respect des profondeurs réglementaires, fournitures certifiées, procès-verbaux de réception avec les concessionnaires.",
        },
        {
          title: "Prestation clé en main",
          description:
            "Du terrassement des tranchées à la réfection de surface, en passant par les essais d'étanchéité : un seul prestataire pour tout.",
        },
      ]}
      content={
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <h2 className="font-barlow-condensed font-bold text-2xl text-[#1C2B3A] uppercase">
            Les VRD : l&apos;infrastructure indispensable de tout terrain
          </h2>
          <p>
            Les travaux de Voirie et Réseaux Divers (VRD) constituent
            l&apos;ensemble des réseaux souterrains et des voiries qui permettent
            de raccorder un terrain ou un bâtiment aux services essentiels :
            eau, électricité, assainissement, télécommunications. Sans VRD bien
            réalisés, aucun projet de construction ne peut aboutir.
          </p>
          <p>
            Dans le Var (83), Concaterra Terrassement prend en charge
            l&apos;intégralité de vos travaux VRD, de la phase d&apos;étude à la
            réception avec les concessionnaires (Enedis, Veolia, services
            communaux). Notre connaissance des réseaux locaux est un atout
            majeur pour anticiper les contraintes propres à chaque commune du 83.
          </p>

          <h2 className="font-barlow-condensed font-bold text-2xl text-[#1C2B3A] uppercase">
            Méthodologie : de la DICT à la réception
          </h2>
          <p>
            Avant tout démarrage, nous effectuons systématiquement une{" "}
            <strong>Déclaration d&apos;Intention de Commencement de Travaux
            (DICT)</strong> auprès des exploitants de réseaux. Cette démarche
            obligatoire permet de localiser précisément les réseaux existants et
            d&apos;éviter tout incident lors des travaux.
          </p>
          <p>
            Les <strong>tranchées</strong> sont réalisées aux cotes définies
            dans les plans, avec des profondeurs respectant les prescriptions de
            chaque concessionnaire. Après pose des canalisations et gaines, un
            lit de sable est mis en œuvre avant le <strong>remblayage
            compacté</strong>, qui garantit la stabilité de la tranchée et
            prévient les tassements.
          </p>
          <p>
            Chaque réseau fait l&apos;objet de <strong>tests de réception</strong> :
            essais d&apos;étanchéité pour l&apos;assainissement, vérification
            électrique pour les réseaux secs. Nous vous remettons les
            procès-verbaux de réception permettant d&apos;obtenir les
            attestations de conformité.
          </p>

          <h2 className="font-barlow-condensed font-bold text-2xl text-[#1C2B3A] uppercase">
            VRD pour maisons individuelles, lotissements et professionnels
          </h2>
          <p>
            Que vous soyez un particulier souhaitant viabiliser votre terrain à
            Gonfaron, un promoteur réalisant un lotissement à Draguignan ou une
            collectivité renovant sa voirie à Brignoles, Concaterra Terrassement
            adapte son intervention à la nature et à l&apos;échelle de votre
            projet dans le Var.
          </p>
        </div>
      }
    />
  )
}
