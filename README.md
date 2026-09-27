# Developer Portfolio (React + Three.js + MUI)

A minimal, premium 3D developer portfolio built with React, React Three Fiber,
drei, and Material UI, scaffolded for Vite + TypeScript.

## Project structure

```
src/
├── components/
│   ├── Navbar/Navbar.tsx
│   ├── Hero/Hero.tsx
│   ├── About/About.tsx
│   ├── Skills/Skills.tsx
│   ├── Projects/Projects.tsx, ProjectCard.tsx
│   ├── Experience/Experience.tsx
│   ├── Contact/Contact.tsx
│   ├── Footer/Footer.tsx
│   └── 3d/HeroScene.tsx, FloatingObject.tsx
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   └── experience.ts
├── theme/theme.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 1. Install

Requires Node.js 18+.

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Opens at `http://localhost:5173`.

## 3. Customize your info

You don't need to touch component code to update content — everything lives
in a few files:

- **Name, title, intro, button text** — `src/components/Hero/Hero.tsx`
- **About text and stats** — `src/components/About/About.tsx`
- **Skills** — `src/data/skills.ts` (add/remove categories or items)
- **Projects** — `src/data/projects.ts` (add/remove project objects; each
  needs a `githubUrl`, optional `liveUrl`, `tags`, and `accentLetter`)
- **Education / internships / certifications / achievements** —
  `src/data/experience.ts`
- **Contact links (email, LinkedIn, GitHub, location)** —
  `src/components/Contact/Contact.tsx` (`CONTACT_LINKS` array) and
  `src/components/Footer/Footer.tsx`
- **Site title / meta description** — `index.html`
- **Colors, typography, spacing** — `src/theme/theme.ts` (`tokens` object at
  the top controls the whole palette)

The contact form currently shows a success message on valid submit but
doesn't send anywhere — wire `handleSubmit` in `Contact.tsx` to a form
service (e.g. Formspree, Resend, a serverless function) or your own API.

## 4. Build for production

```bash
npm run build
```

Outputs static files to `dist/`.

```bash
npm run preview
```

Serves the production build locally to sanity-check it before deploying.

## 5. Deploy

The output is a static site (`dist/`), so any static host works:

**Vercel**
```bash
npm i -g vercel
vercel
```

**Netlify**
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

**GitHub Pages**
1. `npm run build`
2. Push the contents of `dist/` to a `gh-pages` branch (or use the
   `gh-pages` npm package), and enable Pages on that branch in your repo
   settings.

## Notes on the 3D scene

- The hero object is a single low-poly icosahedron with a distort material —
  cheap to render, no textures to load.
- It auto-rotates continuously and eases toward the pointer position; it
  never fully locks onto the cursor, so it stays calm rather than jittery.
- `dpr` is capped at `[1, 1.75]` in `HeroScene.tsx` to avoid over-rendering
  on high-DPI screens.
- If WebGL isn't available, `HeroScene.tsx` renders a static CSS fallback
  instead of a blank canvas.
