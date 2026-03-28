"use client";

import { useCart } from "@/components/cart/CartProvider";
import { formatPrice } from "@/lib/utils";
import { X, Trash2, Plus, Minus, ShoppingBag } from "lucide-react";

const SHIPPING_THRESHOLD = 50;
const SHIPPING_COST = 5.99;

export default function CartDrawer() {
  const { items, removeFromCart, updateQuantity, subtotal, isCartOpen, closeCart } =
    useCart();

  const shippingFree = subtotal >= SHIPPING_THRESHOLD;
  const shippingCost = shippingFree ? 0 : SHIPPING_COST;
  const total = subtotal + shippingCost;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-xl flex flex-col transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="font-heading font-semibold text-lg">Your Cart</h2>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="p-1 rounded-md hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {items.length === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center flex-1 px-6 gap-4 text-center">
            <ShoppingBag className="w-16 h-16 text-gray-300" />
            <p className="font-heading font-semibold text-lg text-gray-700">
              Your cart is empty
            </p>
            <button
              onClick={closeCart}
              className="mt-2 px-6 py-2 bg-primary text-white rounded-[8px] font-medium hover:bg-primary/90 transition-colors"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Cart items list */}
            <ul className="overflow-y-auto flex-1 px-6 py-4 flex flex-col gap-4">
              {items.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-3">
                  {/* Thumbnail */}
                  <div className="w-16 h-16 flex-shrink-0 bg-gray-200 rounded-[8px] flex items-center justify-center overflow-hidden">
                    <span className="text-[9px] text-gray-500 text-center px-1 leading-tight line-clamp-3">
                      {product.name}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0 flex flex-col gap-1">
                    <p className="text-sm font-medium text-gray-800 line-clamp-1">
                      {product.name}
                    </p>
                    <p className="text-xs text-gray-500">{formatPrice(product.price)}</p>

                    {/* Quantity selector */}
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        disabled={quantity <= 1}
                        aria-label="Decrease quantity"
                        className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-6 text-center tabular-nums">
                        {quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        disabled={quantity >= 99}
                        aria-label="Increase quantity"
                        className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Right column: line total + remove */}
                  <div className="flex flex-col items-end justify-between flex-shrink-0">
                    <p className="text-sm font-semibold text-gray-800">
                      {formatPrice(product.price * quantity)}
                    </p>
                    <button
                      onClick={() => removeFromCart(product.id)}
                      aria-label={`Remove ${product.name} from cart`}
                      className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {/* Summary section */}
            <div className="border-t border-gray-200 px-6 py-4 flex flex-col gap-3">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span className="font-medium text-gray-800">{formatPrice(subtotal)}</span>
              </div>

              <div className="flex justify-between text-sm text-gray-600">
                <span>Shipping</span>
                <span className={shippingFree ? "font-semibold text-green-600" : "font-medium text-gray-800"}>
                  {shippingFree ? "FREE" : formatPrice(SHIPPING_COST)}
                </span>
              </div>

              {!shippingFree && (
                <p className="text-xs text-gray-400">
                  Free shipping on orders over $50
                </p>
              )}

              <div className="flex justify-between text-base font-semibold text-gray-900 pt-1 border-t border-gray-100">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>

              <div className="flex flex-col gap-2 mt-1">
                <button
                  onClick={closeCart}
                  className="w-full py-2.5 border border-gray-300 rounded-[8px] text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Continue Shopping
                </button>
                <button
                  onClick={() => alert("Coming Soon!")}
                  className="w-full py-2.5 bg-primary text-white rounded-[8px] text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
