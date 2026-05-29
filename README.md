# Dr. Elara Voss — Astro Website

A production-ready Astro website converted from a single HTML file into a
scalable, component-based architecture.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
src/
├── data/
│   └── site.ts          ← Single source of truth for ALL content
│
├── layouts/
│   └── BaseLayout.astro ← HTML shell, <head>, fonts, global CSS
│
├── components/
│   ├── Nav.astro         ← Fixed navigation + mobile hamburger
│   ├── Hero.astro        ← Hero section with doctor card + stats
│   ├── Services.astro    ← 6-card services grid
│   ├── About.astro       ← 2-column about + credentials
│   ├── Testimonials.astro← 3-card testimonials
│   ├── Booking.astro     ← Consulting hours + appointment form
│   └── Footer.astro      ← 3-column footer + copyright bar
│
├── pages/
│   └── index.astro       ← Composes all components into one page
│
└── styles/
    └── global.css        ← CSS variables, resets, shared utilities
```

---

## ✏️ Updating Content

**All site content lives in `src/data/site.ts`.**
You never need to touch a component to change text, services, hours, or contact info.

| What to change | Where |
|---|---|
| Doctor name, tagline, description | `siteConfig` |
| Phone, email, address | `contact` |
| Consulting hours | `hours` array |
| Hero stats (years, patients, rating) | `stats` array |
| Services | `services` array |
| About bio & credentials | `about` object |
| Patient testimonials | `testimonials` array |
| Booking form time slots | `timeSlots` array |
| Nav links | `navLinks` array |

---

## 🌐 Deploying to Vercel

### Static (recommended for this site)
```bash
# No adapter needed — Astro builds static HTML by default
npm run build
# Deploy the dist/ folder to Vercel
```

### SSR (if you add a contact form backend, CMS, etc.)
```bash
npm install @astrojs/vercel
```

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
});
```

---

## 📈 Scaling Guide

### Add a new page (e.g. /services, /blog)
1. Create `src/pages/services.astro`
2. Import `BaseLayout`, `Nav`, `Footer`
3. Add your content between them

### Add a blog / news section
```bash
npm install @astrojs/mdx
```
- Enable MDX in `astro.config.mjs`
- Create `src/pages/blog/[slug].astro` for dynamic routes
- Write posts as `.mdx` files in `src/content/blog/`

### Connect a real form backend
Replace the `submitForm` JS in `Booking.astro` with a `fetch` call to:
- **Formspree** (no backend needed): `https://formspree.io/f/{your-id}`
- **Supabase** (if already using it for GigSA): insert into an `appointments` table
- **Resend / SendGrid**: send confirmation emails

### Add a CMS (for the clinic to edit content without code)
- **Sanity** or **Contentful**: replace `src/data/site.ts` with API fetches
- **Astro Content Collections**: manage content as type-safe Markdown/YAML

### Add React components (interactive widgets, booking calendar, etc.)
```bash
npm install @astrojs/react react react-dom
```
```js
// astro.config.mjs
import react from '@astrojs/react';
export default defineConfig({ integrations: [react()] });
```
Then use `.tsx` files and import them into `.astro` pages.

---

## 🔑 Environment Variables

Create a `.env` file at the project root for secrets:
```
# Example — add your own keys here
PUBLIC_FORMSPREE_ID=xxxx
PUBLIC_GOOGLE_MAPS_KEY=xxxx
```

Access in components: `import.meta.env.PUBLIC_FORMSPREE_ID`

---

## ♿ Accessibility

- Semantic HTML throughout (`<nav>`, `<main>`, `<section>`, `<footer>`)
- ARIA labels on the hamburger button (`aria-expanded`, `aria-label`)
- `aria-live="polite"` on the booking success message
- `autocomplete` attributes on all form fields
- All interactive elements are keyboard-navigable

---

## 📦 Adding Integrations

```bash
# Tailwind CSS
npx astro add tailwind

# React
npx astro add react

# Vercel adapter
npx astro add vercel

# Sitemap (good for SEO)
npx astro add sitemap

# Image optimisation
npx astro add image
```
