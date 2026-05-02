import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./image-loader.ts",
    deviceSizes: [400, 768, 1200, 1920],
    imageSizes: [],
  },
};

export default nextConfig;
