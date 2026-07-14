# $FEETPIX

Retro pixel-art landing page for $FEETPIX, the token relaunch of the FEETPIX NFT collection on Robinhood Chain.

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion + Lucide icons.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. `npm run build` produces the production build; `npm run lint` runs ESLint.

## Where to edit things

All editable project data lives in two files:

- **`config/token.ts`** — token name, ticker, chain, supply, and every external link (buy, explorer, chart, OpenSea, X, Telegram). Fields default to `""` when not yet available; the UI automatically shows a disabled/"coming soon" state for anything blank (see `TokenInfo.tsx`, `CommunitySection.tsx`, `Navbar.tsx`).
  - **Contract address**: set `contractAddress` once the token deploys. Until then it reads "Coming soon" and the copy button stays disabled.
  - **Buy link**: `buyUrl` — until set, the "Buy $FEETPIX" buttons scroll to the Token Info panel instead of linking out, so the site never implies the token is tradable before it is.
- **`config/site.ts`** — nav links, the four feature-strip entries, and the FAQ question/answer array.

## Image assets

Real project artwork is in place under `public/images/`:

- `feet-pair.png` — the feet illustration, used as the nav logo, footer logo, community-section art, the "Legendary Origins" feature icon, and the source for the favicon (`app/icon.png`).
- `trophy.png`, `coin.png`, `chart.png` — the other three feature-strip icons.
- `social-preview.svg` — still a placeholder Open Graph image; replace with real artwork for social sharing if desired.

All four PNGs originally had opaque backgrounds (a gray vignette on three of them, plain white on the feet image) rather than true alpha transparency — they were cut out with a saturation-based matte (see scratch scripts used during development) before being trimmed and added here. They're rendered via `next/image` with `unoptimized` set, since Next's built-in image optimizer was flattening their transparency onto white during resize.

- `public/videos/feetpix-hero.mp4` / `.webm` — the hero video, framed in a pixel-bordered card in `Hero.tsx`.
- `app/globals.css` (`.pixel-title-3d`) — the "$FEETPIX" hero heading is styled with a CSS navy-outline + blue-drop-shadow bevel to approximate a pixel wordmark logo, rather than an image file.

## Structure

```
app/            layout.tsx (fonts, SEO/OG metadata), page.tsx (section order), globals.css (theme),
                icon.png (favicon)
components/     Navbar, Hero, FeatureGrid, OriginsSection, TokenInfo, CopyContractButton,
                CommunitySection, FAQ, Footer, PixelButton, XLogo
config/         token.ts, site.ts — all editable copy/links/data
public/images/  feet-pair.png, trophy.png, coin.png, chart.png, social-preview.svg
public/videos/  hero video (mp4 + webm)
```

## Links

- Collection: https://opensea.io/collection/feetpixwtf
- X: https://x.com/FeetLabsHQ
