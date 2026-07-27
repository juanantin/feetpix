import Starfield from "./Starfield";

export default function OriginsSection() {
  return (
    <section id="origins" className="relative overflow-hidden border-b-2 border-feet-navy bg-feet-navy">
      <Starfield count={6} seed={3} />
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
        <p className="font-pixel text-[10px] uppercase tracking-widest text-feet-blue">About &amp; Origins</p>
        <h2 className="pixel-heading mt-4 text-xl text-feet-offwhite sm:text-2xl">
          From NFT History to Onchain Legend
        </h2>

        <p className="mt-6 text-base leading-relaxed text-feet-skylight">
          Before profile-picture collections flooded the timeline, there was FEETPIX — strange,
          simple, instantly recognizable and impossible to forget.
        </p>
        <p className="mt-4 text-base leading-relaxed text-feet-skylight">
          Now the collection returns as $FEETPIX, bringing its original pixel identity into a
          new onchain era.
        </p>
      </div>
    </section>
  );
}
