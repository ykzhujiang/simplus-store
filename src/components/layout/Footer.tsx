import { Facebook, Instagram, CreditCard } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-white tracking-tight">
              Simplus
            </h2>
            <p className="text-sm text-white/70 leading-relaxed">
              Your one-stop destination for quality products at unbeatable
              prices. We bring simplicity and value together for a better
              shopping experience.
            </p>
            <p className="text-xs font-heading font-semibold tracking-widest uppercase text-white/50">
              Simple + Plus
            </p>
          </div>

          {/* Column 2: Customer Service */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-white/50">
              Customer Service
            </h3>
            <ul className="space-y-2">
              {[
                { label: "FAQ", href: "#" },
                { label: "Shipping", href: "#" },
                { label: "Returns", href: "#" },
                { label: "Contact", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-white/50">
              Follow Us
            </h3>
            <div className="space-y-3">
              {/* Icon-based social links */}
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-200"
              >
                <Facebook size={18} strokeWidth={1.75} />
                <span>Facebook</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-200"
              >
                <Instagram size={18} strokeWidth={1.75} />
                <span>Instagram</span>
              </a>
              {/* Text-only links for platforms without Lucide icons */}
              {[
                { label: "TikTok", href: "#" },
                { label: "Shopee", href: "#" },
                { label: "Lazada", href: "#" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  <span className="inline-flex items-center justify-center w-[18px] h-[18px] text-xs font-bold border border-white/30 rounded-sm">
                    {link.label[0]}
                  </span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Payment & Shipping */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-white/50">
              Payment &amp; Shipping
            </h3>
            <div className="space-y-3">
              <p className="text-xs text-white/50 uppercase tracking-wide">
                We accept
              </p>
              <div className="flex flex-wrap gap-2">
                {["Visa", "Mastercard", "PayPal", "COD"].map((method) => (
                  <span
                    key={method}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded border border-white/20 text-xs text-white/70 bg-white/5"
                  >
                    <CreditCard size={12} strokeWidth={1.75} />
                    {method}
                  </span>
                ))}
              </div>
              <p className="text-xs text-white/50 leading-relaxed pt-1">
                Fast and reliable shipping nationwide. Free delivery on orders
                above the minimum threshold.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Simplus. All rights reserved.
          </p>
          <p className="text-xs text-white/30 font-heading tracking-widest uppercase">
            Simple + Plus
          </p>
        </div>
      </div>
    </footer>
  );
}
