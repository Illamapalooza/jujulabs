const NODES = [
  { x: 62, y: 16, label: "Web app", sub: "product" },
  { x: 62, y: 136, label: "API + data", sub: "backend" },
  { x: 244, y: 76, label: "Agent", sub: "does the work" },
  { x: 244, y: 206, label: "Automations", sub: "your tools" },
];

const EDGES = [
  // app → api
  { d: "M 137 72 L 137 136", delay: "0s" },
  // api → agent
  { d: "M 212 164 C 236 164, 226 104, 244 104", delay: "0.7s" },
  // agent → automations
  { d: "M 319 132 L 319 206", delay: "1.4s" },
  // automations → back around into the product
  { d: "M 244 234 C 140 234, 26 236, 26 128 C 26 48, 44 44, 62 44", delay: "2.1s" },
];

const NODE_WIDTH = 150;
const NODE_HEIGHT = 56;

export function SystemDiagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 410 290"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="How the pieces connect: a web app and its API feed an agent, which drives automations that flow back into the product."
    >
      {EDGES.map((edge) => (
        <g key={edge.d}>
          <path d={edge.d} stroke="var(--color-border)" strokeWidth="1" />
          <path
            d={edge.d}
            stroke="var(--color-accent)"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="signal"
            style={{ animationDelay: edge.delay }}
          />
        </g>
      ))}

      {NODES.map((node) => (
        <g key={node.label}>
          <rect
            x={node.x}
            y={node.y}
            width={NODE_WIDTH}
            height={NODE_HEIGHT}
            rx="12"
            fill="var(--color-surface-hi)"
            stroke="var(--color-border)"
          />
          <circle cx={node.x + 18} cy={node.y + 28} r="3" fill="var(--color-accent)" />
          <text
            x={node.x + 32}
            y={node.y + 25}
            className="fill-foreground font-mono"
            fontSize="11"
          >
            {node.label}
          </text>
          <text
            x={node.x + 32}
            y={node.y + 39}
            className="fill-muted font-mono"
            fontSize="9"
          >
            {node.sub}
          </text>
        </g>
      ))}
    </svg>
  );
}
