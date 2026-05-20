# Concaterra Terrassement — Site vitrine

Site vitrine professionnel pour **CONCATERRA TERRASSEMENT SARL**, entreprise de terrassement et travaux publics basée à Gonfaron (83590), Var, PACA.

## Stack technique

- **Framework** : Next.js 14 (App Router, SSG)
- **Langage** : TypeScript strict
- **Style** : Tailwind CSS v3 + shadcn/ui
- **Animations** : Framer Motion
- **Email** : @emailjs/browser (zero backend)
- **Lightbox** : yet-another-react-lightbox
- **Sitemap** : next-sitemap
- **Déploiement** : Vercel

## Structure des pages

```
/                          → Homepage
/services                  → Hub services
/services/terrassement-general
/services/vrd-voirie-reseaux
/services/enrochement
/services/amenagement-paysager
/services/concassage-recyclage
/services/transport-materiaux
/realisations              → Galerie avec lightbox et filtres
/contact                   → Formulaire devis EmailJS
/blog                      → Liste des articles
/blog/[slug]               → Article individuel
/mentions-legales          → Mentions légales
/terrassement-toulon       → Page SEO locale
/terrassement-draguignan   → Page SEO locale
/terrassement-brignoles    → Page SEO locale
/terrassement-hyeres       → Page SEO locale
/terrassement-le-luc       → Page SEO locale
```

## Variables d'environnement

Créer un fichier `.env.local` à la racine :

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Configuration EmailJS
1. Créer un compte sur [emailjs.com](https://www.emailjs.com/)
2. Ajouter un service email (Gmail, SMTP, etc.)
3. Créer un template avec les variables : `{{nom}}`, `{{prenom}}`, `{{telephone}}`, `{{email}}`, `{{prestation}}`, `{{commune}}`, `{{description}}`
4. Copier les IDs dans `.env.local`

## Développement local

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # Build + génération sitemap
npm run start  # Prévisualiser le build
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
