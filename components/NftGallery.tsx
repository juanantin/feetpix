"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { tokenConfig } from "@/config/token";
import PixelArt from "./PixelArt";
import { footSingleGrid } from "@/lib/pixel-art";

const navy = "#101B3D";

// Recolors of the same base silhouette to stand in for real collection
// trait variations until a live feed is configured (see config/token.ts).
const traitVariants = [
  { label: "Classic", palette: { N: navy, P: "#F0B596", H: "#FFD0AD" } },
  { label: "Ocean", palette: { N: navy, P: "#4F9CD3", H: "#8FCCED" } },
  { label: "Gold", palette: { N: navy, P: "#FFD42A", H: "#FFE873" } },
  { label: "Mint", palette: { N: navy, P: "#35C97A", H: "#8de3b3" } },
];

type Nft = { id: string; name: string; image: string; url: string };

export default function NftGallery() {
  const [nfts, setNfts] = useState<Nft[] | null>(null);

  useEffect(() => {
    if (!tokenConfig.openseaApiKey) return;
    let cancelled = false;

    fetch(
      `https://api.opensea.io/api/v2/collection/${tokenConfig.openseaCollectionSlug}/nfts?limit=4`,
      { headers: { accept: "application/json", "x-api-key": tokenConfig.openseaApiKey } }
    )
      .then((res) => {
        if (!res.ok) throw new Error(`OpenSea API ${res.status}`);
        return res.json();
      })
      .then((data: { nfts?: Array<{ identifier: string; name?: string; image_url?: string; opensea_url?: string }> }) => {
        if (cancelled) return;
        const items = (data.nfts ?? [])
          .filter((n) => n.image_url)
          .slice(0, 4)
          .map((n) => ({
            id: n.identifier,
            name: n.name || `#${n.identifier}`,
            image: n.image_url as string,
            url: n.opensea_url || tokenConfig.openseaUrl,
          }));
        if (items.length) setNfts(items);
      })
      .catch(() => {
        // stay on placeholder tiles below
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (nfts) {
    return (
      <>
        <p className="mb-4 font-pixel text-[9px] uppercase text-feet-navyblue">
          Live from OpenSea
        </p>
        <div className="grid grid-cols-2 gap-4">
          {nfts.map((nft) => (
            <a
              key={nft.id}
              href={nft.url}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-pixel block border-2 border-feet-navy bg-feet-offwhite p-2"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={nft.image}
                  alt={nft.name}
                  fill
                  sizes="(max-width: 640px) 45vw, 220px"
                  className="object-cover [image-rendering:pixelated]"
                  unoptimized
                />
              </div>
              <p className="mt-2 truncate text-center font-pixel text-[8px] uppercase text-feet-navy">
                {nft.name}
              </p>
            </a>
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <p className="mb-4 font-pixel text-[9px] uppercase text-feet-navyblue">
        Collection preview — placeholder traits
      </p>
      <div className="grid grid-cols-2 gap-4">
        {traitVariants.map((trait) => (
          <div key={trait.label} className="border-2 border-feet-navy bg-feet-offwhite p-3">
            <PixelArt grid={footSingleGrid} palette={trait.palette} title={`${trait.label} trait preview`} />
            <p className="mt-2 text-center font-pixel text-[8px] uppercase text-feet-navy">{trait.label}</p>
          </div>
        ))}
      </div>
    </>
  );
}
