const categories = [
  { name: "Kitchen", image: "/simplus-store/images/category-kitchen.png", count: "4 products" },
  { name: "Cleaning", image: "/simplus-store/images/category-cleaning.png", count: "1 product" },
  { name: "Personal Care", image: "/simplus-store/images/category-care.png", count: "3 products" },
];

export default function CategoryShowcase() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-5">
      <div className="bg-white rounded-lg p-5">
        <h3 className="text-[14px] font-bold text-text mb-4">Shop by Category</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {categories.map((c) => (
            <a key={c.name} href="#featured-products"
              className="group relative rounded-lg overflow-hidden aspect-[16/9] cursor-pointer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.image} alt={c.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 z-10">
                <h4 className="text-white text-[16px] font-bold drop-shadow">{c.name}</h4>
                <p className="text-white/70 text-[11px]">{c.count}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
