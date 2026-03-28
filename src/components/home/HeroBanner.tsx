"use client";

import { useState, useEffect, useRef } from "react";

const banners = [
  {
    bgImage: "/simplus-store/images/hero-kitchen.png",
    title: "MEGA SALE",
    subtitle: "Up to 50% Off\nAll Appliances",
    desc: "Free shipping on orders over $50",
  },
  {
    bgImage: "/simplus-store/images/hero-lifestyle.png",
    title: "NEW ARRIVAL",
    subtitle: "Espresso\nCoffee Machine",
    desc: "Barista-quality coffee at home",
  },
  {
    bgImage: "/simplus-store/images/banner-bg.png",
    title: "HOT DEAL",
    subtitle: "High Speed\nHair Dryer",
    desc: "Salon results, everyday simplicity",
  },
];

export default function HeroBanner() {
  const [i, setI] = useState(0);
  const t = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    t.current = setInterval(() => { setI((p) => (p + 1) % banners.length); }, 5000);
    return () => { if (t.current) clearInterval(t.current); };
  }, []);

  const b = banners[i];

  return (
    <div className="mx-auto max-w-[1200px] px-4 pt-4">
      <div className="relative rounded-lg overflow-hidden cursor-pointer min-h-[220px] md:min-h-[320px]"
        style={{ backgroundImage: `url(${b.bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div className="relative flex items-center min-h-[220px] md:min-h-[320px] px-8 md:px-14">
          <div key={i} className="anim-slide z-10 max-w-[480px]">
            <span className="inline-block text-white/90 text-[10px] font-bold tracking-[0.15em] uppercase bg-primary px-3 py-1 rounded-sm mb-3">
              {b.title}
            </span>
            <h2 className="text-white text-[28px] md:text-[40px] font-bold leading-[1.1] mb-3 whitespace-pre-line drop-shadow-lg">
              {b.subtitle}
            </h2>
            <p className="text-white/80 text-[14px] mb-5 drop-shadow">{b.desc}</p>
            <a href="#featured-products"
              className="inline-block bg-primary text-white text-[13px] font-bold px-6 py-2.5 rounded-sm hover:bg-primary-dark transition-colors">
              SHOP NOW
            </a>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {banners.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)}
              className={`w-2 h-2 rounded-full transition-all ${idx === i ? "bg-white w-6" : "bg-white/40"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
