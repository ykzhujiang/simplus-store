import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border-light">
      <div className="mx-auto max-w-[1200px] px-8 pt-14 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-10">
          <div className="col-span-2">
            <p className="font-heading text-[16px] font-semibold text-primary mb-2">simplus</p>
            <p className="text-[13px] text-text-secondary leading-relaxed max-w-[280px]">
              Affordable, stylish home appliances for modern living across Southeast Asia.
            </p>
          </div>
          {[
            { title: "Shop", links: ["Kitchen", "Cleaning", "Personal Care", "All Products"] },
            { title: "Support", links: ["FAQ", "Shipping", "Returns", "Warranty"] },
            { title: "Company", links: ["About Us", "Contact", "Careers"] },
          ].map((col) => (
            <div key={col.title}>
              <p className="text-[12px] font-semibold text-primary mb-3">{col.title}</p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-[13px] text-text-secondary hover:text-primary transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-border-light gap-2">
          <p className="text-[11px] text-text-tertiary">© 2026 Simplus. All rights reserved.</p>
          <p className="text-[11px] text-text-tertiary">Visa · Mastercard · PayPal · COD</p>
        </div>
      </div>
    </footer>
  );
}
