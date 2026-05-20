"use client"

import Link from "next/link"
import { Fragment } from "react"
import { COMPANY } from "@/lib/constants"

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems: BreadcrumbItem[] = [
    { label: "Accueil", href: "/" },
    ...items,
  ]

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${COMPANY.siteUrl}${item.href}`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav
        aria-label="Fil d'Ariane"
        className="bg-[#F5F5F0] border-b border-gray-200 py-2 px-4"
      >
        <ol className="container mx-auto flex flex-wrap items-center gap-1 text-sm text-gray-600">
          {allItems.map((item, index) => (
            <Fragment key={item.href}>
              {index > 0 && (
                <li aria-hidden="true" className="text-gray-400">
                  /
                </li>
              )}
              <li>
                {index === allItems.length - 1 ? (
                  <span className="text-[#D97706] font-medium" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-[#D97706] transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            </Fragment>
          ))}
        </ol>
      </nav>
    </>
  )
}
