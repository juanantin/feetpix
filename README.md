# $FEETPIX

Retro pixel-art landing page for $FEETPIX, the token of the FEETPIX NFT collection on Robinhood Chain. Dark starry-navy theme with a hooded-feet mascot, per the project's brand mockup.

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion + Lucide icons.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. `npm run build` produces the production build; `npm run lint` runs ESLint.

## Where to edit things

All editable project data lives in two files:

- **`config/token.ts`** — token name, ticker, chain, supply, and every external link (buy, explorer, chart, OpenSea, X, X Community). Fields default to `""` when not yet available; the UI automatically shows a disabled/"coming soon" state for anything blank (see `TokenInfo.tsx`, `CommunitySection.tsx`, `Navbar.tsx`).
  - **Contract address**: set `contractAddress` once the token deploys. Until then it reads "Coming soon" and the copy button stays disabled.
  - **Buy link**: `buyUrl` — until set, the "Buy $FEETPIX" buttons scroll to the Token Info panel instead of linking out, so the site never implies the token is tradable before it is.
- **`config/site.ts`** — nav links, the four feature-strip entries, and the FAQ question/answer array.

## Theme

- **Colors**: defined as CSS variables in `app/globals.css` (`--color-feet-*`). The palette is a dark navy (`feet-navy` / `feet-navyblue`) base with a brighter blue accent (`feet-blue`), used for text, borders, and button shadows throughout — sections alternate between the two dark shades for visual rhythm.
- **`.hero-glow`** — the radial blue glow behind the hero, matching the brand banner.
- **`.pixel-title-3d`** — the "$FEETPIX" heading's white-fill / navy-outline / blue-drop-shadow bevel, approximating the pixel wordmark logo via CSS rather than an image.
- **`components/Sparkle.tsx`** — the small pixel-star decorations scattered across the hero.

## Image assets

Real project artwork lives in `public/images/`:

- `mascot.png` — the hooded-feet character; used as the favicon (`app/icon.png`), nav logo, footer logo, community-section art, and the "Legendary Origins" feature icon.
- `trophy.png`, `coin.png`, `chart.png` — the other three feature-strip icons.
- `social-preview.png` — Open Graph/Twitter card image, built from the real brand banner (letterboxed to the standard 1200×630 ratio).

These PNGs originally had opaque backgrounds (a gray vignette on three, plain white on the mascot) rather than true alpha transparency — they were cut out with a saturation-based matte before being trimmed and added here. They're rendered via `next/image` with `unoptimized` set, since Next's built-in image optimizer was flattening their transparency onto white during resize.

- `public/videos/feetpix-hero.mp4` / `.webm` — the hero video, framed in a pixel-bordered card in `Hero.tsx`.

## Structure

```
app/            layout.tsx (fonts, SEO/OG metadata), page.tsx (section order), globals.css (theme),
                icon.png (favicon)
components/     Navbar, Hero, FeatureGrid, OriginsSection, TokenInfo, CopyContractButton,
                CommunitySection, FAQ, Footer, PixelButton, Sparkle, XLogo
config/         token.ts, site.ts — all editable copy/links/data
public/images/  mascot.png, trophy.png, coin.png, chart.png, social-preview.png
public/videos/  hero video (mp4 + webm)
```

## Links

- Collection: https://opensea.io/collection/feetpixwtf
- X: https://x.com/FeetLabsHQ
