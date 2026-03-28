import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white/70">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-heading text-xl font-bold text-white mb-4 block">
              Simplus
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              Simple + Plus — affordable, stylish home appliances for modern living.
            </p>
            <p className="text-xs text-white/40">© 2026 Simplus. All rights reserved.</p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Shop</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Kitchen</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Cleaning</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Personal Care</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Best Sellers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Support</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Shipping</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Returns</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Follow Us</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Facebook</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Instagram</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">TikTok</Link></li>
            </ul>
            <div className="mt-6">
              <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Payment</h4>
              <p className="text-xs">Visa · Mastercard · PayPal · COD</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
