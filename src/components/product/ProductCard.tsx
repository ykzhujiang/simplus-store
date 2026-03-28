"use client";

import { Product } from "@/types/product";
import { useCart } from "@/components/cart/CartProvider";
import { formatPrice } from "@/lib/utils";
import { Star, ShoppingCart } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const filled = Math.round(product.rating);

  return (
    <div className="group bg-white rounded-2xl border border-border/60 hover:border-border hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative aspect-square bg-surface p-6 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.badge && (
          <span className={`absolute top-4 left-4 text-[11px] font-semibold px-2.5 py-1 rounded-lg ${
            product.badge === "Best Seller" ? "bg-primary text-white" :
            product.badge === "New" ? "bg-accent text-white" : "bg-red-500 text-white"
          }`}>
            {product.badge}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-medium text-primary text-sm leading-snug mb-2 line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`w-3.5 h-3.5 ${i < filled ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`} />
          ))}
          <span className="text-xs text-text-muted ml-1">({product.reviewCount})</span>
        </div>

        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-lg font-bold text-primary">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-text-muted line-through">{formatPrice(product.originalPrice)}</span>
          )}
        </div>

        <button
          onClick={() => addToCart(product)}
          className="w-full flex items-center justify-center gap-2 bg-surface hover:bg-primary hover:text-white text-primary text-sm font-medium py-2.5 rounded-xl border border-border/60 hover:border-primary transition-all duration-200"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
