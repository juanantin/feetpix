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
const blueMedium = "#4F9CD3";

export function ChartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} shapeRendering="crispEdges" role="img" aria-label="Chart icon">
      <rect x="1" y="17" width="18" height="2" fill={navy} />
      <rect x="3" y="11" width="3" height="6" fill={blueMedium} stroke={navy} />
      <rect x="8" y="8" width="3" height="9" fill={green} stroke={navy} />
      <rect x="13" y="4" width="3" height="13" fill={blueMedium} stroke={navy} />
      <rect x="13" y="2" width="3" height="2" fill={green} stroke={navy} />
    </svg>
  );
}

export function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} shapeRendering="crispEdges" role="img" aria-label="Trophy icon">
      <rect x="4" y="2" width="12" height="2" fill={navy} />
      <rect x="4" y="4" width="2" height="4" fill={navy} />
      <rect x="14" y="4" width="2" height="4" fill={navy} />
      <rect x="2" y="4" width="2" height="4" fill="#FFD42A" stroke={navy} />
      <rect x="16" y="4" width="2" height="4" fill="#FFD42A" stroke={navy} />
      <rect x="6" y="4" width="8" height="7" fill="#FFD42A" />
      <rect x="6" y="4" width="8" height="2" fill="#FFE873" />
      <rect x="6" y="10" width="8" height="1" fill={navy} />
      <rect x="9" y="11" width="2" height="3" fill={navy} />
      <rect x="6" y="14" width="8" height="2" fill={navy} />
      <rect x="4" y="16" width="12" height="2" fill={navy} />
    </svg>
  );
}
