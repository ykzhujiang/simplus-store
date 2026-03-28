"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  gradientFrom: string;
  gradientTo: string;
  headline: string;
  subtitle: string;
  ctaLabel: string;
  ctaTextColor: string;
}

const slides: Slide[] = [
  {
    gradientFrom: "#1A1A2E",
    gradientTo: "#2D2D44",
    headline: "Top Choice of Appliances for Young",
    subtitle: "Simple design, great value — that's the Simplus way",
    ctaLabel: "Shop Now",
    ctaTextColor: "#1A1A2E",
  },
  {
    gradientFrom: "#FF6B35",
    gradientTo: "#FF8F5E",
    headline: "Kitchen Essentials",
    subtitle: "Cook smarter with our best-selling kitchen appliances",
    ctaLabel: "Explore Kitchen",
    ctaTextColor: "#FF6B35",
  },
  {
    gradientFrom: "#16C79A",
    gradientTo: "#1DD1A1",
    headline: "Clean Living Made Easy",
    subtitle: "Powerful cleaning solutions for modern homes",
    ctaLabel: "Shop Cleaning",
    ctaTextColor: "#16C79A",
  },
  {
    gradientFrom: "#6C5CE7",
    gradientTo: "#A29BFE",
    headline: "Personal Care Perfection",
    subtitle: "Look and feel your best every day",
    ctaLabel: "Discover More",
    ctaTextColor: "#6C5CE7",
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
      className="relative w-full overflow-hidden min-h-[40vh] md:min-h-[60vh]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides track */}
      <div
        className="flex w-full h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-full min-h-[40vh] md:min-h-[60vh] flex items-center justify-center px-6 md:px-16 lg:px-24"
            style={{
              background: `linear-gradient(135deg, ${slide.gradientFrom} 0%, ${slide.gradientTo} 100%)`,
            }}
          >
            <div className="max-w-3xl text-center md:text-left">
              <h1
                className="text-white font-heading text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
              >
                {slide.headline}
              </h1>
              <p className="text-white/80 text-base md:text-lg lg:text-xl mb-8 max-w-xl">
                {slide.subtitle}
              </p>
              <button
                className="inline-block bg-white font-semibold px-7 py-3 rounded-[8px] hover:opacity-90 active:scale-95 transition-all duration-200"
                style={{ color: slide.ctaTextColor }}
              >
                {slide.ctaLabel}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Prev button */}
      <button
        onClick={goToPrev}
        aria-label="Previous slide"
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors duration-200 z-10"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={goToNext}
        aria-label="Next slide"
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors duration-200 z-10"
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
                ? "bg-white w-4 h-4"
                : "bg-white/40 hover:bg-white/70 w-2.5 h-2.5"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
