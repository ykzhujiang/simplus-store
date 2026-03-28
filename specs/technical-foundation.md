# Technical Foundation

## Job to Be Done
Establish the technical stack and project structure so that all features can be built on a solid, maintainable foundation.

## Requirements

### Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Package Manager**: pnpm
- **Icons**: Lucide React
- **State**: React Context (cart) — keep it simple, no Redux

### Project Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout with nav + footer
│   ├── page.tsx            # Homepage
│   └── globals.css         # Tailwind imports
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── HeroBanner.tsx
│   │   ├── CategoryShowcase.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── BrandStory.tsx
│   │   └── CustomerReviews.tsx
│   ├── product/
│   │   └── ProductCard.tsx
│   └── cart/
│       ├── CartDrawer.tsx
│       └── CartProvider.tsx
├── data/
│   └── products.ts         # Seed product data
├── types/
│   └── product.ts          # TypeScript interfaces
└── lib/
    └── utils.ts            # Shared utilities
```

### Design System
- **Colors**: 
  - Primary: #FF6B35 (Simplus orange-red, energetic)
  - Secondary: #1A1A2E (dark navy)
  - Accent: #16C79A (fresh green for CTAs)
  - Background: #FAFAFA (off-white)
  - Text: #333333
- **Font**: Inter (body) + Poppins (headings)
- **Border Radius**: 12px (cards), 8px (buttons)
- **Shadows**: Subtle, modern (0 2px 8px rgba(0,0,0,0.08))

### Performance
- Use Next.js Image component for optimized images
- Static generation where possible
- Code splitting per page

### Quality Gates
- TypeScript strict mode
- ESLint with Next.js recommended config
- `next build` must pass with zero errors

## Acceptance Criteria
- [ ] `pnpm dev` starts successfully
- [ ] `pnpm build` completes with zero errors
- [ ] `pnpm lint` passes
- [ ] TypeScript strict mode enabled, no type errors
- [ ] Tailwind CSS configured and working
- [ ] Google Fonts (Inter + Poppins) loaded
