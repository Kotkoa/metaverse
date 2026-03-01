# Metaverse — NFT Marketplace

A concept NFT marketplace web application for browsing and trading NFT game cards. Built with Next.js 15, React 19, TypeScript 5, and Tailwind CSS 3.4.

## Demo

**Live:** [https://kotkoa.github.io/metaverse](https://kotkoa.github.io/metaverse)

## Pages

- **Home** (`/`) — Hero section with a call-to-action and a grid of NFT cards
- **Explore** (`/explore`) — Browse cards with filters (Blockchain, Category, Collections, Price Range, etc.)
- **Card Details** (`/cards/[name]`) — Full card view with properties, stats, bid table, progress levels, and a carousel

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (Pages Router)
- **UI:** [React 19](https://react.dev/)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/)
- **UI Components:** [Headless UI 2](https://headlessui.com/) (Listbox)
- **SVG:** [@svgr/webpack 8](https://react-svgr.com/) (import SVGs as React components)
- **Deployment:** GitHub Pages via GitHub Actions

## Getting Started

### Prerequisites

- Node.js 18.18+
- npm

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Project Structure

```
pages/              — Next.js pages (index, explore, cards/[name])
components/         — Reusable React components
  Card/             — NFT card component
  Carousel/         — Card carousel
  Header/           — App header with logo and wallet button
  Layout/           — Page layout wrapper
  Select/           — Dropdown select (Headless UI Listbox)
  BidTable/         — Bid info and action buttons
  ProgressLevel/    — Progress bar with percentage
  SortForm/         — Filter/sort form for Explore page
styles/             — Global CSS (Tailwind + custom fonts)
public/             — Static assets (SVG icons, PNG images, fonts)
```

## Deployment

The project is configured for automatic deployment to GitHub Pages via GitHub Actions. Every push to `main` triggers a build and deploy.

## License

MIT
