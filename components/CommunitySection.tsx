import Image from "next/image";
import { Users } from "lucide-react";
import { tokenConfig } from "@/config/token";
import PixelButton from "./PixelButton";
import XLogo from "./XLogo";
import Starfield from "./Starfield";

export default function CommunitySection() {
  return (
    <section className="relative overflow-hidden border-b-2 border-feet-navy bg-feet-navy">
      <Starfield count={7} seed={5} />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 md:py-20">
        <Image src="/images/mascot-animated.gif" alt="" width={80} height={80} className="h-20 w-auto object-contain" unoptimized />
        <h2 className="pixel-heading text-xl text-feet-offwhite sm:text-2xl">
          Join the FEETPIX Movement
        </h2>
        <p className="max-w-md text-feet-skylight">
          Be part of the next chapter.
          <br />
          The floor is ours.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <PixelButton as="a" href={tokenConfig.twitterUrl} variant="social" target="_blank" rel="noopener noreferrer">
            <XLogo /> Follow on X
          </PixelButton>
          <PixelButton as="a" href={tokenConfig.communityUrl} variant="social" target="_blank" rel="noopener noreferrer">
            <Users size={14} /> X Community
          </PixelButton>
          <PixelButton as="a" href={tokenConfig.openseaUrl} variant="primary" target="_blank" rel="noopener noreferrer">
            View OpenSea
          </PixelButton>
        </div>
      </div>
    </section>
  );
}
