export default function BrandStory() {
  return (
    <section>
      {/* Features */}
      <div className="border-t border-border-light">
        <div className="mx-auto max-w-[1200px] px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { emoji: "🚚", title: "Free Delivery", desc: "Complimentary shipping across Southeast Asia on orders over $50." },
              { emoji: "🛡️", title: "1-Year Warranty", desc: "Every product backed by a comprehensive manufacturer warranty." },
              { emoji: "💬", title: "Expert Support", desc: "Our team is available to help — before, during, and after purchase." },
            ].map((f) => (
              <div key={f.title} className="flex gap-4">
                <span className="text-[24px] mt-0.5 shrink-0">{f.emoji}</span>
                <div>
                  <h3 className="text-[14px] font-semibold text-primary mb-1">{f.title}</h3>
                  <p className="text-[13px] text-text-secondary leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brand */}
      <div className="bg-surface">
        <div className="mx-auto max-w-[1200px] px-8 py-20 md:py-24 text-center">
          <p className="text-[11px] tracking-[0.15em] uppercase text-text-tertiary mb-6">
            Since 2021 · Southeast Asia
          </p>
          <h2 className="font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-semibold text-primary mb-3">
            美好生活，好用不贵
          </h2>
          <p className="text-[15px] text-text-secondary">
            Simple + Plus — Good Life, Great Value
          </p>
        </div>
      </div>
    </section>
  );
}
