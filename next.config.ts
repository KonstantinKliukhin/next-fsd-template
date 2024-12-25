import "./src/shared/config/env";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // change when you know your images hosts
      {
        protocol: "https",
        hostname: "*",
      },
      {
        protocol: "http",
        hostname: "*",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 425, 640, 768, 1024, 1440],
    minimumCacheTTL: 600, // 10 minutes,
  },
};

export default nextConfig;
