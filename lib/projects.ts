export type ProjectKey = "product-design" | "frontend" | "full-stack";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  key: ProjectKey;
  title: string;
  outcome: string;
  stack: string[];
  slot: string;
  url?: string;
  placeholder?: boolean;
  links: ProjectLink[];
};

export const CATEGORIES: Record<ProjectKey, string> = {
  "product-design": "Product Design",
  frontend: "Frontend",
  "full-stack": "Full-Stack",
};

export const PROJECTS: Project[] = [
  {
    key: "full-stack",
    title: "HavenTrade",
    outcome:
      "A neighbourhood marketplace built around one idea: shop your street. React storefront, Express API, MongoDB persistence, JWT accounts and full listing CRUD.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    slot: "Storefront screenshot",
    links: [
      { label: "Live demo ↗", href: "#" },
      { label: "GitHub ↗", href: "#" },
    ],
  },
  {
    key: "frontend",
    title: "Personal Portfolio",
    outcome:
      "A design-led portfolio engineered for speed, accessibility and discoverability — component architecture, SEO and performance work, shipped on Vercel.",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    slot: "Site screenshot",
    url: "ayodejisamuel.dev",
    links: [
      { label: "Live ↗", href: "#" },
      { label: "GitHub ↗", href: "#" },
    ],
  },
  {
    key: "product-design",
    title: "Meridian System",
    placeholder: true,
    outcome:
      "Placeholder project. Reserved for a design-system case study — tokens, component states and documentation shown at wide crop.",
    stack: ["Figma", "Design system", "Documentation"],
    slot: "Wide crop — component sheet",
    links: [
      { label: "Figma ↗", href: "#" },
      { label: "Behance ↗", href: "#" },
    ],
  },
  {
    key: "full-stack",
    title: "Relay",
    placeholder: true,
    outcome:
      "Placeholder project. Reserved for a realtime service where the data flow is the story.",
    stack: ["Node.js", "Socket.IO", "MongoDB"],
    slot: "App screenshot",
    links: [
      { label: "Live demo ↗", href: "#" },
      { label: "GitHub ↗", href: "#" },
    ],
  },
  {
    key: "product-design",
    title: "Kola Transit",
    placeholder: true,
    outcome:
      "Placeholder project. Reserved for an end-to-end product design piece, from problem framing to handoff.",
    stack: ["Figma", "Research", "Prototyping"],
    slot: "Wide crop — key screens",
    links: [
      { label: "Figma ↗", href: "#" },
      { label: "Behance ↗", href: "#" },
    ],
  },
  {
    key: "frontend",
    title: "Northline",
    placeholder: true,
    outcome:
      "Placeholder project. Reserved for a front-end build worth showing inside a browser frame.",
    stack: ["React", "TypeScript", "Charts"],
    slot: "UI screenshot",
    url: "northline.example.com",
    links: [
      { label: "Live ↗", href: "#" },
      { label: "GitHub ↗", href: "#" },
    ],
  },
  {
    key: "full-stack",
    title: "Depot API",
    placeholder: true,
    outcome:
      "Placeholder project. Reserved for a service where the architecture carries the case study.",
    stack: ["Express", "MongoDB", "REST"],
    slot: "Admin screenshot",
    links: [
      { label: "Live demo ↗", href: "#" },
      { label: "GitHub ↗", href: "#" },
    ],
  },
  {
    key: "frontend",
    title: "Atlas Docs",
    placeholder: true,
    outcome:
      "Placeholder project. Reserved for a front-end piece that leans on typography and motion.",
    stack: ["Next.js", "MDX", "Vercel"],
    slot: "Landing screenshot",
    url: "atlasdocs.example.com",
    links: [
      { label: "Live ↗", href: "#" },
      { label: "GitHub ↗", href: "#" },
    ],
  },
  {
    key: "product-design",
    title: "Sable Commerce",
    placeholder: true,
    outcome:
      "Placeholder project. Reserved for identity plus interface work shown at wide crop.",
    stack: ["Figma", "Identity", "UI"],
    slot: "Wide crop — brand and UI",
    links: [
      { label: "Figma ↗", href: "#" },
      { label: "Behance ↗", href: "#" },
    ],
  },
];

const SPAN_PATTERN = [7, 5, 5, 7, 12, 6, 6];

export function computeSpans(n: number): number[] {
  const out: number[] = [];
  let row = 0;
  for (let i = 0; i < n; i++) {
    const s = SPAN_PATTERN[i % SPAN_PATTERN.length];
    if (row + s > 12) row = 0;
    out.push(s);
    row += s;
    if (row >= 12) row = 0;
  }
  if (row > 0 && out.length) out[out.length - 1] += 12 - row;
  return out;
}

export function pad(n: number): string {
  return n < 10 ? `0${n}` : `${n}`;
}
