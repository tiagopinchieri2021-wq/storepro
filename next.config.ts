import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
     qualities: [75, 85, 95, 100],
  },
  reactCompiler: true,
};

export default nextConfig;
