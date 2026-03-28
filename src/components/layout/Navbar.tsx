"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";
import { ShoppingBag, Menu, X } from "lucide-react";

export default function Navbar() {
  const { itemCount, openCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-2xl border-b border-black/5">
      <nav className="mx-auto max-w-[1200px] px-8">
        <div className="flex items-center justify-between h-[52px]">
          <Link href="/" className="text-[17px] font-semibold tracking-tight text-primary font-heading">
            simplus
          </Link>

          <div className="hidden md:flex items-center gap-9">
            {["Home", "Products", "About", "Contact"].map((item) => (
              <Link key={item} href="#"
                className="text-[13px] text-text-secondary hover:text-primary transition-colors duration-200">
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <button onClick={openCart}
              className="relative flex items-center justify-center w-9 h-9 rounded-full hover:bg-surface transition-colors"
              aria-label="Cart">
              <ShoppingBag className="w-[18px] h-[18px] text-primary" strokeWidth={1.5} />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-accent text-white text-[10px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center leading-none">
                  {itemCount}
                </span>
              )}
            </button>
            <button className="md:hidden flex items-center justify-center w-9 h-9 rounded-full hover:bg-surface transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
              {mobileOpen ? <X className="w-[18px] h-[18px]" /> : <Menu className="w-[18px] h-[18px]" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-5 pt-2 border-t border-black/5">
            {["Home", "Products", "About", "Contact"].map((item) => (
              <Link key={item} href="#"
                className="block py-2.5 text-[15px] text-text-secondary hover:text-primary"
                onClick={() => setMobileOpen(false)}>
                {item}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
