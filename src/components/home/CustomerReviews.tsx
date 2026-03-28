"use client";

import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { name: "Sarah L.", loc: "🇸🇬 Singapore", rating: 5, text: "The air fryer exceeded all expectations. Visible window is a game-changer!" },
  { name: "Ahmad R.", loc: "🇲🇾 Malaysia", rating: 5, text: "Incredibly lightweight vacuum with powerful suction. Best value for money." },
  { name: "Priya M.", loc: "🇮🇩 Indonesia", rating: 5, text: "Hair dryer is salon-quality at a fraction of the price. Love it!" },
  { name: "James T.", loc: "🇹🇭 Thailand", rating: 5, text: "Espresso machine produces café-quality shots. Nothing else comes close." },
];

export default function CustomerReviews() {
  const [c, setC] = useState(0);
  const t = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    t.current = setInterval(() => { setC((p) => (p + 1) % reviews.length); }, 6000);
    return () => { if (t.current) clearInterval(t.current); };
  }, []);

  return (
    <div className="mx-auto max-w-[1200px] px-4 pb-5">
      <div className="bg-white rounded-lg p-5">
        <h3 className="text-[14px] font-bold text-text mb-4">Customer Reviews</h3>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {reviews.map((r, idx) => (
              <div key={idx} className={`p-4 rounded-lg border ${idx === c ? "border-primary bg-primary/5" : "border-border-light"} transition-all`}>
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-star text-star" />
                  ))}
                </div>
                <p className="text-[13px] text-text leading-relaxed mb-3">{r.text}</p>
                <div>
                  <p className="text-[12px] font-medium text-text">{r.name}</p>
                  <p className="text-[11px] text-text-tertiary">{r.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
