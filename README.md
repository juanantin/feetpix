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
  - **Live NFT gallery**: `openseaApiKey` — set this to show real NFTs from the collection (`openseaCollectionSlug`) in the Origins section instead of the placeholder trait tiles. Get a free key at https://docs.opensea.io/reference/api-keys — this is required for *any* client (this site or anyone else's) to read OpenSea's API, it's their policy, not something specific to this deployment. See `components/NftGallery.tsx`.
- **`config/site.ts`** — nav links, the four feature-strip entries, and the FAQ question/answer array.

## Image assets

Real project artwork (logo, feet illustration, coin, chart/trophy icons) hasn't made it into the repo as usable files yet — it's only been shared as inline chat content, which doesn't produce a file to commit. Until real files are attached, this is what's in place:

- `public/videos/feetpix-hero.mp4` / `.webm` — the real hero video, framed in a pixel-bordered card in `Hero.tsx`.
- `lib/pixel-art.ts` — character-grid pixel art data (feet pair, single foot, coin) rendered at runtime by `components/PixelArt.tsx` as crisp scalable SVG. No PNG files to swap — edit the grid strings directly, or replace usages of `PixelArt`/`FeetIcon`/`CoinIcon` with `next/image` pointed at real artwork once you have it (suggested paths: `public/images/feetpix-logo.png`, `pixel-coin.png`).
- `app/globals.css` (`.pixel-title-3d`) — the "$FEETPIX" hero heading is styled with a CSS navy-outline + blue-drop-shadow bevel to approximate a pixel wordmark logo. Swap the `<h1>` in `Hero.tsx` for a `next/image` once you have the real logo file.
- `components/PixelIcons.tsx` — chart and trophy feature icons, hand-drawn as inline SVG with layered shading.
- `components/NftGallery.tsx` — fetches real NFTs from OpenSea once `openseaApiKey` is set (see above); otherwise shows the single-foot art recolored per tile (Classic/Ocean/Gold/Mint) as a placeholder.
- `public/images/social-preview.svg` — placeholder Open Graph image. Replace with real artwork for social sharing.
- `app/icon.svg` — placeholder favicon.

## Structure

```
app/            layout.tsx (fonts, SEO/OG metadata), page.tsx (section order), globals.css (theme)
components/     Navbar, Hero, FeatureGrid, OriginsSection, NftGallery, TokenInfo,
                CopyContractButton, CommunitySection, FAQ, Footer, PixelButton, PixelArt,
                PixelIcons, XLogo
config/         token.ts, site.ts — all editable copy/links/data
lib/            pixel-art.ts — placeholder pixel art grid data
public/videos/  hero video (mp4 + webm)
```

## Links

- Collection: https://opensea.io/collection/feetpixwtf
- X: https://x.com/FeetLabsHQ
