# Sidekick Air Landing Page

A visually stunning, deployment-ready landing page for Sidekick Air — the world's first inflatable therapy table.

## Design Philosophy

**Aesthetic Tone**: Professional yet innovative — blending the trust of clinical environments with the energy of athletic performance.

**Memorable Moment**: The scroll transition from "The Problem" to "The Difference" — a visual metaphor for liberation from heavy, cumbersome equipment.

**Key Design Choices**:
- **Typography**: Space Grotesk (display) + DM Sans (body) — distinctive and professional
- **Color Palette**:
  - Graphite Charcoal (#1C1C1E) — Foundation/background
  - Electric Steel Blue (#387CFF) — Primary accent/CTAs
  - Burnt Copper (#D36C3E) — Warm emotional tone
  - Arctic White (#F7F8FA) — Light sections
  - Mist Grey (#E2E2E4) — Transitions
- **Motion**: Airflow line motifs, diagonal section dividers, 4s breathing rhythm
- **Layout**: Editorial asymmetric layouts with generous whitespace

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Kilo Deploy compatible (standalone output)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, pnpm, yarn, or bun

### Installation

```bash
# Clone the repository
cd sidekick-air

# Install dependencies
npm install
# or
pnpm install
# or
yarn install
```

### Development

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

### Production

```bash
npm run build && npm run start
```

## Project Structure

```
sidekick-air/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts, metadata
│   │   ├── page.tsx            # Landing page composition
│   │   ├── globals.css         # CSS variables, base styles
│   │   └── api/health/         # Health check endpoint
│   ├── components/
│   │   ├── sections/           # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── OriginStory.tsx
│   │   │   ├── Problem.tsx
│   │   │   ├── Difference.tsx
│   │   │   ├── NewStandard.tsx
│   │   │   ├── CareApp.tsx
│   │   │   └── JoinMovement.tsx
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── AnimatedText.tsx
│   │   │   ├── FeatureCard.tsx
│   │   │   ├── SectionDivider.tsx
│   │   │   └── AirflowLines.tsx
│   │   └── layout/             # Layout components
│   │       ├── Header.tsx
│   │       └── Footer.tsx
│   └── lib/
│       ├── fonts.ts            # Font configurations
│       ├── cn.ts               # Classname utility
│       └── animations.ts       # Framer Motion variants
├── public/
│   └── images/                 # Static assets
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind configuration
└── package.json
```

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
# Analytics (optional)
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_ANALYTICS_ID=

# API Endpoints (if needed)
NEXT_PUBLIC_API_URL=

# Feature Flags
NEXT_PUBLIC_ENABLE_WAITLIST=true
```

## Deployment

### Kilo Deploy

1. Push code to GitHub repository
2. Navigate to Kilo Deploy dashboard
3. Click "New Deployment"
4. Select GitHub repository
5. Configure environment variables
6. Deploy

The project is configured with `output: 'standalone'` for optimal Kilo Deploy compatibility.

### Health Check

The health endpoint is available at `/api/health` and returns:

```json
{
  "status": "healthy",
  "timestamp": "2024-12-05T00:00:00.000Z",
  "service": "sidekick-air-landing",
  "version": "1.0.0"
}
```

## Sections Overview

1. **Hero** — Full-bleed cinematic hero with animated tagline and stats
2. **Origin Story** — Drew Freedman's journey and the paddleboard moment
3. **Problem** — Pain points with traditional therapy tables
4. **Difference** — Product features and benefits showcase
5. **New Standard** — Future AI Clinical Coach features
6. **Care App** — Sidekick Care companion app features
7. **Join Movement** — Waitlist signup and social proof

## Performance Targets

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Lighthouse Performance | > 90 |
| Lighthouse Accessibility | > 95 |

## Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML structure
- Keyboard navigation support
- Reduced motion support via `prefers-reduced-motion`
- Color contrast ratios meet 4.5:1 minimum

## License

Proprietary - Sidekick Air

---

Built with purpose. Designed with care.
