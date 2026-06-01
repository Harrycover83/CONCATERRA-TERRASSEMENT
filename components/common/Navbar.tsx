"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

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
    { href: "/#qui-sommes-nous", label: "Qui sommes-nous" },
    { href: "/realisations", label: "Réalisations" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (href: string) => {
    if (href.includes("#")) return false
    return href === "/" ? pathname === "/" : pathname.startsWith(href)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#57A639] shadow-lg"
          : "bg-[#57A639]/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-28 md:h-32">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" aria-label="Concaterra Terrassement — Accueil">
            <Image
              src="/logo-navbar.png"
              alt="Concaterra Terrassement"
              width={280}
              height={112}
              className="h-24 md:h-28 w-auto object-contain"
              priority
            />
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-[#D42020]"
                    : "text-white hover:text-[#D42020]"
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
              className="hidden md:inline-flex bg-[#D42020] hover:bg-[#B01A1A] text-white font-semibold"
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
              className="md:hidden p-2 text-white focus-visible:outline-2 focus-visible:outline-[#D42020] rounded"
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

      {/* Menu mobile — AnimatePresence pour animation fluide */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
            aria-hidden={!menuOpen}
          >
            <nav
              className="bg-[#57A639] border-t border-white/10 px-4 py-4 flex flex-col gap-1"
              aria-label="Navigation mobile"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -12, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className={`block py-2.5 px-3 rounded text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? "text-[#D42020] bg-white/10"
                        : "text-white hover:text-[#D42020] hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ x: -12, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.2 }}
                className="pt-2 border-t border-white/10 mt-1"
              >
                <Button
                  asChild
                  className="w-full bg-[#D42020] hover:bg-[#B01A1A] text-white font-semibold"
                >
                  <Link href="/contact">Demander un devis gratuit</Link>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
