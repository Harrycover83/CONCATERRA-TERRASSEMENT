import Link from "next/link"
import { COMPANY, SERVICES } from "@/lib/constants"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#57A639] text-white/90 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Colonne 1 — Entreprise */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded bg-[#D42020] text-white font-bold text-sm select-none">
                CT
              </span>
              <div>
                <p className="text-white font-bold text-sm uppercase tracking-wide">
                  Concaterra
                </p>
                <p className="text-[#D42020] text-xs uppercase tracking-widest">
                  Terrassement
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Entreprise de travaux publics basée à Gonfaron (83590), Var.
              Terrassement, VRD, enrochement et aménagement paysager dans toute
              la région PACA.
            </p>
            <p className="text-xs text-white/60">
              SIREN : {COMPANY.siren} — RCS {COMPANY.rcs}
            </p>
            <p className="text-xs text-white/60">Capital : {COMPANY.capital}</p>
          </div>

          {/* Colonne 2 — Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">
              Nos services
            </h3>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm hover:text-[#D42020] transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Zones d'intervention */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">
              Zones d&apos;intervention
            </h3>
            <ul className="flex flex-wrap gap-x-3 gap-y-1">
              {COMPANY.zone.map((city) => (
                <li key={city} className="text-sm text-white/80">
                  {city}
                </li>
              ))}
            </ul>
            <div className="mt-4 space-y-1">
              <Link
                href="/terrassement-toulon"
                className="block text-sm hover:text-[#D42020] transition-colors"
              >
                Terrassement Toulon
              </Link>
              <Link
                href="/terrassement-draguignan"
                className="block text-sm hover:text-[#D42020] transition-colors"
              >
                Terrassement Draguignan
              </Link>
              <Link
                href="/terrassement-brignoles"
                className="block text-sm hover:text-[#D42020] transition-colors"
              >
                Terrassement Brignoles
              </Link>
              <Link
                href="/terrassement-hyeres"
                className="block text-sm hover:text-[#D42020] transition-colors"
              >
                Terrassement Hyères
              </Link>
              <Link
                href="/terrassement-le-luc"
                className="block text-sm hover:text-[#D42020] transition-colors"
              >
                Terrassement Le Luc
              </Link>
            </div>
          </div>

          {/* Colonne 4 — Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">
              Contact
            </h3>
            <address className="not-italic space-y-2 text-sm">
              <p>
                {COMPANY.address}
                <br />
                {COMPANY.zip} {COMPANY.city}
                <br />
                {COMPANY.department}, {COMPANY.region}
              </p>
              <p>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="hover:text-[#D42020] transition-colors font-medium text-white"
                >
                  {COMPANY.phoneFormatted}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-[#D42020] transition-colors"
                >
                  {COMPANY.email}
                </a>
              </p>
              <p className="text-white/70">{COMPANY.hours}</p>
            </address>
          </div>
        </div>

        {/* Barre de bas de page */}
        <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>
            © {year} {COMPANY.legal}. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/mentions-legales"
              className="hover:text-[#D42020] transition-colors"
            >
              Mentions légales
            </Link>
            <Link href="/blog" className="hover:text-[#D42020] transition-colors">
              Blog
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#D42020] transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
