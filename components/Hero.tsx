"use client";

import { motion, useReducedMotion } from "framer-motion";
import { tokenConfig } from "@/config/token";
import PixelButton from "./PixelButton";
import PixelArt from "./PixelArt";
import { CoinIcon } from "./PixelIcons";
import { feetPairGrid, palette } from "@/lib/pixel-art";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden border-b-2 border-feet-navy bg-feet-sky pixel-grid-bg">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div>
          <p className="font-pixel text-[10px] uppercase tracking-widest text-feet-navyblue">
            The legend returns
          </p>

          <h1 className="pixel-heading mt-4 text-4xl text-feet-navy sm:text-5xl md:text-6xl">
            $FEETPIX
          </h1>

          <p className="mt-5 max-w-md text-base text-feet-navyblue sm:text-lg">
            The official token relaunch of the legendary{" "}
            <strong className="text-feet-navy">FEETPIX NFT Collection</strong>.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <PixelButton
              as="a"
              href={tokenConfig.buyUrl || "#token"}
              variant="primary"
              {...(tokenConfig.buyUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              Buy $FEETPIX
            </PixelButton>
            <PixelButton as="a" href={tokenConfig.openseaUrl} variant="secondary" target="_blank" rel="noopener noreferrer">
              View NFT Collection
            </PixelButton>
          </div>

          <div className="mt-7 inline-flex items-center gap-2 border-2 border-feet-navy bg-feet-offwhite px-3 py-2 font-pixel text-[9px] uppercase text-feet-navy">
            <span className="h-2.5 w-2.5 shrink-0 bg-feet-green" aria-hidden="true" />
            Live on {tokenConfig.chain}
          </div>
        </div>

        <motion.div
          className="relative flex justify-center"
          initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <PixelArt
            grid={feetPairGrid}
            palette={palette.feet}
            title="Pixel-art illustration of the FEETPIX feet"
            className="w-full max-w-md drop-shadow-[6px_6px_0_rgba(16,27,61,0.25)]"
          />

          <motion.div
            className="absolute -left-2 top-6 w-12 sm:w-14"
            animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={reduceMotion ? undefined : { duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <CoinIcon className="w-full drop-shadow-[3px_3px_0_rgba(16,27,61,0.25)]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
