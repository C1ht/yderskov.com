import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./image-loader.ts",
    deviceSizes: [400, 768, 1200, 1920],
    imageSizes: [],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Alias the polyfill-module relative path import
      config.resolve.alias['../build/polyfills/polyfill-module'] = path.resolve(__dirname, 'empty-polyfill.ts');
    }
    return config;
  },
  turbopack: {
    resolveAlias: {
      '../build/polyfills/polyfill-module': './empty-polyfill.ts',
    },
  },
};

export default nextConfig;

