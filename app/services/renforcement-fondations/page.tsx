import type { Metadata } from "next"
import { ServicePageLayout } from "@/components/sections/ServicePageLayout"
import { COMPANY } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Renforcement de fondations dans le Var (83) — Concaterra",
  description:
    "Spécialiste renforcement de fondations dans le Var : micropieux, reprise en sous-œuvre, injection résines. Sinistres sécheresse, Cat Nat. Devis gratuit — Concaterra Gonfaron (83590).",
  keywords: [
    "renforcement fondations Var",
    "micropieux Var",
    "reprise en sous-oeuvre 83",
    "fondations fissures sécheresse Var",
    "Cat Nat fondations PACA",
  ],
  alternates: {
    canonical: `${COMPANY.siteUrl}/services/renforcement-fondations`,
  },
  openGraph: {
    title: "Renforcement de fondations — Var (83) — Concaterra",
    description:
      "Micropieux, reprise en sous-œuvre et renforcement de fondations dans le Var. Sinistres sécheresse, Cat Nat. Devis gratuit.",
    url: `${COMPANY.siteUrl}/services/renforcement-fondations`,
  },
}

export default function RenforcementFondationsPage() {
  return (
    <ServicePageLayout
      title="Renforcement de fondations"
      slug="renforcement-fondations"
      metaDescription="Renforcement de fondations dans le Var par Concaterra."
      keywords={["renforcement fondations Var", "micropieux 83", "reprise sous-œuvre"]}
      intro="Concaterra Terrassement est spécialisé dans le renforcement de fondations dans le Var : micropieux, reprise en sous-œuvre, injection de résines. Nous intervenons après sinistres sécheresse (Cat Nat) et sur tous types de bâtiments en PACA."
      prestations={[
        {
          title: "Micropieux",
          description:
            "Pieux forés de petit diamètre (15–30 cm), armés et injectés au coulis de ciment jusqu'au sol stable. Technique de référence pour la reprise en sous-œuvre sur bâti existant.",
        },
        {
          title: "Reprise en sous-œuvre",
          description:
            "Renforcement ou extension en profondeur des fondations existantes pour les ancrer dans une couche porteuse. Intervention sur maisons fissurées, bâtiments en tassement.",
        },
        {
          title: "Injection de coulis et résines",
          description:
            "Consolidation du sol sous les fondations par injection haute pression. Solution peu invasive, idéale en milieu contraint ou pour des désordres ponctuels.",
        },
        {
          title: "Terrassement de confortement",
          description:
            "Drainage périphérique, purge de sol instable, mise en place de matériaux drainants pour agir sur les causes profondes des tassements.",
        },
        {
          title: "Diagnostic fondations",
          description:
            "Analyse des désordres (fissures, tassements, affaissements), préconisation des solutions adaptées. Coordination avec expert d'assurance pour sinistres Cat Nat.",
        },
      ]}
      arguments={[
        {
          title: "Spécialiste sécheresse Var",
          description:
            "Le Var est particulièrement exposé au retrait-gonflement des argiles (RGA). Nous connaissons les spécificités géologiques locales et les solutions adaptées.",
        },
        {
          title: "Prise en charge Cat Nat",
          description:
            "Nous accompagnons nos clients dans le montage de dossiers de reconnaissance de l'état de catastrophe naturelle et travaillons avec les experts d'assurance.",
        },
        {
          title: "Intervention sur bâti existant",
          description:
            "Nos techniques (micropieux, injection) permettent d'intervenir sans démolition, avec un impact minimal sur les occupants et le bâtiment.",
        },
      ]}
      content={
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <h2 className="font-barlow-condensed font-bold text-2xl text-[#57A639] uppercase">
            Renforcement de fondations dans le Var : pourquoi intervenir ?
          </h2>
          <p>
            Les maisons du Var sont particulièrement exposées aux problèmes de fondations liés
            au retrait-gonflement des argiles (RGA). En période de sécheresse, le sol argileux
            se rétracte et entraîne des tassements différentiels qui fissurent les murs, faux
            plafonds et carrelages. À Gonfaron, Brignoles, Toulon ou Draguignan, ces désordres
            sont de plus en plus fréquents avec les épisodes de sécheresse répétés.
          </p>
          <h2 className="font-barlow-condensed font-bold text-2xl text-[#57A639] uppercase">
            Les micropieux : la solution de référence
          </h2>
          <p>
            Le micropieu est la technique la plus utilisée pour reprendre les fondations d&apos;un
            bâtiment existant. De petit diamètre (15 à 30 cm), il est foré à travers les
            fondations actuelles et injecté jusqu&apos;à une couche de sol stable, reportant les
            charges sur un sol sain. Cette technique permet d&apos;intervenir de l&apos;intérieur comme
            de l&apos;extérieur, avec un matériel compact adapté aux accès difficiles.
          </p>
          <h2 className="font-barlow-condensed font-bold text-2xl text-[#57A639] uppercase">
            Sinistres sécheresse et Cat Nat
          </h2>
          <p>
            Lorsque votre commune est reconnue en état de catastrophe naturelle (arrêté Cat Nat),
            les travaux de renforcement de fondations peuvent être pris en charge par votre
            assurance habitation. Concaterra vous accompagne dans toutes les étapes : constat
            des dégâts, devis, coordination avec l&apos;expert d&apos;assurance, réalisation des travaux
            et rapport de fin de chantier.
          </p>
        </div>
      }
    />
  )
}
