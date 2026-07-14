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

No real project artwork (logo, hero art, icons) was supplied for this build, so all pixel art is generated placeholder art rather than downloaded/unrelated images, per the brief:

- `lib/pixel-art.ts` — character-grid pixel art data (feet pair, single foot, coin) rendered at runtime by `components/PixelArt.tsx` as crisp scalable SVG. No PNG files to swap — edit the grid strings directly, or replace usages of `PixelArt`/`FeetIcon`/`CoinIcon` with `next/image` pointed at real artwork once you have it (suggested paths: `public/images/feetpix-hero.png`, `feetpix-logo.png`, `pixel-coin.png`).
- `components/PixelIcons.tsx` — chart and trophy feature icons, hand-drawn as inline SVG.
- `components/OriginsSection.tsx` — the "collection preview" gallery reuses the single-foot art recolored per tile (Classic/Ocean/Gold/Mint) as a stand-in for real NFT trait renders. Swap in actual collection images when available.
- `public/images/social-preview.svg` — placeholder Open Graph image. Replace with real artwork for social sharing.
- `app/icon.svg` — placeholder favicon.

## Structure

```
app/            layout.tsx (fonts, SEO/OG metadata), page.tsx (section order), globals.css (theme)
components/     Navbar, Hero, FeatureGrid, OriginsSection, TokenInfo, CopyContractButton,
                CommunitySection, FAQ, Footer, PixelButton, PixelArt, PixelIcons, XLogo
config/         token.ts, site.ts — all editable copy/links/data
lib/            pixel-art.ts — placeholder pixel art grid data
```

## Links

- Collection: https://opensea.io/collection/feetpixwtf
- X: https://x.com/FeetLabsHQ
