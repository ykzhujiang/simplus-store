"use client";

import { Product } from "@/types/product";
import { useCart } from "@/components/cart/CartProvider";
import { formatPrice } from "@/lib/utils";
import { Star, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const filledStars = Math.round(product.rating);
  const emptyStars = 5 - filledStars;

  const badgeStyles: Record<string, string> = {
    "Best Seller": "bg-[#FF6B35] text-white",
    New: "bg-[#16C79A] text-white",
    Sale: "bg-red-500 text-white",
  };

  return (
    <div
      className="rounded-[12px] bg-white overflow-hidden transition-shadow duration-200"
      style={{
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 6px 20px rgba(0,0,0,0.14)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 2px 8px rgba(0,0,0,0.08)";
      }}
    >
      {/* Image area */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />

        {/* Badge overlay */}
        {product.badge && (
          <span
            className={`absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-full ${badgeStyles[product.badge]}`}
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* Card content */}
      <div className="p-4 flex flex-col gap-3">
        {/* Product name */}
        <h3 className="font-medium text-gray-900 line-clamp-2 leading-snug">
          {product.name}
        </h3>

        {/* Star rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: filledStars }).map((_, i) => (
            <Star
              key={`filled-${i}`}
              className="w-4 h-4 fill-yellow-400 text-yellow-400"
            />
          ))}
          {Array.from({ length: emptyStars }).map((_, i) => (
            <Star
              key={`empty-${i}`}
              className="w-4 h-4 fill-gray-200 text-gray-200"
            />
          ))}
          <span className="text-sm text-gray-500 ml-1">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-gray-900">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Add to Cart button */}
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-[#FF6B35] text-white rounded-[8px] py-2 flex items-center justify-center gap-2 font-medium transition-colors duration-200 hover:bg-[#e55a26]"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
