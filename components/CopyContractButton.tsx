"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import PixelButton from "./PixelButton";
import { tokenConfig } from "@/config/token";

export default function CopyContractButton() {
  const [copied, setCopied] = useState(false);
  const hasContract = Boolean(tokenConfig.contractAddress);

  async function handleCopy() {
    if (!hasContract) return;
    try {
      await navigator.clipboard.writeText(tokenConfig.contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard API unavailable — nothing to fall back to safely
    }
  }

  return (
    <div className="relative inline-block">
      <PixelButton
        type="button"
        size="sm"
        variant="secondary"
        onClick={handleCopy}
        disabled={!hasContract}
        aria-label={hasContract ? "Copy contract address" : "Contract address not yet available"}
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
        {copied ? "Copied" : "Copy Contract"}
      </PixelButton>

      <span
        role="status"
        aria-live="polite"
        className={`pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap border-2 border-feet-navy bg-feet-navy px-2 py-1 font-pixel text-[8px] uppercase text-feet-offwhite transition-opacity duration-150 ${
          copied ? "opacity-100" : "opacity-0"
        }`}
      >
        Copied CA
      </span>
    </div>
  );
}
