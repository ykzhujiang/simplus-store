export interface Product {
  id: string;
  name: string;
  slug: string;
  category: "kitchen" | "cleaning" | "personal-care";
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  images: string[];
  description: string;
  features: string[];
  inStock: boolean;
  badge?: "Best Seller" | "New" | "Sale";
}

export interface CartItem {
  product: Product;
  quantity: number;
}
