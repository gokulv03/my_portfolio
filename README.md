# Gokul Vemulapalli — Portfolio

Personal portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.
Brutalist editorial design with a warm off-white palette, heavy grotesk + mono type, and a
signal-vermilion accent. Migrated from a Vite + React (JSX) setup.

## Tech stack

- [Next.js 15](https://nextjs.org/) — App Router, static prerendering
- TypeScript
- Tailwind CSS 3 (design tokens in [`src/app/tokens.css`](src/app/tokens.css))
- [Framer Motion](https://www.framer.com/motion/) for scroll/entry animation
- [lucide-react](https://lucide.dev/) icons

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:3000)
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint (next/core-web-vitals)
```

## Project structure

```
src/
  app/
    layout.tsx       # root layout + metadata
    page.tsx         # home page (composes the sections)
    globals.css      # global styles + Tailwind layers
    tokens.css       # portable design tokens (CSS custom properties)
  components/         # section components (Navbar, Hero, About, ...)
public/              # static assets (images, icons)
```

> Note: the `src/components/*.jsx` atmospheric components (3D background, particles,
> custom cursor, etc.) are unused reference code kept from the original design and are
> excluded from linting. They can be removed if no longer needed.
