import { ExternalLink } from "lucide-react";
import { tokenConfig } from "@/config/token";
import PixelButton from "./PixelButton";
import CopyContractButton from "./CopyContractButton";
import Starfield from "./Starfield";

function truncateAddress(address: string) {
  if (address.length <= 12) return address;
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

const fields: Array<{ label: string; value: string }> = [
  { label: "Token Name", value: tokenConfig.name },
  { label: "Ticker", value: tokenConfig.ticker },
  { label: "Chain", value: tokenConfig.chain },
  { label: "Total Supply", value: tokenConfig.totalSupply },
  {
    label: "Contract",
    value: tokenConfig.contractAddress ? truncateAddress(tokenConfig.contractAddress) : "Coming soon",
  },
];

export default function TokenInfo() {
  return (
    <section id="token" className="relative overflow-hidden border-b-2 border-feet-navy bg-feet-navy">
      <Starfield count={6} seed={4} />
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24">
        <p className="text-center font-pixel text-[10px] uppercase tracking-widest text-feet-blue">
          Tokenomics
        </p>
        <h2 className="pixel-heading mt-4 text-center text-xl text-feet-offwhite sm:text-2xl">
          Token Info
        </h2>

        <div className="mt-10 border-2 border-feet-blue bg-feet-navy p-6 shadow-[6px_6px_0_0_#060A18] sm:p-8">
          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {fields.map((field) => (
              <div key={field.label} className="border-2 border-feet-blue bg-feet-navyblue px-4 py-3">
                <dt className="font-pixel text-[8px] uppercase text-feet-skylight">{field.label}</dt>
                <dd className="mt-2 text-sm font-semibold text-feet-offwhite">{field.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <CopyContractButton />
            {tokenConfig.explorerUrl ? (
              <PixelButton as="a" href={tokenConfig.explorerUrl} variant="secondary" size="sm" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={14} /> View on Explorer
              </PixelButton>
            ) : (
              <PixelButton type="button" variant="secondary" size="sm" disabled aria-label="Explorer link not yet available">
                <ExternalLink size={14} /> View on Explorer
              </PixelButton>
            )}
            {tokenConfig.chartUrl ? (
              <PixelButton as="a" href={tokenConfig.chartUrl} variant="secondary" size="sm" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={14} /> View Chart
              </PixelButton>
            ) : (
              <PixelButton type="button" variant="secondary" size="sm" disabled aria-label="Chart link not yet available">
                <ExternalLink size={14} /> View Chart
              </PixelButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
