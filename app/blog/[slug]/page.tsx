import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { marked } from "marked"
import { Breadcrumb } from "@/components/common/Breadcrumb"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BLOG_POSTS } from "@/lib/blog-data"
import { COMPANY } from "@/lib/constants"

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug)
  if (!post) return {}

  return {
    title: `${post.title} — Blog Concaterra Terrassement`,
    description: post.excerpt,
    keywords: post.tags,
    alternates: {
      canonical: `${COMPANY.siteUrl}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${COMPANY.siteUrl}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  }
}

export default async function BlogArticlePage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const htmlContent = await marked.parse(post.content)
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug)

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: COMPANY.name,
      url: COMPANY.siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      url: COMPANY.siteUrl,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      <div className="pt-16 md:pt-20">
        {/* Hero article */}
        <section className="bg-[#1C2B3A] py-16 text-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 3).map((tag) => (
                <Badge
                  key={tag}
                  className="bg-[#D97706] text-white border-none text-xs"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="font-barlow-condensed font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-gray-300">
              Publié le{" "}
              {new Date(post.date).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}{" "}
              · {post.readingTime} · Par {COMPANY.name}
            </p>
          </div>
        </section>

        {/* Corps article */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Article */}
              <article
                className="lg:col-span-2 prose prose-slate max-w-none prose-headings:font-barlow-condensed prose-headings:uppercase prose-h2:text-2xl prose-h3:text-xl prose-a:text-[#D97706]"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />

              {/* Sidebar */}
              <aside className="space-y-6">
                <div className="bg-[#D97706] rounded-2xl p-6 text-white">
                  <p className="font-barlow-condensed font-bold text-xl uppercase mb-2">
                    Besoin d&apos;un devis ?
                  </p>
                  <p className="text-white/90 text-sm mb-4">
                    Concaterra Terrassement intervient dans le Var (83).
                    Devis gratuit sous 24h.
                  </p>
                  <Button
                    asChild
                    className="bg-white text-[#D97706] hover:bg-gray-100 font-bold w-full"
                  >
                    <Link href="/contact">Demander un devis</Link>
                  </Button>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <p className="font-semibold text-[#1C2B3A] mb-3">
                    Autres articles
                  </p>
                  <ul className="space-y-3">
                    {otherPosts.map((other) => (
                      <li key={other.slug}>
                        <Link
                          href={`/blog/${other.slug}`}
                          className="text-sm text-gray-700 hover:text-[#D97706] transition-colors line-clamp-2"
                        >
                          {other.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
