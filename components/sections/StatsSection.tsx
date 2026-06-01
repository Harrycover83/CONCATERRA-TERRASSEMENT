"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

const STATS = [
  { value: 15, suffix: " ans", label: "d'expérience" },
  { value: 1000, suffix: "+", label: "chantiers réalisés" },
  { value: 3, suffix: "", label: "départements couverts" },
  { value: 1, suffix: " sem.", label: "délai devis" },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    const duration = 1600
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isInView, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="bg-[#57A639] border-t border-b border-white/5" aria-label="Chiffres clés">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-10 px-4 text-center"
            >
              <span className="font-barlow-condensed font-extrabold text-4xl sm:text-5xl text-[#D42020]">
                <Counter target={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-white/50 text-sm mt-1 uppercase tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
