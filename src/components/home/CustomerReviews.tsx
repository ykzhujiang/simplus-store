"use client";

import { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";

const reviews = [
  { name: "Sarah L.", loc: "Singapore", rating: 5, text: "The air fryer exceeded all expectations. The visible window is a game-changer — I can finally watch my food cook without opening the basket." },
  { name: "Ahmad R.", loc: "Malaysia", rating: 5, text: "Incredibly lightweight vacuum with powerful suction. Battery lasts through my entire apartment. Best value for money." },
  { name: "Priya M.", loc: "Indonesia", rating: 5, text: "This hair dryer is salon-quality at a fraction of the price. My hair is noticeably smoother and dries in half the time." },
  { name: "James T.", loc: "Thailand", rating: 5, text: "The espresso machine produces café-quality shots consistently. At this price point, nothing else comes close." },
];

export default function CustomerReviews() {
  const [c, setC] = useState(0);
  const t = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    t.current = setInterval(() => { setC((p) => (p + 1) % reviews.length); }, 7000);
    return () => { if (t.current) clearInterval(t.current); };
  }, []);

  const r = reviews[c];

  return (
    <section className="py-20 px-8">
      <div className="mx-auto max-w-[580px] text-center">
        <p className="text-[12px] font-medium tracking-[0.12em] uppercase text-text-tertiary mb-3">
          Reviews
        </p>
        <h2 className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-semibold text-primary mb-14 tracking-[-0.02em]">
          Loved by thousands
        </h2>

        <div key={c} className="anim-fade-up">
          <div className="flex justify-center gap-0.5 mb-5">
            {Array.from({ length: r.rating }).map((_, j) => (
              <Star key={j} className="w-[14px] h-[14px] fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-[16px] leading-[1.7] text-primary mb-6">
            {r.text}
          </p>
          <p className="text-[13px] font-medium text-primary">{r.name}</p>
          <p className="text-[12px] text-text-tertiary mt-0.5">{r.loc}</p>
        </div>

        <div className="flex justify-center gap-1.5 mt-12">
          {reviews.map((_, j) => (
            <button key={j} onClick={() => setC(j)}
              className={`rounded-full transition-all duration-500 ${j === c ? "bg-primary w-6 h-1.5" : "bg-border w-3 h-1.5"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
