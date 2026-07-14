import PixelArt from "./PixelArt";
import { footSingleGrid, coinGrid, palette } from "@/lib/pixel-art";

export function FeetIcon({ className }: { className?: string }) {
  return <PixelArt grid={footSingleGrid} palette={palette.feet} className={className} title="Foot icon" />;
}

export function CoinIcon({ className }: { className?: string }) {
  return <PixelArt grid={coinGrid} palette={palette.coin} className={className} title="Coin icon" />;
}

const navy = "#101B3D";
const green = "#35C97A";
const greenLight = "#8FE3B8";
const greenDark = "#1F8F56";
const blue = "#4F9CD3";
const blueLight = "#8FCCED";

export function ChartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} shapeRendering="crispEdges" role="img" aria-label="Chart icon">
      {/* baseline + shadow */}
      <rect x="2" y="21" width="19" height="1" fill={blueLight} />
      <rect x="1" y="19" width="19" height="2" fill={navy} />

      {/* ascending bars: base + left highlight + right shadow, navy outline */}
      <g>
        <rect x="2" y="15" width="4" height="4" fill={green} stroke={navy} />
        <rect x="2" y="15" width="1" height="4" fill={greenLight} />
        <rect x="5" y="15" width="1" height="4" fill={greenDark} />
      </g>
      <g>
        <rect x="7" y="12" width="4" height="7" fill={green} stroke={navy} />
        <rect x="7" y="12" width="1" height="7" fill={greenLight} />
        <rect x="10" y="12" width="1" height="7" fill={greenDark} />
      </g>
      <g>
        <rect x="12" y="9" width="4" height="10" fill={green} stroke={navy} />
        <rect x="12" y="9" width="1" height="10" fill={greenLight} />
        <rect x="15" y="9" width="1" height="10" fill={greenDark} />
      </g>
      <g>
        <rect x="17" y="6" width="4" height="13" fill={green} stroke={navy} />
        <rect x="17" y="6" width="1" height="13" fill={greenLight} />
        <rect x="20" y="6" width="1" height="13" fill={greenDark} />
      </g>

      {/* stepped trend arrow */}
      <g fill={greenLight} stroke={navy}>
        <rect x="3" y="12" width="2" height="2" />
        <rect x="6" y="10" width="2" height="2" />
        <rect x="9" y="8" width="2" height="2" />
        <rect x="12" y="6" width="2" height="2" />
        <rect x="15" y="4" width="2" height="2" />
      </g>
      <path d="M16 2 L22 2 L22 8 L19 5 L17 7 Z" fill={greenLight} stroke={navy} strokeLinejoin="round" />
    </svg>
  );
}

export function TrophyIcon({ className }: { className?: string }) {
  const gold = "#FFD42A";
  const goldLight = "#FFF3C4";
  const goldDark = "#E0A400";
  const bronze = "#B8721E";
  const bronzeLight = "#D99A3F";

  return (
    <svg viewBox="0 0 24 24" className={className} shapeRendering="crispEdges" role="img" aria-label="Trophy icon">
      {/* ground shadow */}
      <rect x="5" y="21" width="14" height="1" fill={blueLight} />

      {/* handles: curved via connector nubs into the bowl */}
      <rect x="2" y="7" width="2" height="5" fill={gold} stroke={navy} />
      <rect x="2" y="7" width="1" height="5" fill={goldLight} />
      <rect x="4" y="6" width="2" height="2" fill={gold} stroke={navy} />
      <rect x="4" y="10" width="2" height="2" fill={gold} stroke={navy} />

      <rect x="20" y="7" width="2" height="5" fill={gold} stroke={navy} />
      <rect x="21" y="7" width="1" height="5" fill={blue} />
      <rect x="18" y="6" width="2" height="2" fill={gold} stroke={navy} />
      <rect x="18" y="10" width="2" height="2" fill={gold} stroke={navy} />

      {/* cup bowl, tapering down into the stem */}
      <rect x="5" y="4" width="14" height="3" fill={gold} stroke={navy} />
      <rect x="6" y="7" width="12" height="3" fill={gold} stroke={navy} />
      <rect x="7" y="10" width="10" height="3" fill={gold} stroke={navy} />
      <rect x="9" y="13" width="6" height="2" fill={gold} stroke={navy} />

      {/* shading */}
      <rect x="5" y="4" width="3" height="11" fill={goldLight} />
      <rect x="16" y="4" width="3" height="11" fill={goldDark} />
      <rect x="5" y="4" width="14" height="2" fill={goldLight} />

      {/* sparkle */}
      <rect x="14" y="5" width="1" height="3" fill="#FFFFFF" />
      <rect x="13" y="6" width="3" height="1" fill="#FFFFFF" />

      {/* stem */}
      <rect x="10" y="15" width="4" height="2" fill={gold} stroke={navy} />

      {/* base */}
      <rect x="7" y="17" width="10" height="2" fill={bronze} stroke={navy} />
      <rect x="8" y="17" width="8" height="1" fill={bronzeLight} />
      <rect x="5" y="19" width="14" height="2" fill={navy} />
      <rect x="6" y="19" width="12" height="1" fill={bronzeLight} />
    </svg>
  );
}
