type PixelArtProps = {
  grid: string[];
  palette: Record<string, string>;
  className?: string;
  title?: string;
};

// Renders a character grid as a crisp, scalable pixel-art SVG. "." is transparent.
export default function PixelArt({ grid, palette, className, title }: PixelArtProps) {
  const h = grid.length;
  const w = grid[0]?.length ?? 0;

  const rects: React.ReactNode[] = [];
  for (let y = 0; y < h; y++) {
    let x = 0;
    while (x < w) {
      const c = grid[y][x];
      if (c === ".") {
        x++;
        continue;
      }
      let runEnd = x + 1;
      while (runEnd < w && grid[y][runEnd] === c) runEnd++;
      rects.push(
        <rect
          key={`${y}-${x}`}
          x={x}
          y={y}
          width={runEnd - x}
          height={1}
          fill={palette[c] ?? "transparent"}
        />
      );
      x = runEnd;
    }
  }

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title}
      shapeRendering="crispEdges"
    >
      {rects}
    </svg>
  );
}
