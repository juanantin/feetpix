import Image from "next/image";
import { tokenConfig } from "@/config/token";
import { siteConfig } from "@/config/site";
import XLogo from "./XLogo";
import Starfield from "./Starfield";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-feet-navy text-feet-skylight">
      <Starfield count={3} seed={7} />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <a href="#home" className="focus-pixel flex items-center gap-2">
          <Image src="/images/mascot.png" alt="" width={28} height={28} className="h-7 w-auto object-contain" unoptimized />
          <span className="pixel-heading text-[10px] text-feet-offwhite">{siteConfig.name}</span>
        </a>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 font-pixel text-[9px] uppercase">
          <a href={tokenConfig.openseaUrl} target="_blank" rel="noopener noreferrer" className="focus-pixel hover:text-feet-offwhite">
            OpenSea
          </a>
          <a href={tokenConfig.twitterUrl} target="_blank" rel="noopener noreferrer" className="focus-pixel inline-flex items-center gap-1.5 hover:text-feet-offwhite">
            <XLogo /> X
          </a>
          <a href={tokenConfig.communityUrl} target="_blank" rel="noopener noreferrer" className="focus-pixel hover:text-feet-offwhite">
            X Community
          </a>
          <span>Contract: {tokenConfig.contractAddress || "Coming soon"}</span>
        </nav>
      </div>
    </footer>
  );
}
