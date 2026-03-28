import { Truck, Shield, Headphones } from "lucide-react";

const features = [
  { icon: Truck, title: "Free Delivery", desc: "Complimentary shipping across Southeast Asia on orders over $50." },
  { icon: Shield, title: "1-Year Warranty", desc: "Every product is backed by a comprehensive manufacturer warranty." },
  { icon: Headphones, title: "Expert Support", desc: "Our dedicated team is available to help before, during, and after purchase." },
];

export default function BrandStory() {
  return (
    <section className="bg-surface">
      {/* Features strip */}
      <div className="mx-auto max-w-[1200px] px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="text-center">
                <Icon className="w-6 h-6 text-text-tertiary mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="text-[15px] font-semibold text-primary mb-2">{f.title}</h3>
                <p className="text-[13px] text-text-secondary leading-relaxed max-w-[260px] mx-auto">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Brand banner */}
      <div className="bg-primary text-white">
        <div className="mx-auto max-w-[1200px] px-8 py-20 text-center">
          <p className="text-[13px] tracking-[0.15em] uppercase text-white/50 mb-4">Since 2021 · Southeast Asia</p>
          <h2 className="font-heading text-[clamp(1.5rem,3.5vw,2.75rem)] font-semibold leading-tight mb-3">
            美好生活，好用不贵
          </h2>
          <p className="text-[16px] text-white/60 italic">Simple + Plus — Good Life, Great Value</p>
        </div>
      </div>
    </section>
  );
}
