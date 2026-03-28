"use client";

import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { name: "Sarah L.", country: "🇸🇬", rating: 5, text: "The air fryer is amazing! Cooks perfectly every time and the design is so sleek. Best purchase this year." },
  { name: "Ahmad R.", country: "🇲🇾", rating: 5, text: "Love my Simplus vacuum cleaner. Super lightweight, great suction, and the battery lasts forever." },
  { name: "Priya M.", country: "🇮🇩", rating: 4, text: "The hair dryer is salon-quality at a fraction of the price. Dries my hair in minutes!" },
  { name: "James T.", country: "🇹🇭", rating: 5, text: "Bought the espresso machine on a whim — now I can't live without it. Incredible value." },
];

export default function CustomerReviews() {
  const [current, setCurrent] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => { setCurrent((p) => (p + 1) % reviews.length); }, 6000);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, []);

  return (
    <section className="py-20 px-6 lg:px-8 bg-surface">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-14">
          What Our Customers Say
        </h2>

        <div className="relative">
          <div key={current} className="animate-fade-in-up">
            <div className="flex justify-center gap-1 mb-5">
              {Array.from({ length: reviews[current].rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <blockquote className="text-lg md:text-xl text-primary leading-relaxed mb-6 font-medium">
              &ldquo;{reviews[current].text}&rdquo;
            </blockquote>
            <p className="text-text-light text-sm">
              {reviews[current].name} <span className="ml-1">{reviews[current].country}</span>
            </p>
          </div>

          <div className="flex justify-center items-center gap-4 mt-10">
            <button onClick={() => setCurrent((current - 1 + reviews.length) % reviews.length)}
              className="p-2 rounded-xl hover:bg-white border border-border/50 transition-colors">
              <ChevronLeft className="w-4 h-4 text-text-light" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${i === current ? "bg-primary w-6 h-2" : "bg-text-muted/30 w-2 h-2"}`} />
              ))}
            </div>
            <button onClick={() => setCurrent((current + 1) % reviews.length)}
              className="p-2 rounded-xl hover:bg-white border border-border/50 transition-colors">
              <ChevronRight className="w-4 h-4 text-text-light" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
