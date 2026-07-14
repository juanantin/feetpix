import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.seadn.io" },
      { protocol: "https", hostname: "**.seadn.io" },
      { protocol: "https", hostname: "openseauserdata.com" },
      { protocol: "https", hostname: "**.openseauserdata.com" },
    ],
  },
};

export default nextConfig;
