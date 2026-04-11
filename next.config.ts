import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All images are served from /public — no remote patterns needed
    unoptimized: false,
  },
};

export default nextConfig;
