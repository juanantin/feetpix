import { CSSProperties } from "react";

export default function Sparkle({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 12 12" className={className} style={style} shapeRendering="crispEdges" aria-hidden="true">
      <rect x="5" y="0" width="2" height="3" fill="currentColor" />
      <rect x="5" y="9" width="2" height="3" fill="currentColor" />
      <rect x="0" y="5" width="3" height="2" fill="currentColor" />
      <rect x="9" y="5" width="3" height="2" fill="currentColor" />
      <rect x="5" y="5" width="2" height="2" fill="currentColor" />
    </svg>
  );
}
