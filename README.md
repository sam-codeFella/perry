# KnowYourCompany.ai - Landing Page

A modern, responsive landing page for KnowYourCompany.ai, built with Next.js 16, TypeScript, and Tailwind CSS. Ported from Figma design.

## Features

- **Modern Tech Stack**: Next.js 16 with App Router, TypeScript, Tailwind CSS v4
- **Fully Responsive**: Mobile-first design with breakpoints for tablet and desktop
- **Design System**: Custom color tokens from Figma (Primary: #ff5c35, Neutral grays)
- **Component-Based**: Reusable UI components and section components
- **Optimized**: Production-ready build with Next.js optimizations

## Project Structure

```
perry/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with Header/Footer
│   ├── page.tsx             # Landing page
│   └── globals.css          # Global styles & design tokens
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── layout/              # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── sections/            # Page sections
│       ├── HeroSection.tsx
│       ├── FeaturesSection.tsx
│       ├── AIPartnerSection.tsx
│       ├── ResearchInterfaceSection.tsx
│       ├── TestimonialsSection.tsx
│       └── FooterCTASection.tsx
├── lib/                     # Utilities
├── types/                   # TypeScript types
└── utils/                   # Helper functions
```

## Sections Implemented

1. **Hero Section**: Main headline with CTA buttons and hero visual
2. **Features Section**: Key features with icons and descriptions
3. **AI Partner Cards**: 4 cards showcasing AI capabilities
4. **Research Interface**: Interactive demo section
5. **Testimonials**: User testimonials in card layout
6. **Footer CTA**: Final call-to-action with gradient background
7. **Header**: Navigation with mobile menu
8. **Footer**: Links, social media, and copyright

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Design System

### Colors
- Primary 500: `#ff5c35` (Orange)
- Primary 100: `#ffe6e0` (Light Orange)
- Neutral 700: `#4a4a4a` (Dark Gray)
- Neutral 300: `#ebebeb` (Light Gray)
- Neutral 200: `#f1f1f1` (Lighter Gray)
- Neutral 100: `#f9f9f9` (Very Light Gray)

### Typography
- Font: Geist Sans (system font stack)
- Headings: Bold, large sizes
- Body: Regular weight

## Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Next Steps

To continue development:

1. Replace placeholder images/visuals with actual assets
2. Implement actual API integrations
3. Add more pages (About, Pricing, Terms, etc.)
4. Set up analytics and tracking
5. Implement form submissions
6. Add more animations and micro-interactions

## Deploy on Vercel

```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.
