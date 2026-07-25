"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";
import { tokenConfig } from "@/config/token";
import PixelButton from "./PixelButton";
import Starfield from "./Starfield";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [needsTapToPlay, setNeedsTapToPlay] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // React's `muted` JSX prop doesn't reliably become the real HTML
    // attribute in server-rendered markup, and browsers check that
    // attribute before hydration JS runs to decide whether autoplay is
    // allowed — so autoplay can silently fail without this.
    video.muted = true;
    video.play().catch(() => {
      // Autoplay can be blocked outright regardless of attributes — e.g.
      // iOS refuses ANY autoplay (even muted) under Low Power Mode, and
      // some Android browsers block it under data-saver. No web code can
      // override that, so fall back to a visible tap-to-play affordance
      // instead of leaving a frozen/blank video.
      setNeedsTapToPlay(true);
    });
  }, []);

  function handleTapToPlay() {
    const video = videoRef.current;
    if (!video) return;
    video.play().then(() => setNeedsTapToPlay(false)).catch(() => {});
  }

  return (
    <section id="home" className="hero-glow relative overflow-hidden border-b-2 border-feet-blue">
      <Starfield count={14} seed={1} />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div>
          <p className="font-pixel text-[10px] uppercase tracking-widest text-feet-blue">
            The legend returns
          </p>

          <h1 className="pixel-heading pixel-title-3d mt-4 text-4xl sm:text-5xl md:text-6xl">
            $FEETPIX
          </h1>

          <p className="mt-5 max-w-md text-base text-feet-skylight sm:text-lg">
            The official token of the legendary{" "}
            <strong className="text-feet-blue">FEETPIX NFT Collection</strong>.
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

          <div className="mt-7 inline-flex items-center gap-2 border-2 border-feet-green bg-feet-navy px-3 py-2 font-pixel text-[9px] uppercase text-feet-green">
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
          <div className="relative w-full max-w-md border-2 border-feet-blue bg-feet-navy p-2 shadow-[6px_6px_0_0_rgba(6,10,24,0.6)]">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/videos/feetpix-poster.jpg"
              className="aspect-square w-full object-cover"
            >
              <source src="/videos/feetpix-hero.webm" type="video/webm" />
              <source src="/videos/feetpix-hero.mp4" type="video/mp4" />
            </video>

            {needsTapToPlay && (
              <button
                type="button"
                onClick={handleTapToPlay}
                aria-label="Play video"
                className="focus-pixel absolute inset-2 flex items-center justify-center bg-feet-navy/40"
              >
                <span className="flex h-16 w-16 items-center justify-center border-2 border-feet-offwhite bg-feet-navy/80 text-feet-offwhite shadow-[4px_4px_0_0_#060A18]">
                  <Play size={28} fill="currentColor" />
                </span>
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
