# Haute Looks

Single-page React and TypeScript website for Haute Looks salon in Karaikudi.

## Architecture

- **Frontend:** React 19, TypeScript, Vite 8, Tailwind CSS.
- **Routes:** One page with in-page section links; there is no client-side router.
- **Booking:** The browser validates the request and opens a prefilled WhatsApp link. The visitor must press Send in WhatsApp, and the salon must confirm availability. The site does not store appointment records.
- **Backend/database/authentication:** None are configured. There are no API routes or database integration in this project.
- **Environment variables:** None are currently required; see `.env.example`. Do not put private credentials in `VITE_*` variables; Vite exposes those values in the browser bundle.

## Requirements

- Node.js `^20.19.0` or `>=22.12.0`
- npm 10+

## Install and run

```bash
npm ci
npm run dev
```

Vite listens on port `5173` by default and is configured to be reachable from the local network.

## Build and preview

```bash
npm run build
npm run preview
```

The production output is `dist/`. `npm run build` runs the TypeScript compiler before generating the Vite bundle.

## Static deployment

Deploy this as a static site; no backend service or database is needed for the current functionality.

| Setting | Value |
| --- | --- |
| Build command | `npm ci && npm run build` |
| Publish/output directory | `dist` |
| Node.js | `^20.19.0` or `>=22.12.0` |
| Environment variables | None |

These settings work with static hosts such as Netlify, Vercel, Cloudflare Pages, or any web server that serves the contents of `dist/`. The project has no nested application routes to rewrite. If client-side routes are added later, configure the selected host to serve `index.html` for those routes.

### Netlify (recommended)

1. Push the project to a Git provider and import the repository in Netlify.
2. Set the build command to `npm ci && npm run build`.
3. Set the publish directory to `dist`.
4. Set `NODE_VERSION` to `22.14.0` (or another supported Node 22 release).
5. Leave environment variables unset; this project has none.
6. Deploy. No backend, database, functions, or SPA rewrite rules are required.

### Vercel

Import the repository as a Vite project. Set the install command to `npm ci`, build command to `npm run build`, and output directory to `dist`. Select Node.js 22.x. No environment variables or rewrite rules are required for the current single-page, hash-anchor navigation.

### Cloudflare Pages

Create a Pages project from the repository. Set the build command to `npm ci && npm run build`, build output directory to `dist`, and build environment `NODE_VERSION` to `22.14.0`. No environment variables or additional functions are required.

## Validation

```bash
npm ci
npm run build
npm audit
npx tsc --noEmit --noUnusedLocals --noUnusedParameters
npm run preview
```

There is no unit or integration test runner configured. Booking requests are not sent to or persisted by this website; the WhatsApp handoff requires a user action and external WhatsApp access.

## Project layout

```text
.
├── index.html
├── public/                 # Static images, icons, and favicon
├── src/
│   ├── App.tsx             # Single-page section composition and booking state
│   ├── components/         # Page sections and interactive UI
│   ├── data/salonData.ts   # Salon details and service/gallery content
│   ├── index.css
│   ├── main.tsx            # React entry point
│   └── types/
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```
