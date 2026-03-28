import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/simplus-store",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
