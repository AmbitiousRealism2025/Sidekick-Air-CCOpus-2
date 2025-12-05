# Sidekick Air Landing Page — Implementation Plan

## Executive Summary

Build a visually stunning, deployment-ready Next.js 15 landing page for **Sidekick Air**, an innovative inflatable therapy table that combines aerospace-grade drop-stitch technology with portability. The landing page will showcase the product's unique value proposition while maintaining a blend of athletic performance energy and clinical professionalism.

---

## Phase 1: Project Setup & Configuration

### 1.1 Initialize Next.js Project
```bash
npx create-next-app@latest sidekick-air --typescript --tailwind --eslint --app --src-dir
```

### 1.2 Required Dependencies
```json
{
  "dependencies": {
    "next": "^15.x",
    "react": "^19.x",
    "react-dom": "^19.x",
    "framer-motion": "^11.x",
    "clsx": "^2.x",
    "tailwind-merge": "^2.x"
  },
  "devDependencies": {
    "@types/node": "^20.x",
    "@types/react": "^19.x",
    "typescript": "^5.x"
  }
}
```

### 1.3 Next.js Configuration (next.config.ts)
```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [],
    unoptimized: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  poweredByHeader: false,
  reactStrictMode: true,
}

export default nextConfig
```

### 1.4 Project Structure
```
sidekick-air/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with fonts, metadata
│   │   ├── page.tsx                # Landing page composition
│   │   ├── globals.css             # CSS variables, base styles, animations
│   │   └── api/
│   │       └── health/
│   │           └── route.ts        # Health check endpoint
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx            # Hero section
│   │   │   ├── OriginStory.tsx     # Drew Freedman's story
│   │   │   ├── Problem.tsx         # Industry problems
│   │   │   ├── Difference.tsx      # Product differentiators
│   │   │   ├── NewStandard.tsx     # Future AI features
│   │   │   ├── CareApp.tsx         # Sidekick Care App section
│   │   │   └── JoinMovement.tsx    # CTA section
│   │   ├── ui/
│   │   │   ├── Button.tsx          # CTA buttons
│   │   │   ├── SectionDivider.tsx  # Diagonal dividers
│   │   │   ├── AnimatedText.tsx    # Text reveal animations
│   │   │   ├── FeatureCard.tsx     # Feature display cards
│   │   │   └── AirflowLines.tsx    # Decorative motion lines
│   │   └── layout/
│   │       ├── Header.tsx          # Navigation header
│   │       └── Footer.tsx          # Site footer
│   └── lib/
│       ├── fonts.ts                # Font configurations
│       ├── cn.ts                   # Classname utility
│       └── animations.ts           # Framer Motion variants
├── public/
│   ├── images/
│   │   ├── hero/                   # Hero section imagery
│   │   ├── product/                # Product shots
│   │   ├── lifestyle/              # Usage scenarios
│   │   └── icons/                  # UI icons
│   └── fonts/                      # Self-hosted fonts (if needed)
├── next.config.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── .env.example
└── README.md
```

---

## Phase 2: Design System Implementation

### 2.1 Color Palette (globals.css)
```css
:root {
  /* Primary Colors */
  --graphite-charcoal: #1C1C1E;
  --electric-steel-blue: #387CFF;
  --burnt-copper: #D36C3E;

  /* Neutrals */
  --arctic-white: #F7F8FA;
  --mist-grey: #E2E2E4;

  /* Semantic */
  --background-dark: var(--graphite-charcoal);
  --background-light: var(--arctic-white);
  --accent-primary: var(--electric-steel-blue);
  --accent-warm: var(--burnt-copper);
  --text-primary: var(--graphite-charcoal);
  --text-inverse: var(--arctic-white);
  --divider: var(--mist-grey);
}
```

### 2.2 Typography Selection
**Display Font**: **Space Grotesk** or **Syne** — Bold, modern, distinctive
**Body Font**: **DM Sans** or **Plus Jakarta Sans** — Clean, professional, highly readable

```typescript
// lib/fonts.ts
import { Space_Grotesk, DM_Sans } from 'next/font/google'

export const displayFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700'],
})

export const bodyFont = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
})
```

### 2.3 Tailwind Configuration
```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        graphite: '#1C1C1E',
        'steel-blue': '#387CFF',
        copper: '#D36C3E',
        arctic: '#F7F8FA',
        mist: '#E2E2E4',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'breathe': 'breathe 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
```

---

## Phase 3: Section Implementation

### 3.1 Hero Section
**Visual Concept**: Full-bleed cinematic scene — therapist working on athlete field-side with Sidekick Air
**Key Elements**:
- Tagline: "Reimagining Recovery" with orchestrated text reveal
- Subtle glow effect on product seams
- Airflow line animations suggesting motion/breath
- Primary CTA: "Discover Sidekick Air"
- Secondary CTA: "Watch Demo"

**Animation Strategy**:
- Staggered text reveal (0.1s delay between lines)
- Background parallax on scroll
- Airflow SVG lines animate in from edges

### 3.2 Origin Story Section
**Visual Concept**: Warm, introspective — editorial layout with asymmetric text/image balance
**Content Flow**:
1. Drew's 25-year career at The Boston Bodyworker
2. The moment of transition and paddleboard discovery
3. The "thunderclap" realization
4. Birth of Sidekick Air as continuation of purpose

**Design Elements**:
- Warm natural tones transitioning from dark hero
- Subtle grain texture overlay
- Pull quotes highlighted in Burnt Copper
- Diagonal section divider at top

### 3.3 Problem Section
**Visual Concept**: Split-screen contrast — struggle vs. solution
**Content**: Pain points for therapists:
- Excessive weight (35-45 lbs)
- Awkward balance and transport
- Bulky storage
- Setup fatigue
- Durability trade-offs
- Freight limitations
- Lack of customization
- Environmental impact

**Design Elements**:
- Left: Gritty, desaturated imagery of struggle
- Right: Bright, optimistic Sidekick Air solution
- Animated transition between states on scroll
- Icon system for each pain point

### 3.4 Difference Section
**Visual Concept**: Product showcase — exploded view + lifestyle grid
**Key Features to Highlight**:
- Drop-stitch aerospace technology
- 800+ lb capacity
- 6-inch inflated surface
- Packs to yoga mat size
- Modular frame system
- Color customization

**Design Elements**:
- Interactive feature cards with hover states
- CAD-style exploded diagram
- Lifestyle image grid (gym, clinic, home, outdoor)
- Animated feature reveals on scroll

### 3.5 New Standard Section
**Visual Concept**: Futuristic, clean — technology forward
**Content**:
- Future AI Clinical Coach
- QR code integration
- Treatment planning assistance
- Business analytics
- Professional growth tools

**Design Elements**:
- Subtle tech grid background
- Device mockup with AI interface
- Glowing QR code animation
- Clean, minimal typography

### 3.6 Care App Section
**Visual Concept**: App showcase with floating UI elements
**Features**:
- Setup and mobility guides
- Treatment protocols
- Client tracking
- Professional networking
- Scheduling system
- Home care functionality
- Continuing education
- Wearable integration

**Design Elements**:
- Phone mockup with app screens
- Floating feature cards around device
- Gradient accent backgrounds
- Icon system matching brand

### 3.7 Join the Movement Section (CTA)
**Visual Concept**: Empowering, community-focused — diverse therapist showcase
**Content**:
- Community-building messaging
- Pre-order / waitlist signup
- Newsletter subscription
- Social proof elements

**Design Elements**:
- Image collage of diverse practitioners
- Large, prominent CTA button
- Email capture form
- Warm, inviting gradient background

---

## Phase 4: Animation & Interaction Design

### 4.1 Page Load Orchestration
```typescript
// Staggered reveal sequence
const pageLoadSequence = {
  logo: { delay: 0, duration: 0.4 },
  headline: { delay: 0.2, duration: 0.6 },
  subheadline: { delay: 0.4, duration: 0.6 },
  cta: { delay: 0.6, duration: 0.4 },
  heroImage: { delay: 0.3, duration: 0.8 },
  airflowLines: { delay: 0.8, duration: 1.2 },
}
```

### 4.2 Scroll-Triggered Animations
- **Section reveals**: Fade up with slight scale
- **Text reveals**: Line-by-line or word-by-word
- **Image reveals**: Clip-path or mask animations
- **Parallax layers**: Different speeds for depth
- **Progress indicators**: Section navigation

### 4.3 Micro-interactions
- Button hover: Subtle scale + glow
- Card hover: Lift + shadow enhancement
- Link hover: Underline animation
- Form focus: Border color transition
- Image hover: Slight zoom + overlay

### 4.4 Signature Motifs
- **Airflow lines**: SVG path animations suggesting breath/motion
- **Diagonal dividers**: Angled section transitions
- **Breathing rhythm**: Subtle pulsing elements (4s cycle)
- **Inflating animation**: Product visualization expanding

---

## Phase 5: Responsive Design Strategy

### 5.1 Breakpoints
```css
/* Mobile First Approach */
sm: 640px   /* Large phones */
md: 768px   /* Tablets */
lg: 1024px  /* Small laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */
```

### 5.2 Mobile Considerations
- Stack horizontal layouts vertically
- Reduce animation complexity
- Larger touch targets (44px minimum)
- Simplified navigation (hamburger menu)
- Optimized image sizes
- Reduced parallax effects

### 5.3 Critical Viewport Tests
- 375px (iPhone SE)
- 768px (iPad Portrait)
- 1024px (iPad Landscape / Small Laptop)
- 1440px (Standard Desktop)
- 1920px (Large Desktop)

---

## Phase 6: Performance Optimization

### 6.1 Image Strategy
- Use `next/image` for all images
- Provide multiple sizes with `srcset`
- Implement blur placeholders
- Lazy load below-fold images
- Use WebP format with fallbacks

### 6.2 Code Splitting
- Dynamic imports for heavy components
- Route-based code splitting (automatic with App Router)
- Defer non-critical animations

### 6.3 Font Loading
- Use `next/font` for optimal loading
- Subset fonts to Latin characters
- Use `font-display: swap`

### 6.4 Animation Performance
- Use `transform` and `opacity` only
- Enable GPU acceleration with `will-change`
- Reduce motion for `prefers-reduced-motion`
- Throttle scroll handlers

---

## Phase 7: Accessibility Requirements

### 7.1 WCAG 2.1 AA Compliance
- Color contrast ratio: 4.5:1 minimum
- Focus indicators on all interactive elements
- Keyboard navigation support
- Screen reader compatibility
- Skip navigation links

### 7.2 Semantic HTML
- Proper heading hierarchy (h1 → h6)
- Landmark regions (header, main, footer, nav)
- Alt text for all images
- ARIA labels where needed

### 7.3 Motion Accessibility
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Phase 8: Testing & Quality Assurance

### 8.1 Pre-Deployment Checklist
- [ ] `npm run build` completes without errors
- [ ] `npm run build && npm run start` works correctly
- [ ] All responsive breakpoints tested
- [ ] Animations smooth on low-powered devices
- [ ] Accessibility scan passed
- [ ] Lighthouse score > 90 for Performance, Accessibility, Best Practices
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Form submissions working
- [ ] Health endpoint responding at `/api/health`

### 8.2 Quality Metrics Targets
| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Time to Interactive | < 3.0s |
| Lighthouse Performance | > 90 |
| Lighthouse Accessibility | > 95 |

---

## Phase 9: Deployment Preparation

### 9.1 Environment Variables (.env.example)
```bash
# Analytics (optional)
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_ANALYTICS_ID=

# API Endpoints (if needed)
NEXT_PUBLIC_API_URL=

# Feature Flags
NEXT_PUBLIC_ENABLE_WAITLIST=true
```

### 9.2 Kilo Deploy Configuration
1. Push code to GitHub repository
2. Connect repository in Kilo Deploy
3. Set environment variables
4. Configure branch (main → production)
5. Deploy and verify

### 9.3 README Documentation
- Setup instructions
- Design rationale
- Environment variables
- Build commands
- Deployment steps

---

## Implementation Timeline (Suggested Sequence)

### Sprint 1: Foundation
1. Project initialization and configuration
2. Design system setup (colors, typography, Tailwind)
3. Base layout components (Header, Footer)
4. Health check endpoint

### Sprint 2: Core Sections
5. Hero section with animations
6. Origin Story section
7. Problem section
8. Section dividers and transitions

### Sprint 3: Feature Sections
9. Difference section with product showcase
10. New Standard section
11. Care App section
12. UI component library completion

### Sprint 4: Polish & Deploy
13. Join the Movement CTA section
14. Animation orchestration and refinement
15. Responsive testing and fixes
16. Performance optimization
17. Accessibility audit
18. Final QA and deployment

---

## Design Philosophy Summary

**Memorable Moment**: The scroll transition from "The Problem" (heavy, struggling) to "The Difference" (light, liberating) — a visual metaphor for what Sidekick Air delivers.

**Aesthetic Tone**: Professional yet innovative — blending the trust of clinical environments with the energy of athletic performance. Not sterile, not flashy — confident and purposeful.

**Key Differentiators from Generic AI Pages**:
- Distinctive typography (Space Grotesk / DM Sans)
- Signature airflow line motifs
- Diagonal section dividers creating momentum
- Warm Burnt Copper accents against cool Steel Blue
- Breathing animation rhythm throughout
- Editorial asymmetric layouts
- Rich imagery over generic icons

---

## Files to Create (Execution Order)

1. `package.json` — Dependencies
2. `next.config.ts` — Build configuration
3. `tailwind.config.ts` — Design tokens
4. `src/lib/fonts.ts` — Typography
5. `src/lib/cn.ts` — Utility function
6. `src/lib/animations.ts` — Framer Motion variants
7. `src/app/globals.css` — CSS variables and base styles
8. `src/app/layout.tsx` — Root layout
9. `src/components/ui/*` — UI primitives
10. `src/components/layout/*` — Header/Footer
11. `src/components/sections/*` — All sections
12. `src/app/page.tsx` — Page composition
13. `src/app/api/health/route.ts` — Health endpoint
14. `.env.example` — Environment template
15. `README.md` — Documentation

---

*Plan created: December 2024*
*Target: Kilo Deploy compatible Next.js 15 application*
