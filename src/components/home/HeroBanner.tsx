"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const slides = [
  {
    image: "https://img.myshopline.com/image/store/2000075912/1622516949344/-15_1.png?w=1280&h=1280",
    overline: "Air Fryer with Visible Window",
    headline: "Cook smarter.\nEat better.",
    desc: "360° rapid air circulation for crispy, oil-free cooking. See your food as it cooks through the panoramic window.",
    cta: "Shop Now",
    bg: "bg-[#F5F5F7]",
  },
  {
    image: "https://img.myshopline.com/image/store/2000075912/1622516949344/KFJH007-PNG5.png?w=2500&h=2500",
    overline: "Semi-Automatic Espresso Machine",
    headline: "Barista quality.\nEvery morning.",
    desc: "Professional extraction meets one-touch simplicity. Your perfect cup, at home.",
    cta: "Explore",
    bg: "bg-[#F9F6F2]",
  },
  {
    image: "https://img.myshopline.com/image/store/2000075912/1622516949344/CFJH0061-4-FINAL.png?w=1080&h=1080",
    overline: "High Speed Ionic Hair Dryer",
    headline: "Fast dry.\nZero damage.",
    desc: "110,000 RPM motor with ionic technology. Salon results in half the time.",
    cta: "Discover",
    bg: "bg-[#F5F5F7]",
  },
];

export default function HeroBanner() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const t = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) { if (t.current) clearInterval(t.current); return; }
    t.current = setInterval(() => { setI((p) => (p + 1) % slides.length); }, 6000);
    return () => { if (t.current) clearInterval(t.current); };
  }, [paused]);

  const s = slides[i];

  return (
    <section
      className={`${s.bg} transition-colors duration-700`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-[1200px] px-8 py-20 md:py-28 lg:py-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Text */}
          <div key={i} className="anim-fade-up order-2 md:order-1">
            <p className="text-[12px] font-medium tracking-[0.12em] uppercase text-text-tertiary mb-5">
              {s.overline}
            </p>
            <h1 className="text-[clamp(2.5rem,5vw,3.75rem)] font-semibold text-primary leading-[1.08] tracking-[-0.03em] mb-6 whitespace-pre-line">
              {s.headline}
            </h1>
            <p className="text-[16px] leading-[1.6] text-text-secondary max-w-[380px] mb-9">
              {s.desc}
            </p>
            <a href="#featured-products"
              className="inline-flex items-center text-[14px] font-medium text-white bg-primary px-7 py-3 rounded-full hover:bg-primary-light transition-colors duration-200">
              {s.cta}
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Image */}
          <div key={`img-${i}`} className="anim-fade-up order-1 md:order-2 flex justify-center">
            <Image
              src={s.image}
              alt={s.overline}
              width={520}
              height={520}
              priority={i === 0}
              className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] object-contain"
            />
          </div>
        </div>

        {/* Dots */}
        <div className="flex gap-2 mt-16 md:mt-20">
          {slides.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)}
              className={`h-[3px] rounded-full transition-all duration-500 ${
                idx === i ? "bg-primary w-10" : "bg-black/15 w-5 hover:bg-black/25"
              }`} />
          ))}
        </div>
      </div>
    </section>
  );
}
