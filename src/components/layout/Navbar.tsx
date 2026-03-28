"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";
import { ShoppingCart, Search, Menu, X } from "lucide-react";

export default function Navbar() {
  const { itemCount, openCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="flex items-center h-[60px] gap-4">
            {/* Logo */}
            <Link href="/" className="text-white text-[22px] font-bold tracking-tight shrink-0 mr-6">
              Simplus
            </Link>

            {/* Search */}
            <div className="hidden md:flex flex-1 max-w-[600px]">
              <div className="flex w-full">
                <input
                  type="text"
                  placeholder="Search in Simplus store..."
                  className="flex-1 h-[36px] px-4 text-[13px] rounded-l-sm outline-none text-text bg-white"
                  readOnly
                />
                <button className="h-[36px] px-5 bg-primary-dark text-white rounded-r-sm hover:bg-[#C24400] transition-colors">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 ml-auto">
              {/* Cart */}
              <button onClick={openCart}
                className="relative flex items-center gap-1.5 text-white hover:opacity-80 transition-opacity"
                aria-label="Cart">
                <ShoppingCart className="w-5 h-5" strokeWidth={1.8} />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-badge-sale text-white text-[10px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
              {/* Mobile menu */}
              <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category nav */}
      <div className="bg-white border-b border-border hidden md:block">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="flex items-center h-[40px] gap-8">
            {["All Products", "Kitchen", "Cleaning", "Personal Care", "Best Sellers", "New Arrivals"].map((item) => (
              <Link key={item} href="#featured-products"
                className="text-[13px] text-text-secondary hover:text-primary transition-colors whitespace-nowrap">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-border px-4 py-3">
          {/* Mobile search */}
          <div className="flex mb-3">
            <input type="text" placeholder="Search..." className="flex-1 h-[36px] px-3 text-[13px] border border-border rounded-l-sm outline-none" readOnly />
            <button className="h-[36px] px-4 bg-primary text-white rounded-r-sm"><Search className="w-4 h-4" /></button>
          </div>
          {["All Products", "Kitchen", "Cleaning", "Personal Care"].map((item) => (
            <Link key={item} href="#" className="block py-2.5 text-[13px] text-text-secondary hover:text-primary"
              onClick={() => setMobileOpen(false)}>
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
