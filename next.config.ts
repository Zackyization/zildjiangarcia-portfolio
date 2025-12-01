import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    unoptimized: true, // Required for static export
  },
  // Remove trailing slashes for cleaner URLs
  trailingSlash: false,
};

export default nextConfig;