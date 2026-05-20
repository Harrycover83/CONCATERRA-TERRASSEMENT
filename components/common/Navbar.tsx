"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { COMPANY, SERVICES } from "@/lib/constants"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Ferme le menu mobile lors d'un changement de route
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/realisations", label: "Réalisations" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1C2B3A] shadow-lg"
          : "bg-[#1C2B3A]/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" aria-label="Concaterra Terrassement — Accueil">
            <span className="flex items-center justify-center w-10 h-10 rounded bg-[#D97706] text-white font-bold text-sm leading-none select-none">
              CT
            </span>
            <div className="hidden sm:block">
              <p className="text-white font-bold text-base leading-tight font-barlow-condensed uppercase tracking-wide">
                Concaterra
              </p>
              <p className="text-[#D97706] text-xs font-medium uppercase tracking-widest">
                Terrassement
              </p>
            </div>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-[#D97706]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + burger */}
          <div className="flex items-center gap-3">
            <Button
              asChild
              className="hidden md:inline-flex bg-[#D97706] hover:bg-[#B45309] text-white font-semibold"
              size="sm"
            >
              <Link href="/contact">Devis gratuit</Link>
            </Button>

            {/* Menu burger mobile */}
            <button
              type="button"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="md:hidden p-2 text-white focus-visible:outline-2 focus-visible:outline-[#D97706] rounded"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className="sr-only">{menuOpen ? "Fermer le menu" : "Ouvrir le menu"}</span>
              <div className="w-6 flex flex-col gap-1.5" aria-hidden="true">
                <span
                  className={`block h-0.5 bg-current transition-all duration-200 origin-center ${
                    menuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current transition-all duration-200 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current transition-all duration-200 origin-center ${
                    menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen" : "max-h-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav
          className="bg-[#1C2B3A] border-t border-white/10 px-4 py-4 flex flex-col gap-1"
          aria-label="Navigation mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-2.5 px-3 rounded text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "text-[#D97706] bg-white/5"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-white/10 mt-1">
            <Button
              asChild
              className="w-full bg-[#D97706] hover:bg-[#B45309] text-white font-semibold"
            >
              <Link href="/contact">Demander un devis gratuit</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
