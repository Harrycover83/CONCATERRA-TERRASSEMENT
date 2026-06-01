/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://concaterra-terrassement.fr",
  generateRobotsTxt: true,
  exclude: ["/mentions-legales"],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  transform: async (config, path) => {
    const priorities = {
      "/": 1.0,
      "/services": 0.9,
      "/contact": 0.9,
      "/realisations": 0.8,
      "/blog": 0.8,
    }
    const isServicePage = path.startsWith("/services/")
    const isLocalPage = path.match(/\/terrassement-[a-z-]+$/)
    const isBlogPost = path.startsWith("/blog/")
    const priority = priorities[path]
      ?? (isServicePage ? 0.85 : null)
      ?? (isLocalPage ? 0.8 : null)
      ?? (isBlogPost ? 0.7 : null)
      ?? 0.6
    return {
      loc: path,
      changefreq: path === "/" ? "weekly" : "monthly",
      priority,
      lastmod: new Date().toISOString(),
    }
  },
}
