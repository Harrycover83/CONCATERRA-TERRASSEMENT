"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="alertdialog"
      aria-modal="false"
      aria-label="Politique de cookies"
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#57A639] border-t border-white/10 p-4"
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-white/80 flex-1">
          Ce site n&apos;utilise aucun cookie publicitaire ou de traçage tiers.
          Seuls des cookies fonctionnels essentiels sont utilisés.{" "}
          <a
            href="/mentions-legales"
            className="underline hover:text-[#D42020]"
          >
            En savoir plus
          </a>
        </p>
        <Button
          onClick={accept}
          className="bg-[#D42020] hover:bg-[#B01A1A] text-white whitespace-nowrap"
          size="sm"
        >
          J&apos;accepte
        </Button>
      </div>
    </div>
  )
}
