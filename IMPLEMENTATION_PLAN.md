# Simplus Store — Implementation Plan

## Status: V2 complete. All tasks T18–T28 done. Build + lint pass with zero errors/warnings.

## Completed Tasks (V1)

- **T1–T17**: All V1 tasks complete. See git history for details.

## Completed Tasks (V2)

- **T18**: Update Product Data to V2 Spec — All 8 products match spec names, prices, badges, categories. All image URLs use `img.myshopline.com`. No Unsplash URLs in product data.
  - **files_modified**: src/data/products.ts
- **T19**: Add Toast Notification on Add-to-Cart — Created Toast component, wired into CartProvider. Toast auto-dismisses after 2.5s, max 3 visible.
  - **files_modified**: src/components/ui/Toast.tsx (new), src/components/cart/CartProvider.tsx, src/app/layout.tsx, src/app/globals.css
- **T20**: Redesign Hero Banner — Product-centric hero with real product images on clean #F8F9FA background. Brand tagline "美好生活，好用不贵" prominent. 3-slide carousel with CTAs.
  - **files_modified**: src/components/home/HeroBanner.tsx
- **T21**: Cart Drawer Product Thumbnails — Replaced placeholder div with actual product image.
  - **files_modified**: src/components/cart/CartDrawer.tsx
- **T22**: BrandStory Fix Dead /about Link — Changed to `#featured-products` anchor, renamed button "Explore Products".
  - **files_modified**: src/components/home/BrandStory.tsx, src/components/home/FeaturedProducts.tsx (added id)
- **T23**: ProductCard Design Tokens, Star Rating, Hover, inStock — Replaced hardcoded hex with design tokens, used getStarRating(), Tailwind shadow classes, out-of-stock button.
  - **files_modified**: src/components/product/ProductCard.tsx
- **T24**: CartDrawer Escape Key — Added useEffect keydown listener for Escape, stabilized closeCart with useCallback.
  - **files_modified**: src/components/cart/CartDrawer.tsx, src/components/cart/CartProvider.tsx
- **T25**: Navbar Design Token & Logo Link Fixes — Logo uses text-primary, links to `/`, cart badge uses bg-primary. Home links to `/`.
  - **files_modified**: src/components/layout/Navbar.tsx
- **T26**: Footer Shipping Threshold Copy — Updated to "Free delivery on orders over $50".
  - **files_modified**: src/components/layout/Footer.tsx
- **T27**: Migrate img to Next.js Image — All components use next/image. Added remotePatterns to next.config.ts.
  - **files_modified**: src/components/product/ProductCard.tsx, src/components/home/BrandStory.tsx, src/components/home/HeroBanner.tsx, src/components/cart/CartDrawer.tsx, next.config.ts
- **T28**: Build Validation — `pnpm build` and `pnpm lint` both pass with zero errors and zero warnings.

## Out of Scope (Known Gaps, Not Blocking)

- **Dead `#` links**: Navbar, Footer, CategoryShowcase all use `href="#"` for pages that don't exist (products listing, contact, FAQ, etc.). The spec only requires a homepage.
- **Checkout flow**: "Coming Soon" alert is the spec's expected behavior.
- **Search**: Search button is a placeholder per the spec's homepage-only scope.
- **Accessibility deep-dive**: Focus traps, ARIA roles on carousels, skip-nav links, reduced-motion.
- **Social media icons**: Footer uses letter placeholders for TikTok/Shopee/Lazada.
- **Payment method icons**: Footer uses generic CreditCard icon for all methods.
- **SEO metadata**: og:image, twitter:card, etc.
- **`clearCart` unused**: Function exists but no UI calls it.
