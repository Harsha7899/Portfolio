import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdnjs.cloudflare.com"],
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ This disables ESLint breaking builds on Vercel
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
};

export default nextConfig;
