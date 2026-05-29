import { COMPANY, SERVICES } from "@/lib/constants"

export function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
        "@id": `${COMPANY.siteUrl}/#business`,
        name: COMPANY.name,
        description:
          "Entreprise de terrassement, VRD, enrochement et aménagement paysager dans le Var (83), basée à Gonfaron.",
        url: COMPANY.siteUrl,
        telephone: COMPANY.phone,
        email: COMPANY.email,
        foundingDate: "2011",
        address: {
          "@type": "PostalAddress",
          streetAddress: COMPANY.address,
          addressLocality: COMPANY.city,
          postalCode: COMPANY.zip,
          addressCountry: "FR",
          addressRegion: COMPANY.department,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: COMPANY.lat,
          longitude: COMPANY.lng,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "07:00",
            closes: "18:00",
          },
        ],
        areaServed: COMPANY.zone.map((city) => ({
          "@type": "City",
          name: city,
        })),
        priceRange: "€€",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Prestations de terrassement",
          itemListElement: SERVICES.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.title,
              description: s.shortDesc,
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${COMPANY.siteUrl}/#website`,
        url: COMPANY.siteUrl,
        name: COMPANY.name,
        inLanguage: "fr-FR",
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
