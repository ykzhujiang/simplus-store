import Image from "next/image";
import { ChefHat, Sparkles, Heart, Zap } from "lucide-react";

const categories = [
  { name: "Kitchen", icon: ChefHat, bg: "bg-orange-50", color: "text-orange-500",
    image: "https://img.myshopline.com/image/store/2000075912/1622516949344/-15_1.png?w=1280&h=1280" },
  { name: "Cleaning", icon: Sparkles, bg: "bg-blue-50", color: "text-blue-500",
    image: "https://img.myshopline.com/image/store/2000075912/1622516949344/imageName1687249262538.jpeg?w=1749&h=1749" },
  { name: "Personal Care", icon: Heart, bg: "bg-pink-50", color: "text-pink-500",
    image: "https://img.myshopline.com/image/store/2000075912/1622516949344/CFJH0061-4-FINAL.png?w=1080&h=1080" },
  { name: "Best Sellers", icon: Zap, bg: "bg-amber-50", color: "text-amber-500",
    image: "https://img.myshopline.com/image/store/2000075912/1622516949344/KFJH007-PNG5.png?w=2500&h=2500" },
];

export default function CategoryShowcase() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-5">
      <div className="bg-white rounded-lg p-5">
        <h3 className="text-[14px] font-bold text-text mb-4">Categories</h3>
        <div className="grid grid-cols-4 gap-4">
          {categories.map((c) => (
            <a key={c.name} href="#featured-products"
              className="group flex flex-col items-center gap-2 cursor-pointer">
              <div className={`w-[72px] h-[72px] rounded-full ${c.bg} flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105`}>
                <Image src={c.image} alt={c.name} width={52} height={52} className="w-[52px] h-[52px] object-contain" />
              </div>
              <span className="text-[12px] text-text-secondary text-center leading-tight group-hover:text-primary transition-colors">
                {c.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
