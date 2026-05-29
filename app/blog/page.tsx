import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Breadcrumb } from "@/components/common/Breadcrumb"
import { Badge } from "@/components/ui/badge"
import { BLOG_POSTS } from "@/lib/blog-data"
import { COMPANY } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Blog Renforcement Fondation & Terrassement Var — Concaterra",
  description:
    "Guides pratiques sur le renforcement de fondation (micropieux, reprise en sous-œuvre, Cat Nat), le terrassement et les VRD dans le Var (83) par Concaterra Terrassement.",
  keywords: [
    "renforcement fondation Var",
    "micropieux Var",
    "fissures maison sécheresse Var",
    "Cat Nat sinistre sécheresse Var",
    "blog terrassement Var",
    "conseils fondations 83",
  ],
  alternates: {
    canonical: `${COMPANY.siteUrl}/blog`,
  },
  openGraph: {
    title: "Blog — Fondations, Terrassement & Travaux Publics Var (83) — Concaterra",
    description:
      "Guides sur le renforcement de fondation, micropieux, Cat Nat sécheresse et terrassement dans le Var. Concaterra Terrassement, Gonfaron (83590).",
    url: `${COMPANY.siteUrl}/blog`,
  },
}

export default function BlogPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Blog", href: "/blog" }]} />

      <div className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="bg-[#1C2B3A] py-16 text-white">
          <div className="container mx-auto px-4">
            <p className="text-[#D97706] font-semibold uppercase tracking-widest text-sm mb-3">
              Fondations · Terrassement · Assurance
            </p>
            <h1 className="font-barlow-condensed font-extrabold text-4xl sm:text-5xl uppercase mb-4">
              Guides &amp; Conseils
            </h1>
            <p className="text-gray-300 max-w-xl text-lg">
              Renforcement de fondation, micropieux, sinistres sécheresse, Cat Nat… et terrassement dans le Var (83) : tout ce qu&apos;un propriétaire doit savoir.
            </p>
          </div>
        </section>

        {/* Articles */}
        <section className="py-16 bg-[#F5F5F0]">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post) => (
                <article
                  key={post.slug}
                  className="group bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col"
                >
                  {post.image ? (
                    <Link href={`/blog/${post.slug}`} className="relative block h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </Link>
                  ) : (
                    <div className="bg-[#1C2B3A] h-48 flex items-center justify-center px-6">
                      <span className="text-5xl" aria-hidden="true">🏗️</span>
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge
                          key={tag}
                          className="bg-[#D97706]/10 text-[#D97706] border border-[#D97706]/30 text-xs font-normal"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h2 className="font-barlow-condensed font-bold text-xl text-[#1C2B3A] mb-3 leading-tight line-clamp-3">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-[#D97706] transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-500 text-xs mb-3">
                      {new Date(post.date).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                      {" · "}
                      {post.readingTime}
                    </p>
                    <p className="text-gray-600 text-sm flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-4 inline-block text-[#D97706] font-semibold text-sm hover:underline"
                      aria-label={`Lire l'article : ${post.title}`}
                    >
                      Lire l&apos;article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
