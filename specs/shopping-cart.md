# Shopping Cart

## Job to Be Done
Allow visitors to add products to a cart, adjust quantities, and see a running total — preparing for future checkout integration.

## Requirements

### Cart State
- Client-side state management (React Context or Zustand)
- Persist cart to localStorage so it survives page refresh
- Cart items: product reference, quantity, subtotal

### Add to Cart
- "Add to Cart" button on product cards
- Click adds 1 unit; if already in cart, increment quantity
- Brief toast/notification: "Added to cart ✓"
- Cart icon in nav updates with item count badge

### Cart Drawer/Page
- Slide-out drawer from right side (triggered by cart icon click)
- List of cart items: thumbnail, name, unit price, quantity selector, line total, remove button
- Quantity selector: minus/plus buttons, min 1, max 99
- Remove item button (trash icon)
- Cart summary: subtotal, estimated shipping ("Free shipping over $50"), total
- "Continue Shopping" and "Checkout" buttons
- "Checkout" shows a "Coming Soon" message for now

### Empty Cart State
- Friendly empty state: illustration + "Your cart is empty" + "Start Shopping" CTA

## Acceptance Criteria
- [ ] Can add product to cart from product card
- [ ] Cart icon shows correct item count
- [ ] Cart drawer opens/closes smoothly
- [ ] Quantity can be adjusted (increment/decrement)
- [ ] Items can be removed from cart
- [ ] Cart persists across page refreshes (localStorage)
- [ ] Empty cart shows appropriate message
- [ ] Subtotal and total calculate correctly
