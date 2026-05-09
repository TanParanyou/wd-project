<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Documentation

## Overview

This is a **Next.js 16** web application for a **Housewarming Ceremony & Wrist-Tying Ceremony** digital invitation card. The project uses the App Router, React 19, TypeScript, Tailwind CSS v4, and Framer Motion for animations.

---

## Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 16.2.6 | React framework with App Router |
| React | 19.2.4 | UI library |
| TypeScript | ^5 | Type safety |
| Tailwind CSS | ^4 | Utility-first CSS |
| Framer Motion | ^12.38.0 | Animations |
| Lucide React | ^1.14.0 | Icons |

---

## Project Structure

```
wd-project/
├── docs/                          # Documentation (this folder)
├── public/                        # Static assets (images, favicon)
├── src/
│   ├── app/                       # Next.js App Router
│   │   ├── layout.tsx            # Root layout with fonts & metadata
│   │   ├── page.tsx              # Home page (invitation)
│   │   ├── invitation/
│   │   │   └── page.tsx          # Alternative invitation route
│   │   ├── globals.css           # Global styles & Tailwind config
│   │   ├── favicon.ico           # Browser favicon
│   │   └── icon.svg              # App icon
│   └── features/
│       └── invitation/            # Invitation feature module
│           ├── components/        # React components
│           ├── data/
│           │   └── invitation.config.ts  # All content data
│           ├── types/
│           │   └── invitation.type.ts    # TypeScript interfaces
│           ├── utils/
│           │   └── invitation.utils.ts   # Helper functions
│           └── index.ts           # Public API exports
├── next.config.ts                 # Next.js configuration
├── package.json                   # Dependencies & scripts
├── tsconfig.json                  # TypeScript configuration
├── postcss.config.mjs             # PostCSS configuration
└── eslint.config.mjs              # ESLint configuration
```

---

## Architecture Pattern

This project follows a **Feature-Based Folder Structure**:

- Each feature is self-contained in `src/features/[feature-name]/`
- Features own their components, data, types, and utilities
- Public exports are centralized in `index.ts`
- Pages in `src/app/` compose features together

---

## Key Files

### Content Configuration
**File:** `src/features/invitation/data/invitation.config.ts`

All editable content is centralized here. Modify this file to update:
- Couple names (bride & groom)
- Event details (date, location, address)
- Schedule timeline
- Dress code information
- Google Maps URLs and embeds
- Route directions with step-by-step images
- Contact information
- Gallery images
- RSVP settings

### Type Definitions
**File:** `src/features/invitation/types/invitation.type.ts`

TypeScript interfaces for all data structures. When adding new fields to the config, update the corresponding types here.

### Layout & Metadata
**File:** `src/app/layout.tsx`

Root layout with:
- Google Fonts (Playfair Display, Caveat, Kanit)
- SEO metadata (Open Graph, Twitter Cards)
- Theme color and mobile viewport settings

### Styling
**File:** `src/app/globals.css`

Tailwind CSS v4 configuration with:
- Custom color palette (warm cream background #FAFAF8)
- Scroll snap behavior for desktop
- Custom scrollbar styling
- Paper texture background
- Animation keyframes

---

## Available Scripts

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Component Inventory

| Component | Purpose |
|-----------|---------|
| `HeroSection` | Main banner with couple names and event title |
| `ScheduleSection` | Timeline of ceremony events |
| `DressCodeSection` | Dress code information |
| `GallerySection` | Photo gallery carousel |
| `LocationSection` | Map embed and address |
| `RouteSelectorSection` | Multiple route options with directions |
| `ContactSection` | Contact information and social links |
| `FooterSection` | Closing message |
| `AnimatedSection` | Scroll-triggered animation wrapper |
| `CountdownTimer` | Event countdown display |
| `StickyNav` | Floating navigation menu |
| `BackgroundMusic` | Auto-play background music |
| `ShareButton` | Social sharing functionality |
| `MobileQuickActions` | Mobile-specific action buttons |

---

## Customization Guide

### Changing Event Details

1. Open `src/features/invitation/data/invitation.config.ts`
2. Update the `couple`, `event`, `schedule`, and other objects
3. Save and the dev server will hot-reload

### Adding/Changing Images

1. Place images in `public/images/` directory
2. Update image paths in `invitation.config.ts`
3. Supported formats: JPG, PNG, SVG, WebP

### Changing Colors

1. Open `src/app/globals.css`
2. Modify CSS custom properties in `@theme inline` block
3. Update body background and text colors

### Adding New Sections

1. Create a new component in `src/features/invitation/components/`
2. Export it from `src/features/invitation/index.ts`
3. Import and use it in `src/app/page.tsx`

---

## Deployment

This project is optimized for **Vercel** deployment:

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy with zero configuration

---

## Important Notes

- **Next.js 16 Breaking Changes**: This project uses Next.js 16 which may have APIs different from earlier versions. Always check `node_modules/next/dist/docs/` for current documentation.
- **Images**: Set to `unoptimized: true` in `next.config.ts` for static hosting compatibility
- **Fonts**: Uses `next/font/google` for optimal font loading
- **Accessibility**: Includes reduced motion support and focus-visible styles
- **Mobile-First**: Design is optimized for mobile viewing with desktop enhancements
