# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Sidekick Air is a landing page for an inflatable therapy table product.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run start    # Run production server
npm run lint     # ESLint
```

## Architecture

### Tech Stack
- Next.js 15 (App Router) with TypeScript strict mode
- Tailwind CSS for styling
- Framer Motion for animations

### Component Organization

The landing page (`src/app/page.tsx`) composes seven sequential sections:
```
Hero → OriginStory → Problem → Difference → NewStandard → CareApp → JoinMovement
```

Components are organized in three categories:
- `src/components/sections/` - Full-page sections (Hero, Problem, etc.)
- `src/components/ui/` - Reusable UI primitives (Button, AnimatedText, FeatureCard, SectionDivider, AirflowLines)
- `src/components/layout/` - Header and Footer

### Design System

**Colors** (defined in `tailwind.config.ts`):
- `graphite` (#1C1C1E) - Dark backgrounds
- `steel-blue` (#387CFF) - Primary accent/CTAs
- `copper` (#D36C3E) - Warm emotional accent
- `arctic` (#F7F8FA) - Light sections
- `mist` (#E2E2E4) - Transitions

**Typography**:
- `font-display` - Space Grotesk for headings
- `font-body` - DM Sans for body text

**Animation Patterns** (`src/lib/animations.ts`):
- `fadeInUp`, `slideInLeft`, `slideInRight` - Entrance animations
- `staggerContainer` - Staggered children animations
- `breathe` - 4-second breathing rhythm for ambient effects
- `float` - Subtle floating motion

### Key Utilities

- `src/lib/cn.ts` - `cn()` function for conditional class merging (clsx + tailwind-merge)
- `src/lib/fonts.ts` - Next.js font configurations

### Deployment

Configured for standalone output (`next.config.ts`) for Kilo Deploy compatibility. Health check endpoint at `/api/health`.
