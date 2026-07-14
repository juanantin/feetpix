import { tokenConfig } from "@/config/token";
import PixelArt from "./PixelArt";
import { footSingleGrid } from "@/lib/pixel-art";

const navy = "#101B3D";

// Recolors of the same base silhouette to stand in for real collection
// trait variations until real NFT renders are wired in.
const traitVariants = [
  { label: "Classic", palette: { N: navy, P: "#F0B596", H: "#FFD0AD" } },
  { label: "Ocean", palette: { N: navy, P: "#4F9CD3", H: "#8FCCED" } },
  { label: "Gold", palette: { N: navy, P: "#FFD42A", H: "#FFE873" } },
  { label: "Mint", palette: { N: navy, P: "#35C97A", H: "#8de3b3" } },
];

export default function OriginsSection() {
  return (
    <section id="origins" className="border-b-2 border-feet-navy bg-feet-offwhite">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div>
          <p className="font-pixel text-[10px] uppercase tracking-widest text-feet-blue">About &amp; Origins</p>
          <h2 className="pixel-heading mt-4 text-xl text-feet-navy sm:text-2xl">
            From NFT History to Onchain Legend
          </h2>

          <p className="mt-6 text-base leading-relaxed text-feet-navyblue">
            Before profile-picture collections flooded the timeline, there was FEETPIX — strange,
            simple, instantly recognizable and impossible to forget.
          </p>
          <p className="mt-4 text-base leading-relaxed text-feet-navyblue">
            Now the collection returns as $FEETPIX, bringing its original pixel identity into a
            new onchain era.
          </p>

          <div className="mt-8 flex flex-wrap gap-6 font-pixel text-[10px] uppercase text-feet-navy">
            <a
              href={tokenConfig.openseaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-pixel border-b-2 border-feet-navy pb-1 hover:text-feet-blue"
            >
              Explore the original collection →
            </a>
            <a
              href={tokenConfig.twitterUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-pixel border-b-2 border-feet-navy pb-1 hover:text-feet-blue"
            >
              Join the community →
            </a>
          </div>
        </div>

        <div className="border-2 border-feet-navy bg-feet-skylight p-5 shadow-[6px_6px_0_0_#101B3D]">
          <p className="mb-4 font-pixel text-[9px] uppercase text-feet-navyblue">
            Collection preview — placeholder traits
          </p>
          <div className="grid grid-cols-2 gap-4">
            {traitVariants.map((trait) => (
              <div key={trait.label} className="border-2 border-feet-navy bg-feet-offwhite p-3">
                <PixelArt grid={footSingleGrid} palette={trait.palette} title={`${trait.label} trait preview`} />
                <p className="mt-2 text-center font-pixel text-[8px] uppercase text-feet-navy">{trait.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
