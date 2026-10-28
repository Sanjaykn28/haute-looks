# Haute Looks

Single-page React and TypeScript website for Haute Looks salon in Karaikudi.

## Project Structure

The frontend application is located in the [`haute-looks-website`](haute-looks-website/) directory.

- **Frontend:** React 19, TypeScript, Vite 8, Tailwind CSS.
- **Routes:** One page with in-page section links.
- **Booking:** Client-side validation with prefilled WhatsApp booking links.

## Quick Start

Navigate to the website directory and install dependencies:

```bash
cd haute-looks-website
npm ci
npm run dev
```

For production builds:

```bash
cd haute-looks-website
npm run build
npm run preview
```

## Deployment

Deploy the `haute-looks-website` directory as a static site (Netlify, Vercel, Cloudflare Pages):
- **Base directory / Root directory:** `haute-looks-website`
- **Build command:** `npm ci && npm run build`
- **Publish directory:** `dist` (or `haute-looks-website/dist` depending on host base directory settings)
- **Node version:** `22.x`
