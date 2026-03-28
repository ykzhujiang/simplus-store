import { ChefHat, Sparkles, Heart } from "lucide-react";

interface Category {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  iconColor: string;
  iconBg: string;
}

const categories: Category[] = [
  {
    id: "kitchen",
    name: "Kitchen Appliances",
    description: "Elevate your cooking with smart, efficient tools for every kitchen.",
    icon: ChefHat,
    href: "#",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
  },
  {
    id: "cleaning",
    name: "Cleaning Appliances",
    description: "Keep your home spotless with powerful, easy-to-use cleaning solutions.",
    icon: Sparkles,
    href: "#",
    iconColor: "text-accent",
    iconBg: "bg-accent/10",
  },
  {
    id: "personal-care",
    name: "Personal Care",
    description: "Look and feel your best with premium personal care appliances.",
    icon: Heart,
    href: "#",
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
  },
];

export default function CategoryShowcase() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-secondary mb-3">
            Shop by Category
          </h2>
          <p className="text-text-light text-base sm:text-lg max-w-xl mx-auto">
            Discover our curated selection of home and personal appliances.
          </p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="
                  group flex flex-col items-center text-center
                  bg-white rounded-[12px] border border-border
                  p-8
                  shadow-[var(--shadow-card)]
                  hover:shadow-[var(--shadow-card-hover)]
                  transition-shadow duration-300 ease-in-out
                "
              >
                {/* Icon container */}
                <div
                  className={`
                    flex items-center justify-center
                    w-16 h-16 rounded-full mb-5
                    ${category.iconBg}
                    transition-transform duration-300 group-hover:scale-110
                  `}
                >
                  <Icon className={`w-8 h-8 ${category.iconColor}`} />
                </div>

                {/* Category name */}
                <h3 className="font-heading text-lg font-semibold text-secondary mb-2">
                  {category.name}
                </h3>

                {/* Description */}
                <p className="text-text-light text-sm leading-relaxed mb-6 flex-1">
                  {category.description}
                </p>

                {/* Shop Now link */}
                <a
                  href={category.href}
                  className="
                    inline-flex items-center gap-1.5
                    text-sm font-semibold text-primary
                    border border-primary rounded-[8px]
                    px-5 py-2
                    transition-colors duration-200
                    hover:bg-primary hover:text-white
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
                  "
                  aria-label={`Shop ${category.name}`}
                >
                  Shop Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
