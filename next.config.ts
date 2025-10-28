import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.dazzlewheels.ae",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
