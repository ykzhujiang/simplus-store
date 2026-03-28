"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const banners = [
  {
    bg: "linear-gradient(135deg, #FF6B2C 0%, #F85606 50%, #E04D05 100%)",
    title: "MEGA SALE",
    subtitle: "Up to 50% Off on All Appliances",
    desc: "Free shipping on orders over $50",
    image: "https://img.myshopline.com/image/store/2000075912/1622516949344/-15_1.png?w=1280&h=1280",
  },
  {
    bg: "linear-gradient(135deg, #1A1A2E 0%, #16213E 50%, #0F3460 100%)",
    title: "NEW ARRIVAL",
    subtitle: "Espresso Coffee Machine",
    desc: "Barista-quality coffee at home",
    image: "https://img.myshopline.com/image/store/2000075912/1622516949344/KFJH007-PNG5.png?w=2500&h=2500",
  },
  {
    bg: "linear-gradient(135deg, #00BFA5 0%, #00897B 100%)",
    title: "HOT DEAL",
    subtitle: "High Speed Hair Dryer",
    desc: "Salon results, everyday simplicity",
    image: "https://img.myshopline.com/image/store/2000075912/1622516949344/CFJH0061-4-FINAL.png?w=1080&h=1080",
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
      <div className="relative rounded-lg overflow-hidden cursor-pointer" style={{ background: b.bg }}>
        <div className="flex items-center min-h-[200px] md:min-h-[280px] px-8 md:px-14">
          <div key={i} className="anim-slide flex-1">
            <span className="inline-block text-white/80 text-[11px] font-bold tracking-[0.15em] uppercase bg-white/15 px-3 py-1 rounded mb-3">
              {b.title}
            </span>
            <h2 className="text-white text-[24px] md:text-[36px] font-bold leading-tight mb-2">
              {b.subtitle}
            </h2>
            <p className="text-white/70 text-[14px] mb-5">{b.desc}</p>
            <a href="#featured-products"
              className="inline-block bg-white text-primary text-[13px] font-bold px-6 py-2.5 rounded-sm hover:bg-gray-100 transition-colors">
              SHOP NOW
            </a>
          </div>
          <div className="hidden md:block flex-shrink-0">
            <Image src={b.image} alt={b.subtitle} width={240} height={240}
              className="w-[200px] h-[200px] md:w-[240px] md:h-[240px] object-contain drop-shadow-lg" priority={i === 0} />
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {banners.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)}
              className={`w-2 h-2 rounded-full transition-all ${idx === i ? "bg-white w-5" : "bg-white/40"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
