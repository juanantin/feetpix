import { Send } from "lucide-react";
import { tokenConfig } from "@/config/token";
import PixelButton from "./PixelButton";
import XLogo from "./XLogo";
import PixelArt from "./PixelArt";
import { feetPairGrid, palette } from "@/lib/pixel-art";

export default function CommunitySection() {
  return (
    <section className="border-b-2 border-feet-navy bg-feet-navy">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 md:py-20">
        <PixelArt grid={feetPairGrid} palette={palette.feet} title="FEETPIX feet" className="h-20 w-auto" />
        <h2 className="pixel-heading text-xl text-feet-offwhite sm:text-2xl">
          Join the FEETPIX Movement
        </h2>
        <p className="max-w-md text-feet-skylight">
          Be part of the next chapter.
          <br />
          The floor is ours.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          {tokenConfig.telegramUrl ? (
            <PixelButton as="a" href={tokenConfig.telegramUrl} variant="social" target="_blank" rel="noopener noreferrer">
              <Send size={14} /> Join Telegram
            </PixelButton>
          ) : (
            <PixelButton type="button" variant="social" disabled aria-label="Telegram not yet available">
              <Send size={14} /> Join Telegram
            </PixelButton>
          )}
          <PixelButton as="a" href={tokenConfig.twitterUrl} variant="social" target="_blank" rel="noopener noreferrer">
            <XLogo /> Follow on X
          </PixelButton>
          <PixelButton as="a" href={tokenConfig.openseaUrl} variant="primary" target="_blank" rel="noopener noreferrer">
            View OpenSea
          </PixelButton>
        </div>
      </div>
    </section>
  );
}
