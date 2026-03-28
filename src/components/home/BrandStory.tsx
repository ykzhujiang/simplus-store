import { Shield, Truck, HeadphonesIcon } from "lucide-react";

const values = [
  { icon: Shield, title: "Quality First", desc: "Every product passes rigorous quality tests before reaching your doorstep." },
  { icon: Truck, title: "Fast Delivery", desc: "Free shipping across Southeast Asia on all orders above $50." },
  { icon: HeadphonesIcon, title: "24/7 Support", desc: "Our customer team is always here to help — before, during, and after purchase." },
];

export default function BrandStory() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-3">
            Why Simplus?
          </h2>
          <p className="text-text-light text-base max-w-lg mx-auto">
            Simple + Plus — great design and great value, without compromise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-surface flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-primary mb-2">{v.title}</h3>
                <p className="text-text-light text-sm leading-relaxed max-w-xs mx-auto">{v.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-surface rounded-3xl p-10 md:p-14 text-center">
          <p className="font-heading text-2xl md:text-3xl font-bold text-primary mb-2">
            美好生活，好用不贵
          </p>
          <p className="text-text-light text-base italic">
            &ldquo;Good Life, Great Value&rdquo; — since 2021
          </p>
        </div>
      </div>
    </section>
  );
}
