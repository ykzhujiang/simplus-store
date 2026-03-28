import { ChefHat, Sparkles, Heart } from "lucide-react";
import { ArrowRight } from "lucide-react";

const categories = [
  { name: "Kitchen", desc: "Smart cooking appliances", icon: ChefHat, color: "bg-orange-50 text-orange-500" },
  { name: "Cleaning", desc: "Effortless home care", icon: Sparkles, color: "bg-blue-50 text-blue-500" },
  { name: "Personal Care", desc: "Look your best daily", icon: Heart, color: "bg-pink-50 text-pink-500" },
];

export default function CategoryShowcase() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-3">
            Shop by Category
          </h2>
          <p className="text-text-light text-base max-w-md mx-auto">
            Curated collections for every corner of your home
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <a key={c.name} href="#"
                className="group flex flex-col items-center text-center p-8 rounded-2xl bg-surface hover:bg-white border border-transparent hover:border-border hover:shadow-[var(--shadow-card-hover)] transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${c.color} transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-primary mb-1.5">{c.name}</h3>
                <p className="text-text-light text-sm mb-5">{c.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
                  Browse <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
