"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  image: string;
  headline: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
}

const slides: Slide[] = [
  {
    image:
      "https://img.myshopline.com/image/store/2000075912/1622516949344/-15_1.png?w=1280&h=1280",
    headline: "Good Life, Great Value",
    subtitle:
      "Affordable, stylish home appliances for modern living — that's the Simplus way.",
    ctaLabel: "Shop Now",
    ctaHref: "#featured-products",
  },
  {
    image:
      "https://img.myshopline.com/image/store/2000075912/1622516949344/KFJH007-PNG5.png?w=2500&h=2500",
    headline: "Kitchen Essentials",
    subtitle:
      "Cook smarter with our best-selling kitchen appliances — from air fryers to espresso machines.",
    ctaLabel: "Explore Kitchen",
    ctaHref: "#featured-products",
  },
  {
    image:
      "https://img.myshopline.com/image/store/2000075912/1622516949344/CFJH0061-4-FINAL.png?w=1080&h=1080",
    headline: "Personal Care Perfection",
    subtitle: "Look and feel your best every day with Simplus personal care.",
    ctaLabel: "Discover More",
    ctaHref: "#featured-products",
  },
];

export default function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToSlide = (index: number) => {
    setCurrentIndex((index + slides.length) % slides.length);
  };

  const goToPrev = () => {
    goToSlide(currentIndex - 1);
  };

  const goToNext = () => {
    goToSlide(currentIndex + 1);
  };

  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isPaused]);

  return (
    <section
      className="relative w-full overflow-hidden bg-[#F8F9FA]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides track */}
      <div
        className="flex w-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-full min-h-[50vh] md:min-h-[70vh] flex items-center"
          >
            <div className="max-w-7xl mx-auto w-full px-6 md:px-16 lg:px-24 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
              {/* Text content */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-primary font-heading text-sm font-semibold uppercase tracking-widest mb-3">
                  美好生活，好用不贵
                </p>
                <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-4">
                  {slide.headline}
                </h1>
                <p className="text-text-light text-base md:text-lg lg:text-xl mb-8 max-w-lg">
                  {slide.subtitle}
                </p>
                <a
                  href={slide.ctaHref}
                  className="inline-block bg-primary text-white font-semibold px-7 py-3 rounded-[8px] hover:bg-primary/90 active:scale-95 transition-all duration-200"
                >
                  {slide.ctaLabel}
                </a>
              </div>

              {/* Product image */}
              <div className="flex-1 flex justify-center">
                <Image
                  src={slide.image}
                  alt={slide.headline}
                  width={384}
                  height={384}
                  priority={index === 0}
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Prev button */}
      <button
        onClick={goToPrev}
        aria-label="Previous slide"
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 bg-secondary/10 hover:bg-secondary/20 text-secondary rounded-full p-2 transition-colors duration-200 z-10"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={goToNext}
        aria-label="Next slide"
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 bg-secondary/10 hover:bg-secondary/20 text-secondary rounded-full p-2 transition-colors duration-200 z-10"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Navigation dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary w-4 h-4"
                : "bg-secondary/20 hover:bg-secondary/40 w-2.5 h-2.5"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
