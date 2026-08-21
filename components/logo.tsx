/** The wordmark, drawn as 29 rectangles. */
const BLOCKS: [x: number, y: number, w: number, h: number][] = [
  // j
  [14, 4, 14, 14],
  [14, 30, 14, 74],
  [4, 90, 24, 14],
  [4, 90, 14, 36],
  // u
  [44, 30, 14, 60],
  [78, 30, 14, 60],
  [44, 76, 48, 14],
  // j
  [118, 4, 14, 14],
  [118, 30, 14, 74],
  [108, 90, 24, 14],
  [108, 90, 14, 36],
  // u
  [148, 30, 14, 60],
  [182, 30, 14, 60],
  [148, 76, 48, 14],
  // l
  [212, 0, 14, 90],
  // a
  [242, 30, 48, 14],
  [276, 30, 14, 60],
  [242, 52, 48, 14],
  [242, 52, 14, 38],
  [242, 76, 48, 14],
  // b
  [306, 0, 14, 90],
  [306, 30, 48, 14],
  [340, 30, 14, 60],
  [306, 76, 48, 14],
  // s
  [370, 30, 48, 14],
  [370, 30, 14, 36],
  [370, 52, 48, 14],
  [404, 52, 14, 38],
  [370, 76, 48, 14],
];

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 424 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="jujulabs"
      role="img"
    >
      <title>jujulabs</title>
      {BLOCKS.map(([x, y, width, height]) => (
        <rect
          key={`${x}-${y}-${width}-${height}`}
          x={x}
          y={y}
          width={width}
          height={height}
          fill="currentColor"
        />
      ))}
    </svg>
  );
}

export function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="jujulabs"
      role="img"
    >
      <title>jujulabs</title>
      <path
        d="M 96,420 L 96,100 Q 96,68 128,68 L 384,68 Q 416,68 416,100 L 416,420"
        fill="none"
        stroke="currentColor"
        strokeWidth="36"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="196" cy="168" r="28" fill="currentColor" />
      <rect x="168" y="224" width="56" height="196" rx="10" fill="currentColor" />
      <circle cx="316" cy="168" r="28" fill="currentColor" />
      <rect x="288" y="224" width="56" height="196" rx="10" fill="currentColor" />
    </svg>
  );
}
