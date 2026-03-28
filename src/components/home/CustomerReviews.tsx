"use client";

import { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";

const reviews = [
  { name: "Sarah L.", loc: "Singapore", rating: 5, text: "The air fryer exceeded all expectations. The visible window is a game-changer — I can finally watch my food cook without opening the basket." },
  { name: "Ahmad R.", loc: "Malaysia", rating: 5, text: "Incredibly lightweight vacuum with powerful suction. Battery lasts through my entire apartment. Best value for money I've found." },
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
    <section className="py-24 px-8 bg-white">
      <div className="mx-auto max-w-[640px] text-center">
        <p className="text-[12px] font-medium tracking-[0.12em] uppercase text-text-tertiary mb-3">
          Customer Stories
        </p>
        <h2 className="font-heading text-[clamp(1.75rem,3vw,2.5rem)] font-semibold text-primary mb-16 tracking-[-0.025em]">
          Loved by thousands
        </h2>

        <div key={c} className="anim-fade-up">
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: r.rating }).map((_, j) => (
              <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <blockquote className="text-[18px] md:text-[20px] leading-[1.6] text-primary font-normal mb-8">
            &ldquo;{r.text}&rdquo;
          </blockquote>
          <p className="text-[13px] text-text-secondary font-medium">{r.name}</p>
          <p className="text-[12px] text-text-tertiary">{r.loc}</p>
        </div>

        <div className="flex justify-center gap-2 mt-14">
          {reviews.map((_, j) => (
            <button key={j} onClick={() => setC(j)}
              className={`h-[2px] rounded-full transition-all duration-500 ${j === c ? "bg-primary w-8" : "bg-border w-4"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
