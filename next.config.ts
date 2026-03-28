import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/simplus-store",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.myshopline.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
