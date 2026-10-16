# Inversify digital studio site

A plain-local, responsive agency-site redesign built with Next.js and React. The homepage has been re-composed section by section, with distinct editorial layouts across Services, Work, Journal, Contact, and dynamic detail routes. The visual system keeps Inversify’s midnight, cyan, and violet identity while giving its pages a clearer portfolio hierarchy, larger typography, scroll reveals, and deliberate hover motion. It does not initialize Manus-managed services or publish the site.

## Run locally

```bash
npm ci
npm run dev
```

Open `http://localhost:8080`. For a production build, run `npm run build`, then `npm run start`.

## Design and behavior

- Typography: expressive **Clash Display** headlines, readable **Satoshi** body copy, locally served **Geist Variable** interface text, and **IBM Plex Mono** metadata. Clash Display and Satoshi load from the official Fontshare CSS API; Geist is packaged through `@fontsource-variable/geist`. The Fontshare font binaries are not redistributed in this ZIP.
- Motion respects `prefers-reduced-motion`; responsive layouts cover desktop, tablet, and phone widths.
- The Work, Services, and Journal image grids use soft, varied corner radii rather than uniform sharp cards.
- The favicon is the solid-purple circle in `public/favicon.svg`.
- Home/Contact inquiries and newsletter requests prepare an email draft to `hello@inversify.lk`; nothing is sent or subscribed automatically. Visitors review the draft and press Send in their email app.
- The route inventory lives in `public/manus-routes.json`.

## Optional expressive font files

The CSS includes **Alro Bold** and **Pink Crab** as optional first-choice display faces, with loaded **Clash Display**/**Satoshi** fallbacks. Their actual font binaries were not supplied, so they are not bundled or misrepresented as loaded. If you own licensed `.woff2` files, see [`public/fonts/README.md`](public/fonts/README.md) for the small `@font-face` setup. Clash Display and Satoshi currently load from Fontshare; for offline use, provide licensed local files and update the CSS accordingly.
