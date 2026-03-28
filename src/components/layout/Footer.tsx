import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border mt-5">
      <div className="mx-auto max-w-[1200px] px-4 pt-10 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8 border-b border-border-light">
          <div>
            <h4 className="text-[12px] font-bold text-text uppercase mb-3">Customer Care</h4>
            <ul className="space-y-2">
              {["Help Centre", "How to Buy", "Returns & Refund", "Contact Us", "FAQ"].map((l) => (
                <li key={l}><Link href="#" className="text-[12px] text-text-secondary hover:text-primary transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] font-bold text-text uppercase mb-3">Simplus</h4>
            <ul className="space-y-2">
              {["About Us", "Careers", "Blog", "Press", "Find Us"].map((l) => (
                <li key={l}><Link href="#" className="text-[12px] text-text-secondary hover:text-primary transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] font-bold text-text uppercase mb-3">Payment Methods</h4>
            <div className="flex flex-wrap gap-2">
              {["Visa", "Mastercard", "PayPal", "COD"].map((p) => (
                <span key={p} className="text-[11px] text-text-tertiary border border-border rounded px-2 py-1">{p}</span>
              ))}
            </div>
            <h4 className="text-[12px] font-bold text-text uppercase mt-5 mb-3">Delivery Services</h4>
            <p className="text-[11px] text-text-tertiary">SPX Express · J&T · Ninja Van</p>
          </div>
          <div>
            <h4 className="text-[12px] font-bold text-text uppercase mb-3">Follow Us</h4>
            <div className="flex flex-wrap gap-2">
              {["Facebook", "Instagram", "TikTok"].map((s) => (
                <Link key={s} href="#" className="text-[11px] text-text-tertiary border border-border rounded px-2 py-1 hover:text-primary hover:border-primary transition-colors">{s}</Link>
              ))}
            </div>
            <h4 className="text-[12px] font-bold text-text uppercase mt-5 mb-3">Simplus App</h4>
            <p className="text-[11px] text-text-tertiary">Coming Soon</p>
          </div>
        </div>
        <p className="text-[11px] text-text-tertiary text-center pt-5">
          © 2026 Simplus. All rights reserved. Simple + Plus — Good Life, Great Value.
        </p>
      </div>
    </footer>
  );
}
