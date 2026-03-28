import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export default function FeaturedProducts() {
  return (
    <section id="featured-products" className="py-24 px-8 bg-white">
      <div className="mx-auto max-w-[1200px]">
        <p className="text-[12px] font-medium tracking-[0.12em] uppercase text-text-tertiary mb-3 text-center">
          Most Popular
        </p>
        <h2 className="font-heading text-[clamp(1.75rem,3vw,2.5rem)] font-semibold text-primary text-center mb-16 tracking-[-0.025em]">
          Best Sellers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
