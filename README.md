# Ayodeji Samuel — Portfolio

A single-page portfolio built with Next.js (App Router) and TypeScript, no CSS framework — layout and motion are hand-built with CSS grid, custom properties, and `IntersectionObserver`-driven reveal animations.

## Sections

- **Hero** — masked headline reveal, scroll-driven parallax fade, live Lagos local-time clock.
- **Selected Work** — filterable project grid (Product Design / Frontend / Full-Stack) with three card layouts and a masonry-style column span pattern.
- **The Overlap** — a side-by-side of a wireframe spec and its shipped component code.
- **Experience** — a timeline of roles.
- **Stack** — grouped list of tools and technologies.
- **Contact** — direct contact links.

## Stack

- Next.js (App Router) + TypeScript
- Plain CSS (`app/globals.css`) for resets, animation primitives (`data-reveal`, `data-mask`, `data-wipe`, `data-draw`, `data-stagger`), and responsive breakpoints
- `next/font` for Inter + Poppins

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/            Root layout, global styles, and the page entry
components/     Section components (Hero, Work, Overlap, Experience, Stack, Contact, Footer)
hooks/          Client hooks: scroll-reveal observer, scroll progress bar, Lagos clock
lib/            Static content: project list, experience timeline, stack groups
```

## Build

```bash
npm run build
npm run lint
```
