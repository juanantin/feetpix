import Sparkle from "./Sparkle";

type StarfieldProps = {
  count?: number;
  seed?: number;
  className?: string;
};

// Deterministic PRNG (no Math.random) so server and client render identical
// star positions — avoids hydration mismatches.
function mulberry32(seed: number) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function Starfield({ count = 8, seed = 1, className = "" }: StarfieldProps) {
  const rand = mulberry32(seed);
  const stars = Array.from({ length: count }, () => ({
    top: `${(rand() * 88 + 4).toFixed(1)}%`,
    left: `${(rand() * 92 + 3).toFixed(1)}%`,
    size: rand() > 0.55 ? "h-3 w-3" : "h-2 w-2",
    delay: `${(rand() * 2.6).toFixed(2)}s`,
  }));

  return (
    <div className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`} aria-hidden="true">
      {stars.map((s, i) => (
        <Sparkle
          key={i}
          className={`pixel-star absolute ${s.size}`}
          style={{ top: s.top, left: s.left, animationDelay: s.delay }}
        />
      ))}
    </div>
  );
}
