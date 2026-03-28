import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export default function FeaturedProducts() {
  return (
    <section id="featured-products" className="py-20 px-6 lg:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-3">
            Best Sellers
          </h2>
          <p className="text-text-light text-base max-w-md mx-auto">
            Our most popular products loved across Southeast Asia
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
