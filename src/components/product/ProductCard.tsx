"use client";

import { Product } from "@/types/product";
import { useCart } from "@/components/cart/CartProvider";
import { formatPrice } from "@/lib/utils";
import { Star, Plus } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const filled = Math.round(product.rating);

  return (
    <div className="group">
      {/* Image */}
      <div className="relative bg-surface rounded-2xl overflow-hidden aspect-square mb-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.badge && (
          <span className={`absolute top-3 left-3 text-[11px] font-medium px-2.5 py-1 rounded-full ${
            product.badge === "Best Seller" ? "bg-primary text-white" : "bg-accent text-white"
          }`}>
            {product.badge}
          </span>
        )}
        <button
          onClick={() => addToCart(product)}
          className="absolute bottom-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-white text-primary"
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus className="w-4 h-4" strokeWidth={2} />
        </button>
      </div>

      {/* Info */}
      <div className="px-1">
        <div className="flex items-center gap-1 mb-1.5">
          {Array.from({ length: 5 }).map((_, j) => (
            <Star key={j} className={`w-3 h-3 ${j < filled ? "fill-amber-400 text-amber-400" : "fill-border-light text-border-light"}`} />
          ))}
          <span className="text-[11px] text-text-tertiary ml-0.5">({product.reviewCount})</span>
        </div>
        <h3 className="text-[14px] font-medium text-primary leading-snug mb-1.5 line-clamp-1">
          {product.name}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-[15px] font-semibold text-primary">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-[13px] text-text-tertiary line-through">{formatPrice(product.originalPrice)}</span>
          )}
        </div>
      </div>
    </div>
  );
}
