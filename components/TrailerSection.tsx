import Starfield from "./Starfield";

export default function TrailerSection() {
  return (
    <section id="trailer" className="relative overflow-hidden border-b-2 border-feet-navy bg-feet-navyblue">
      <Starfield count={6} seed={8} />
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 md:py-24">
        <p className="font-pixel text-[10px] uppercase tracking-widest text-feet-blue">Watch</p>
        <h2 className="pixel-heading mt-4 text-xl text-feet-offwhite sm:text-2xl">TRAILER</h2>

        <div className="relative mx-auto mt-10 w-full max-w-2xl border-2 border-feet-blue bg-feet-navy p-2 shadow-[6px_6px_0_0_rgba(6,10,24,0.6)]">
          <video
            controls
            playsInline
            preload="metadata"
            poster="/videos/feetpix-trailer-poster.jpg"
            className="aspect-video w-full bg-black object-contain"
          >
            <source src="/videos/feetpix-trailer.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
