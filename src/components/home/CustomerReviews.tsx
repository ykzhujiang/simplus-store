"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Review {
  name: string;
  flag: string;
  rating: number;
  text: string;
}

const reviews: Review[] = [
  {
    name: "Sarah L.",
    flag: "🇸🇬",
    rating: 5,
    text: "The air fryer changed my cooking game! Perfect size for my small kitchen.",
  },
  {
    name: "Ahmad R.",
    flag: "🇲🇾",
    rating: 5,
    text: "Best vacuum cleaner at this price. Powerful suction and long battery life.",
  },
  {
    name: "Lisa T.",
    flag: "🇹🇭",
    rating: 4,
    text: "Love the hair dryer! Dries quickly and the compact design is great for travel.",
  },
  {
    name: "James W.",
    flag: "🇵🇭",
    rating: 5,
    text: "The multicooker does everything — rice, soup, stew. Amazing value for money.",
  },
  {
    name: "Mei C.",
    flag: "🇮🇩",
    rating: 4,
    text: "Garment steamer works well on most fabrics. Heats up fast and easy to use.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={18}
          className={
            i < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-200 text-gray-200"
          }
        />
      ))}
    </div>
  );
}

export default function CustomerReviews() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setCurrent((index + reviews.length) % reviews.length);
  }, []);

  const prev = useCallback(() => {
    goTo(current - 1);
  }, [current, goTo]);

  const next = useCallback(() => {
    goTo(current + 1);
  }, [current, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl font-bold text-center text-gray-900 mb-10">
          What Our Customers Say
        </h2>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel track */}
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="min-w-full px-4"
                aria-hidden={index !== current}
              >
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center gap-4">
                  <StarRating rating={review.rating} />
                  <p className="text-gray-700 text-lg leading-relaxed">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-2 text-gray-900 font-semibold">
                    <span className="text-2xl">{review.flag}</span>
                    <span>{review.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Prev button */}
          <button
            onClick={prev}
            aria-label="Previous review"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>

          {/* Next button */}
          <button
            onClick={next}
            aria-label="Next review"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
          >
            <ChevronRight size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              aria-label={`Go to review ${index + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 focus:outline-none ${
                index === current
                  ? "bg-gray-800"
                  : "bg-gray-300 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
