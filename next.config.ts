import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfolio",
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
