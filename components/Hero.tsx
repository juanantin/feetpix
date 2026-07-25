"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { tokenConfig } from "@/config/token";
import PixelButton from "./PixelButton";
import Sparkle from "./Sparkle";

const SPARKLES = [
  { top: "10%", left: "6%", size: "h-3 w-3" },
  { top: "22%", left: "42%", size: "h-2 w-2" },
  { top: "8%", left: "78%", size: "h-3 w-3" },
  { top: "60%", left: "3%", size: "h-2 w-2" },
  { top: "72%", left: "48%", size: "h-2 w-2" },
  { top: "45%", left: "92%", size: "h-3 w-3" },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // React's `muted` JSX prop doesn't reliably become the real HTML
    // attribute in server-rendered markup, and browsers check that
    // attribute before hydration JS runs to decide whether autoplay is
    // allowed — so autoplay can silently fail without this.
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <section id="home" className="hero-glow relative overflow-hidden border-b-2 border-feet-blue">
      {SPARKLES.map((s, i) => (
        <Sparkle key={i} className={`pixel-star pointer-events-none absolute ${s.size}`} style={{ top: s.top, left: s.left }} />
      ))}

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
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
          <div className="w-full max-w-md border-2 border-feet-blue bg-feet-navy p-2 shadow-[6px_6px_0_0_rgba(6,10,24,0.6)]">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="aspect-square w-full object-cover"
            >
              <source src="/videos/feetpix-hero.webm" type="video/webm" />
              <source src="/videos/feetpix-hero.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
