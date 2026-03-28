import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { Zap } from "lucide-react";

export default function FeaturedProducts() {
  return (
    <section id="featured-products">
      <div className="mx-auto max-w-[1200px] px-4 pb-5">
        <div className="bg-white rounded-lg overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-border-light">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary fill-primary" />
              <h2 className="text-[16px] font-bold text-text">Best Sellers</h2>
            </div>
            <a href="#" className="text-[13px] text-primary hover:underline">View All &gt;</a>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[1px] bg-border-light">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
