"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X as CloseIcon } from "lucide-react";
import { siteConfig } from "@/config/site";
import { tokenConfig } from "@/config/token";
import PixelButton from "./PixelButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-feet-navy bg-feet-skylight/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#home" className="flex items-center gap-2 focus-pixel" onClick={() => setOpen(false)}>
          <Image src="/images/feet-pair.png" alt="FEETPIX" width={36} height={36} className="h-9 w-auto shrink-0 object-contain" priority unoptimized />
          <span className="pixel-heading text-[11px] text-feet-navy sm:text-sm">{siteConfig.name}</span>
        </a>

        <nav className="hidden items-center gap-7 font-pixel text-[10px] uppercase text-feet-navyblue md:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-pixel relative py-1 transition-colors hover:text-feet-navy after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-0 after:bg-feet-orange after:transition-[width] after:duration-150 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <PixelButton
            as="a"
            href={tokenConfig.buyUrl || "#token"}
            size="sm"
            variant="primary"
            {...(tokenConfig.buyUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            Buy $FEETPIX
          </PixelButton>
        </div>

        <button
          type="button"
          className="focus-pixel border-2 border-feet-navy bg-feet-offwhite p-2 text-feet-navy md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <nav className="border-t-2 border-feet-navy bg-feet-skylight px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-4 font-pixel text-[11px] uppercase text-feet-navyblue">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="focus-pixel block" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5">
            <PixelButton
              as="a"
              href={tokenConfig.buyUrl || "#token"}
              size="sm"
              variant="primary"
              className="w-full"
              onClick={() => setOpen(false)}
              {...(tokenConfig.buyUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              Buy $FEETPIX
            </PixelButton>
          </div>
        </nav>
      )}
    </header>
  );
}
