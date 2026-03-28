import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1D1D1F] text-[#86868B]">
      <div className="mx-auto max-w-[1200px] px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          <div className="col-span-2 md:col-span-1">
            <p className="font-heading text-[15px] font-semibold text-white mb-3">simplus</p>
            <p className="text-[12px] leading-relaxed">
              Simple + Plus. Affordable, stylish appliances for modern living across Southeast Asia.
            </p>
          </div>
          {[
            { title: "Shop", links: ["Kitchen", "Cleaning", "Personal Care", "All Products"] },
            { title: "Support", links: ["FAQ", "Shipping", "Returns", "Warranty"] },
            { title: "Company", links: ["About Us", "Contact", "Careers"] },
          ].map((col) => (
            <div key={col.title}>
              <p className="text-[11px] font-semibold text-white/40 uppercase tracking-[0.1em] mb-4">{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-[12px] hover:text-white transition-colors duration-200">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 gap-3">
          <p className="text-[11px] text-white/30">© 2026 Simplus. All rights reserved.</p>
          <p className="text-[11px] text-white/30">Visa · Mastercard · PayPal · COD</p>
        </div>
      </div>
    </footer>
  );
}
