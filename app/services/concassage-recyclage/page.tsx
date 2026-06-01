import type { Metadata } from "next"
import { ServicePageLayout } from "@/components/sections/ServicePageLayout"
import { COMPANY } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Concassage et recyclage matériaux dans le Var (83) — Concaterra",
  description:
    "Concassage et recyclage de matériaux inertes dans le Var : broyage béton, végétaux, pierre, criblage à Gonfaron et dans le 83. Concaterra — devis gratuit.",
  keywords: [
    "concassage Var",
    "recyclage matériaux 83",
    "broyage béton Var",
    "criblage inertes PACA",
    "recyclage chantier Var",
  ],
  alternates: {
    canonical: `${COMPANY.siteUrl}/services/concassage-recyclage`,
  },
  openGraph: {
    title: "Concassage & Recyclage matériaux — Var (83) — Concaterra",
    description:
      "Broyage béton, végétaux, pierre et criblage inertes dans le Var. Concaterra Terrassement, Gonfaron (83590).",
    url: `${COMPANY.siteUrl}/services/concassage-recyclage`,
  },
}

export default function ConcassageRecyclagePage() {
  return (
    <ServicePageLayout
      title="Concassage & Recyclage"
      slug="concassage-recyclage"
      metaDescription="Concassage et recyclage de matériaux dans le Var par Concaterra."
      keywords={["concassage Var", "recyclage matériaux 83", "broyage béton"]}
      intro="Concaterra Terrassement propose des services de concassage et recyclage de matériaux dans le Var : broyage béton, végétaux, roches, criblage d'inertes. Une solution économique et écologique pour valoriser vos déchets de chantier dans le 83."
      prestations={[
        {
          title: "Concassage béton",
          description:
            "Broyage de béton de démolition, parpaings, tuiles pour produire du granulat recyclé réutilisable comme remblai ou couche de forme.",
        },
        {
          title: "Criblage de terres",
          description:
            "Tamisage et criblage des terres excavées pour séparer les inertes utilisables des déchets et affiner la granulométrie selon vos besoins.",
        },
        {
          title: "Broyage de végétaux",
          description:
            "Broyage de souches, branches et déchets verts de chantier pour produire du broyat utilisable en paillage ou compostage.",
        },
        {
          title: "Concassage de roches",
          description:
            "Réduction de blocs rocheux en granulats pour remblais, couches de forme ou aménagements. Adaptation à toutes les duretés de roche.",
        },
        {
          title: "Tri et valorisation inertes",
          description:
            "Tri des déchets de chantier, séparation des fractions valorisables (béton, brique, ardoise) pour réduire les coûts de mise en décharge.",
        },
        {
          title: "Prestation sur site",
          description:
            "Intervention directement sur votre chantier dans le Var avec notre matériel mobile. Évite les coûts et délais de transport vers une carrière.",
        },
      ]}
      arguments={[
        {
          title: "Économies sur votre chantier",
          description:
            "Valoriser vos matériaux sur site réduit les coûts de transport et de mise en décharge, tout en produisant des granulats réutilisables.",
        },
        {
          title: "Démarche éco-responsable",
          description:
            "Le recyclage des inertes réduit l'exploitation des carrières et l'empreinte carbone de votre chantier. Une approche conforme à la RE2020.",
        },
        {
          title: "Matériel professionnel",
          description:
            "Concasseurs, cribles mobiles, broyeurs : notre parc matériel nous permet de traiter tous types de matériaux directement sur votre chantier.",
        },
      ]}
      content={
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <h2 className="font-barlow-condensed font-bold text-2xl text-[#57A639] uppercase">
            Concassage et recyclage : une réponse aux enjeux du chantier moderne
          </h2>
          <p>
            La gestion des déchets de chantier est devenue un enjeu majeur dans
            le secteur du BTP. La réglementation est de plus en plus stricte sur
            le tri et la valorisation des inertes, et les coûts de mise en
            décharge ne cessent d&apos;augmenter. Le concassage et le recyclage
            sur site représentent une réponse à la fois économique et
            environnementale à ces contraintes.
          </p>
          <p>
            Concaterra Terrassement propose ses services de concassage et
            recyclage sur tout le département du Var (83) : nous intervenons
            directement sur votre chantier à Gonfaron, Draguignan, Brignoles ou
            Toulon avec notre matériel mobile.
          </p>

          <h2 className="font-barlow-condensed font-bold text-2xl text-[#57A639] uppercase">
            Quels matériaux peut-on recycler sur chantier ?
          </h2>
          <p>
            De nombreux matériaux de démolition ou d&apos;excavation peuvent
            être valorisés :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Béton de démolition</strong> : maisons, dalles, fondations
              — broyé pour produire du gravillon recyclé (GNT recyclée)
            </li>
            <li>
              <strong>Matériaux rocheux</strong> : calcaire, grès, roche
              extraite lors du terrassement — concassés pour remblai ou
              couche de forme
            </li>
            <li>
              <strong>Terres criblées</strong> : terres avec cailloux séparés
              des fines, réutilisables pour remblai ou jardin
            </li>
            <li>
              <strong>Végétaux</strong> : souches, branches issues des
              défrichements — broyés en paillis ou compost
            </li>
          </ul>

          <h2 className="font-barlow-condensed font-bold text-2xl text-[#57A639] uppercase">
            Réglementations sur le recyclage des inertes dans le Var
          </h2>
          <p>
            Le recyclage des déchets inertes de chantier est encadré par la
            réglementation française. Les matériaux recyclés peuvent être
            utilisés en remblais sous certaines conditions (guide du SETRA,
            norme NF EN 13242). Concaterra Terrassement vous accompagne pour
            s&apos;assurer que l&apos;utilisation de matériaux recyclés est
            conforme aux exigences réglementaires de votre projet dans le Var.
          </p>
        </div>
      }
    />
  )
}
