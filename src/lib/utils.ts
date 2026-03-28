import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

export function getStarRating(rating: number): { filled: number; empty: number } {
  const filled = Math.round(rating);
  return { filled, empty: 5 - filled };
}
