import Image from "next/image";

const categories = [
  {
    name: "Kitchen",
    image: "https://img.myshopline.com/image/store/2000075912/1622516949344/-15_1.png?w=1280&h=1280",
    count: "4 products",
  },
  {
    name: "Cleaning",
    image: "https://img.myshopline.com/image/store/2000075912/1622516949344/imageName1687249262538.jpeg?w=1749&h=1749",
    count: "1 product",
  },
  {
    name: "Personal Care",
    image: "https://img.myshopline.com/image/store/2000075912/1622516949344/CFJH0061-4-FINAL.png?w=1080&h=1080",
    count: "3 products",
  },
];

export default function CategoryShowcase() {
  return (
    <section className="py-24 px-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {categories.map((c) => (
            <a key={c.name} href="#featured-products"
              className="group relative bg-surface rounded-2xl overflow-hidden aspect-[4/3] flex flex-col items-center justify-end p-8 hover:shadow-lg transition-all duration-500">
              <Image
                src={c.image}
                alt={c.name}
                width={200}
                height={200}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[140px] h-[140px] md:w-[160px] md:h-[160px] object-contain transition-transform duration-500 group-hover:scale-110"
              />
              <div className="relative z-10 text-center">
                <h3 className="font-heading text-[17px] font-semibold text-primary">{c.name}</h3>
                <p className="text-[12px] text-text-tertiary mt-0.5">{c.count}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
