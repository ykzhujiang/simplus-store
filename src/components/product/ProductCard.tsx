"use client";

import { Product } from "@/types/product";
import { useCart } from "@/components/cart/CartProvider";
import { formatPrice } from "@/lib/utils";
import { Star, ShoppingCart } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const filled = Math.round(product.rating);

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group bg-white rounded-sm overflow-hidden hover:shadow-md transition-shadow duration-200 cursor-pointer relative">
      {/* Badges */}
      {product.badge && (
        <span className={`absolute top-2 left-0 z-10 text-[10px] font-bold text-white px-2 py-0.5 ${
          product.badge === "Best Seller" ? "bg-primary" : "bg-badge-new"
        }`}>
          {product.badge}
        </span>
      )}
      {discount > 0 && (
        <span className="absolute top-2 right-2 z-10 text-[10px] font-bold text-white bg-badge-sale px-1.5 py-0.5 rounded-sm">
          -{discount}%
        </span>
      )}

      {/* Image */}
      <div className="aspect-square bg-white overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="p-3">
        <h3 className="text-[13px] text-text leading-snug mb-2 line-clamp-2 min-h-[36px]">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-1.5">
          <span className="text-[18px] font-bold text-text-price">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-[12px] text-text-tertiary line-through">{formatPrice(product.originalPrice)}</span>
          )}
        </div>

        {/* Rating & sold */}
        <div className="flex items-center gap-1">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, j) => (
              <Star key={j} className={`w-[10px] h-[10px] ${j < filled ? "fill-star text-star" : "fill-gray-200 text-gray-200"}`} />
            ))}
          </div>
          <span className="text-[11px] text-text-tertiary">({product.reviewCount} sold)</span>
        </div>

        {/* Add to cart */}
        <button onClick={(e) => { e.stopPropagation(); addToCart(product); }}
          className="mt-3 w-full flex items-center justify-center gap-1.5 bg-primary text-white text-[12px] font-medium py-2 rounded-sm hover:bg-primary-dark transition-colors">
          <ShoppingCart className="w-3.5 h-3.5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
