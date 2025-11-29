import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cmss.dazzlewheels.ae",
      },
    ],
    unoptimized: false,
  },
};

export default nextConfig;
