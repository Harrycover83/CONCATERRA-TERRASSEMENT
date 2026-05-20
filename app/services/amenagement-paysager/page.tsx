import type { Metadata } from "next"
import { ServicePageLayout } from "@/components/sections/ServicePageLayout"
import { COMPANY } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Aménagement paysager dans le Var (83) — Concaterra Terrassement",
  description:
    "Aménagement paysager dans le Var : espaces verts, allées, clôtures, plantations à Gonfaron et dans le 83. Concaterra Terrassement — devis gratuit sous 24h.",
  keywords: [
    "aménagement paysager Var",
    "paysagiste Gonfaron",
    "espaces verts 83",
    "allée jardin Var",
    "clôture terrain PACA",
  ],
  alternates: {
    canonical: `${COMPANY.siteUrl}/services/amenagement-paysager`,
  },
  openGraph: {
    title: "Aménagement paysager Var (83) — Concaterra Terrassement",
    description:
      "Espaces verts, allées, clôtures et plantations dans le Var. Concaterra Terrassement, Gonfaron (83590). Devis gratuit.",
    url: `${COMPANY.siteUrl}/services/amenagement-paysager`,
  },
}

export default function AmenagementPaysagerPage() {
  return (
    <ServicePageLayout
      title="Aménagement paysager"
      slug="amenagement-paysager"
      metaDescription="Aménagement paysager dans le Var par Concaterra."
      keywords={["aménagement paysager Var", "paysagiste 83", "espaces verts"]}
      intro="Concaterra Terrassement réalise vos aménagements paysagers dans le Var : espaces verts, allées carrossables, clôtures, dallages et plantations. Des créations extérieures sur mesure, pensées pour le climat méditerranéen du 83."
      prestations={[
        {
          title: "Création d'espaces verts",
          description:
            "Terrassement, nivellement et préparation du sol pour la création de jardins, pelouses, massifs. Adaptation aux contraintes du terrain varois.",
        },
        {
          title: "Allées et voies d'accès",
          description:
            "Création d'allées carrossables ou piétonnes : grave stabilisée, béton balayé, pavés, dallage. Respect de la pente et de l'écoulement des eaux.",
        },
        {
          title: "Clôtures et portails",
          description:
            "Pose de clôtures grillagées, en bois, murs bahuts, haies végétales. Installation de portails et portillons avec ou sans motorisation.",
        },
        {
          title: "Dallages et terrasses",
          description:
            "Réalisation de terrasses extérieures : terrassement, dalle béton, pose de carrelage, dallage pierre, terrasse bois. Adaptation aux usages.",
        },
        {
          title: "Plantations",
          description:
            "Sélection et mise en place de végétaux adaptés au climat méditerranéen varois : haies persistantes, arbres fruitiers, oliviers, aromates.",
        },
        {
          title: "Arrosage automatique",
          description:
            "Conception et installation de systèmes d'arrosage automatique pour jardins et espaces verts : tuyaux, programmateurs, têtes d'arrosage.",
        },
      ]}
      arguments={[
        {
          title: "Adaptation au climat Var",
          description:
            "Nous sélectionnons des végétaux et matériaux adaptés au climat méditerranéen : sécheresse estivale, pluies brutales, ensoleillement intense.",
        },
        {
          title: "Savoir-faire BTP",
          description:
            "Notre expertise en terrassement et VRD garantit des fondations solides pour vos aménagements : allées stables, drainage efficace.",
        },
        {
          title: "Prestation globale",
          description:
            "Du terrassement à la plantation finale, un seul interlocuteur pour l'ensemble de votre projet d'aménagement extérieur.",
        },
      ]}
      content={
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <h2 className="font-barlow-condensed font-bold text-2xl text-[#1C2B3A] uppercase">
            L&apos;aménagement paysager en Provence : spécificités et savoir-faire
          </h2>
          <p>
            Aménager les espaces extérieurs dans le Var requiert une double
            expertise : la maîtrise des techniques de terrassement et du BTP
            pour les infrastructures (allées, terrasses, murs), et la
            connaissance du milieu méditerranéen pour les végétaux et les
            matériaux adaptés au climat de la région PACA.
          </p>
          <p>
            Concaterra Terrassement intervient sur vos projets
            d&apos;aménagement paysager à Gonfaron et dans tout le Var (83),
            en combinant notre expertise en travaux publics avec une approche
            esthétique attentive à l&apos;intégration dans le paysage provençal.
          </p>

          <h2 className="font-barlow-condensed font-bold text-2xl text-[#1C2B3A] uppercase">
            De la conception à la réalisation
          </h2>
          <p>
            Chaque projet d&apos;aménagement paysager débute par une visite de
            chantier gratuite. Nous analysons la topographie du terrain, son
            exposition, sa nature et les souhaits du propriétaire pour proposer
            un aménagement cohérent et durable.
          </p>
          <p>
            Les travaux de <strong>terrassement préparatoire</strong> constituent
            souvent la première phase : réglage du terrain, création de niveaux,
            réalisation des fouilles pour les fondations d&apos;allées et de
            terrasses. Cette étape, que nous maîtrisons parfaitement, conditionne
            la qualité de l&apos;ensemble des travaux paysagers.
          </p>

          <h2 className="font-barlow-condensed font-bold text-2xl text-[#1C2B3A] uppercase">
            Végétaux méditerranéens : des choix adaptés au Var
          </h2>
          <p>
            Le Var bénéficie d&apos;un ensoleillement exceptionnel mais connaît
            également des sécheresses estivales marquées. Nous privilégions des
            végétaux à faible consommation d&apos;eau, résistants à la chaleur :
            lavandes, cistes, oliviers, caroubiers, cyprès, lauriers. Des
            essences méditerranéennes robustes qui offrent un beau rendu visuel
            tout en limitant l&apos;entretien et l&apos;arrosage.
          </p>
        </div>
      }
    />
  )
}
