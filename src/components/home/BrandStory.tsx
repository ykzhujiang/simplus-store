import { Truck, Shield, Headphones, RotateCcw } from "lucide-react";

const features = [
  { icon: Truck, text: "Free Delivery", sub: "Orders over $50" },
  { icon: Shield, text: "100% Authentic", sub: "Genuine products" },
  { icon: RotateCcw, text: "15-Day Returns", sub: "Easy refund" },
  { icon: Headphones, text: "24/7 Support", sub: "Always available" },
];

export default function BrandStory() {
  return (
    <>
      {/* Trust badges */}
      <div className="mx-auto max-w-[1200px] px-4 pb-5">
        <div className="bg-white rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border-light">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.text} className="flex items-center gap-3 px-5 py-4">
                  <Icon className="w-6 h-6 text-primary shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-[13px] font-medium text-text">{f.text}</p>
                    <p className="text-[11px] text-text-tertiary">{f.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Brand banner with lifestyle background */}
      <div className="mx-auto max-w-[1200px] px-4 pb-5">
        <div className="relative rounded-lg overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/simplus-store/images/hero-lifestyle.png" alt="Simplus lifestyle" className="w-full h-[200px] md:h-[240px] object-cover" />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
            <p className="text-white/50 text-[11px] tracking-[0.15em] uppercase mb-2">Since 2021 · Southeast Asia</p>
            <h2 className="text-white text-[24px] md:text-[32px] font-bold mb-1">美好生活，好用不贵</h2>
            <p className="text-white/70 text-[14px]">Simple + Plus — Good Life, Great Value</p>
          </div>
        </div>
      </div>
    </>
  );
}
