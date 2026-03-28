import Image from "next/image";

const categories = [
  {
    name: "Kitchen",
    image: "/simplus-store/images/category-kitchen.png",
    product: "https://img.myshopline.com/image/store/2000075912/1622516949344/-15_1.png?w=1280&h=1280",
    count: "4 products",
  },
  {
    name: "Cleaning",
    image: "/simplus-store/images/category-cleaning.png",
    product: "https://img.myshopline.com/image/store/2000075912/1622516949344/imageName1687249262538.jpeg?w=1749&h=1749",
    count: "1 product",
  },
  {
    name: "Personal Care",
    image: "/simplus-store/images/category-care.png",
    product: "https://img.myshopline.com/image/store/2000075912/1622516949344/CFJH0061-4-FINAL.png?w=1080&h=1080",
    count: "3 products",
  },
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
              {/* Background lifestyle image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.image} alt={c.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Product floating */}
              <div className="absolute top-2 right-3">
                <Image src={c.product} alt={c.name} width={72} height={72}
                  className="w-[60px] h-[60px] md:w-[72px] md:h-[72px] object-contain drop-shadow-lg" />
              </div>
              {/* Text */}
              <div className="absolute bottom-3 left-4 z-10">
                <h4 className="text-white text-[16px] font-bold">{c.name}</h4>
                <p className="text-white/70 text-[11px]">{c.count}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
