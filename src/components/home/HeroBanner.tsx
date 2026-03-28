"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    image: "https://img.myshopline.com/image/store/2000075912/1622516949344/-15_1.png?w=1280&h=1280",
    tag: "Best Seller",
    headline: "Good Life,\nGreat Value.",
    subtitle: "Affordable, stylish home appliances designed for modern living.",
    cta: "Shop Now",
  },
  {
    image: "https://img.myshopline.com/image/store/2000075912/1622516949344/KFJH007-PNG5.png?w=2500&h=2500",
    tag: "New Arrival",
    headline: "Espresso\nat Home.",
    subtitle: "Barista-quality coffee at the press of a button.",
    cta: "Explore",
  },
  {
    image: "https://img.myshopline.com/image/store/2000075912/1622516949344/CFJH0061-4-FINAL.png?w=1080&h=1080",
    tag: "Popular",
    headline: "High Speed\nHair Care.",
    subtitle: "Salon-quality results, everyday simplicity.",
    cta: "Discover",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) { if (timer.current) clearInterval(timer.current); return; }
    timer.current = setInterval(() => { setCurrent((p) => (p + 1) % slides.length); }, 5000);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [paused]);

  const slide = slides[current];

  return (
    <section
      className="relative overflow-hidden bg-surface"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 lg:gap-24">
          {/* Text */}
          <div key={current} className="flex-1 text-center md:text-left animate-fade-in-up">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4 bg-accent/10 px-3 py-1 rounded-full">
              {slide.tag}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-[1.1] mb-5 whitespace-pre-line">
              {slide.headline}
            </h1>
            <p className="text-text-light text-base md:text-lg max-w-md mb-8 leading-relaxed">
              {slide.subtitle}
            </p>
            <a
              href="#featured-products"
              className="inline-flex items-center gap-2 bg-primary text-white font-medium text-sm px-7 py-3.5 rounded-xl hover:bg-primary-dark transition-all duration-200 active:scale-[0.98]"
            >
              {slide.cta}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Product Image */}
          <div key={`img-${current}`} className="flex-1 flex justify-center animate-fade-in-up">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/5 rounded-full blur-3xl scale-110" />
              <Image
                src={slide.image}
                alt={slide.headline}
                width={420}
                height={420}
                priority={current === 0}
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center md:justify-start gap-2 mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-primary w-8 h-2.5"
                  : "bg-text-muted/40 hover:bg-text-muted w-2.5 h-2.5"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
