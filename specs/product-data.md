# Product Data & Display

## Job to Be Done
Display Simplus products with accurate information so visitors can browse, compare, and add items to cart.

## Requirements

### Product Data Model
Each product has:
- `id`: unique identifier
- `name`: product name (English)
- `slug`: URL-friendly name
- `category`: one of "kitchen", "cleaning", "personal-care"
- `price`: number in USD
- `originalPrice`: optional, for showing discounts
- `rating`: 1-5 stars (decimal)
- `reviewCount`: number of reviews
- `image`: primary product image URL
- `images`: array of additional images
- `description`: short description (1-2 sentences)
- `features`: array of feature strings
- `inStock`: boolean
- `badge`: optional ("Best Seller", "New", "Sale")

### Seed Products (based on real Simplus lineup)
1. **Air Fryer 4.5L** - Kitchen - $49.99 - Best Seller
2. **Cordless Vacuum Cleaner** - Cleaning - $69.99
3. **Hair Dryer 1600W** - Personal Care - $29.99
4. **Garment Steamer** - Personal Care - $34.99
5. **Multi-function Blender** - Kitchen - $39.99
6. **Electric Multicooker** - Kitchen - $59.99
7. **Robot Vacuum** - Cleaning - $89.99 - New
8. **Dehumidifier** - Cleaning - $79.99

### Product Card Component
- Product image with aspect ratio 1:1, object-fit cover
- Badge overlay (top-left corner) if applicable
- Product name (truncate to 2 lines)
- Star rating display (filled/empty stars + review count)
- Price display: current price bold, original price strikethrough if on sale
- "Add to Cart" button
- Hover: image zoom effect, shadow elevation

### Category Filtering
- Filter bar on products page (not homepage, but prepare the component)
- Filter by category
- Sort by: Price (low-high, high-low), Rating, Newest

## Acceptance Criteria
- [ ] All 8 seed products render correctly in product grid
- [ ] Product cards show all required information
- [ ] Badge displays correctly for Best Seller and New items
- [ ] Sale price formatting works (strikethrough original)
- [ ] Images load with proper aspect ratio and fallback placeholder
