import type { Metadata } from "next"
import { Breadcrumb } from "@/components/common/Breadcrumb"
import { COMPANY } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Mentions légales — Concaterra Terrassement",
  description:
    "Mentions légales de Concaterra Terrassement SARL, entreprise de terrassement basée à Gonfaron (83590), Var.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: `${COMPANY.siteUrl}/mentions-legales`,
  },
}

export default function MentionsLegalesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Mentions légales", href: "/mentions-legales" }]} />

      <div className="pt-16 md:pt-20">
        <section className="bg-[#1C2B3A] py-12 text-white">
          <div className="container mx-auto px-4">
            <h1 className="font-barlow-condensed font-extrabold text-3xl sm:text-4xl uppercase">
              Mentions légales
            </h1>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl prose prose-slate">
            <h2>Éditeur du site</h2>
            <p>
              <strong>CONCATERRA TERRASSEMENT</strong><br />
              Société à responsabilité limitée (SARL)<br />
              Capital social : {COMPANY.capital}<br />
              SIREN : {COMPANY.siren}<br />
              RCS : Draguignan<br />
              Siège social : {COMPANY.address}, {COMPANY.city}<br />
              Représentée par : {COMPANY.gerant}, gérant<br />
              Téléphone : {COMPANY.phoneFormatted}<br />
              Email : {COMPANY.email}
            </p>

            <h2>Directeur de la publication</h2>
            <p>
              {COMPANY.gerant}, gérant de CONCATERRA TERRASSEMENT.
            </p>

            <h2>Hébergeur</h2>
            <p>
              <strong>Netlify, Inc.</strong><br />
              44 Montgomery Street, Suite 300<br />
              San Francisco, CA 94104, États-Unis<br />
              <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">
                https://www.netlify.com
              </a>
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des éléments constituant ce site (textes, images,
              logos, structure) est la propriété exclusive de CONCATERRA
              TERRASSEMENT ou de ses ayants droit. Toute reproduction,
              représentation, modification, publication ou transmission, totale
              ou partielle, du contenu de ce site, par quelque moyen que ce
              soit, est interdite sans l&apos;autorisation expresse et préalable de
              CONCATERRA TERRASSEMENT.
            </p>

            <h2>Responsabilité</h2>
            <p>
              CONCATERRA TERRASSEMENT s&apos;efforce d&apos;assurer l&apos;exactitude et la
              mise à jour des informations diffusées sur ce site. Toutefois,
              CONCATERRA TERRASSEMENT ne peut garantir l&apos;exactitude, la
              précision ou l&apos;exhaustivité des informations mises à disposition
              sur ce site. En conséquence, CONCATERRA TERRASSEMENT décline
              toute responsabilité pour toute imprécision, inexactitude ou
              omission portant sur des informations disponibles sur ce site.
            </p>

            <h2>Données personnelles et cookies</h2>
            <p>
              Le formulaire de contact utilise le service <strong>EmailJS</strong> (EmailJS Ltd,
              opérant depuis le Royaume-Uni) pour l&apos;acheminement des messages.
              Les données saisies (nom, email, téléphone, message) transitent via
              ce service tiers et ne sont pas conservées par lui au-delà de la
              transmission. Aucune donnée n&apos;est vendue ni partagée à des fins
              commerciales.
            </p>
            <p>
              Conformément à la loi n° 78-17 du 6 janvier 1978 relative à
              l&apos;informatique, aux fichiers et aux libertés, et au Règlement
              Général sur la Protection des Données (RGPD — Règlement UE
              2016/679), vous disposez d&apos;un droit d&apos;accès, de rectification,
              d&apos;effacement et d&apos;opposition aux données vous concernant.
            </p>
            <p>
              Pour exercer ces droits, vous pouvez contacter CONCATERRA
              TERRASSEMENT à l&apos;adresse email : {COMPANY.email}
            </p>
            <p>
              <strong>Cookies :</strong> Ce site n&apos;utilise pas de cookies de
              traçage ou d&apos;analyse. Aucun cookie tiers (analytics, publicité,
              réseaux sociaux) n&apos;est installé sur votre navigateur. Le seul
              cookie utilisé est un cookie fonctionnel permettant de mémoriser
              votre réponse à la bannière de consentement.
            </p>

            <h2>Liens hypertexte</h2>
            <p>
              La mise en place de liens hypertexte vers ce site est soumise à
              l&apos;accord préalable de CONCATERRA TERRASSEMENT. Ce site peut
              contenir des liens vers d&apos;autres sites internet. CONCATERRA
              TERRASSEMENT n&apos;est pas responsable du contenu de ces sites tiers.
            </p>

            <h2>Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit français.
              En cas de litige, les tribunaux français seront seuls compétents.
            </p>

            <p className="text-sm text-gray-500 mt-8">
              Dernière mise à jour : mai 2026
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
