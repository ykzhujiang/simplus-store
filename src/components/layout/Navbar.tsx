"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";
import { Search, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";

const productCategories = [
  { label: "Kitchen Appliances", href: "#" },
  { label: "Cleaning Appliances", href: "#" },
  { label: "Personal Care", href: "#" },
];

export default function Navbar() {
  const { itemCount, openCart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  const dropdownRef = useRef<HTMLLIElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsProductsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    }
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileProductsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-heading text-xl font-bold text-primary shrink-0"
          >
            Simplus
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link
                href="/"
                className="text-text hover:text-primary transition-colors"
              >
                Home
              </Link>
            </li>

            {/* Products Dropdown */}
            <li className="relative" ref={dropdownRef}>
              <button
                className="flex items-center gap-1 text-text hover:text-primary transition-colors"
                onClick={() =>
                  setIsProductsDropdownOpen((prev) => !prev)
                }
                aria-expanded={isProductsDropdownOpen}
                aria-haspopup="true"
              >
                Products
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isProductsDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {isProductsDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 w-52 bg-white shadow-lg rounded-[8px] z-50 py-1">
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.label}
                      href={cat.href}
                      className="block px-4 py-2 text-text hover:text-primary hover:bg-gray-50 transition-colors"
                      onClick={() => setIsProductsDropdownOpen(false)}
                    >
                      {cat.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            <li>
              <Link
                href="#"
                className="text-text hover:text-primary transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-text hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <button
              aria-label="Search"
              className="text-text hover:text-primary transition-colors p-1"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Cart */}
            <button
              aria-label={`Open cart, ${itemCount} item${itemCount !== 1 ? "s" : ""}`}
              className="relative text-text hover:text-primary transition-colors p-1"
              onClick={openCart}
            >
              <ShoppingCart className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center leading-none">
                  {itemCount > 99 ? "99+" : itemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden text-text hover:text-primary transition-colors p-1"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden border-t border-gray-100 py-3"
          >
            <ul className="flex flex-col">
              <li>
                <Link
                  href="#"
                  className="block px-2 py-3 text-text hover:text-primary transition-colors"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>

              {/* Mobile Products Accordion */}
              <li>
                <button
                  className="w-full flex items-center justify-between px-2 py-3 text-text hover:text-primary transition-colors"
                  onClick={() =>
                    setIsMobileProductsOpen((prev) => !prev)
                  }
                  aria-expanded={isMobileProductsOpen}
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isMobileProductsOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {isMobileProductsOpen && (
                  <ul className="bg-gray-50 rounded-[8px] mx-2 mb-1">
                    {productCategories.map((cat) => (
                      <li key={cat.label}>
                        <Link
                          href={cat.href}
                          className="block px-4 py-2.5 text-text hover:text-primary transition-colors"
                          onClick={closeMobileMenu}
                        >
                          {cat.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <Link
                  href="#"
                  className="block px-2 py-3 text-text hover:text-primary transition-colors"
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-2 py-3 text-text hover:text-primary transition-colors"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
