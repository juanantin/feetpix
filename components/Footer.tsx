import { tokenConfig } from "@/config/token";
import { siteConfig } from "@/config/site";
import { FeetIcon } from "./PixelIcons";
import XLogo from "./XLogo";

export default function Footer() {
  return (
    <footer className="bg-feet-navy text-feet-skylight">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <a href="#home" className="focus-pixel flex items-center gap-2">
          <FeetIcon className="h-7 w-7" />
          <span className="pixel-heading text-[10px] text-feet-offwhite">{siteConfig.name}</span>
        </a>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 font-pixel text-[9px] uppercase">
          <a href={tokenConfig.openseaUrl} target="_blank" rel="noopener noreferrer" className="focus-pixel hover:text-feet-offwhite">
            OpenSea
          </a>
          <a href={tokenConfig.twitterUrl} target="_blank" rel="noopener noreferrer" className="focus-pixel inline-flex items-center gap-1.5 hover:text-feet-offwhite">
            <XLogo /> X
          </a>
          {tokenConfig.telegramUrl && (
            <a href={tokenConfig.telegramUrl} target="_blank" rel="noopener noreferrer" className="focus-pixel hover:text-feet-offwhite">
              Telegram
            </a>
          )}
          <span>Contract: {tokenConfig.contractAddress || "Coming soon"}</span>
        </nav>
      </div>

      <div className="border-t border-feet-navyblue">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-[10px] uppercase tracking-wide text-feet-skylight/70 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>© {new Date().getFullYear()} $FEETPIX. All rights reserved.</span>
          <span>Built on {tokenConfig.chain}</span>
        </div>
      </div>
    </footer>
  );
}
