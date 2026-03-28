import HeroBanner from "@/components/home/HeroBanner";
import CategoryShowcase from "@/components/home/CategoryShowcase";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BrandStory from "@/components/home/BrandStory";
import CustomerReviews from "@/components/home/CustomerReviews";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <CategoryShowcase />
      <FeaturedProducts />
      <BrandStory />
      <CustomerReviews />
    </>
  );
}
