"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";
import { ShoppingCart, Menu, X, ChevronDown } from "lucide-react";

const productCategories = [
  { label: "Kitchen", href: "#" },
  { label: "Cleaning", href: "#" },
  { label: "Personal Care", href: "#" },
];

export default function Navbar() {
  const { itemCount, openCart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setIsDropdownOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border/50">
      <nav className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-heading text-2xl font-bold tracking-tight text-primary">
            Simplus
          </Link>

          <ul className="hidden md:flex items-center gap-10">
            <li>
              <Link href="/" className="text-sm font-medium text-text-light hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li className="relative" ref={dropdownRef}>
              <button
                className="flex items-center gap-1 text-sm font-medium text-text-light hover:text-primary transition-colors"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Products
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {isDropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-48 bg-white shadow-lg rounded-xl border border-border/50 py-2">
                  {productCategories.map((c) => (
                    <Link key={c.label} href={c.href}
                      className="block px-4 py-2.5 text-sm text-text-light hover:text-primary hover:bg-surface transition-colors"
                      onClick={() => setIsDropdownOpen(false)}>
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
            <li>
              <Link href="#" className="text-sm font-medium text-text-light hover:text-primary transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm font-medium text-text-light hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={openCart}
              className="relative p-2.5 rounded-xl hover:bg-surface transition-colors"
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5 text-primary" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-accent text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount > 99 ? "99+" : itemCount}
                </span>
              )}
            </button>
            <button
              className="md:hidden p-2.5 rounded-xl hover:bg-surface transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            {["Home", "Products", "About", "Contact"].map((item) => (
              <Link key={item} href="#"
                className="block py-3 text-sm font-medium text-text-light hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}>
                {item}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
