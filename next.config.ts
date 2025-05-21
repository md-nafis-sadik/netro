import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "via.placeholder.com",
      "server.netrosystems.com",
      "203.161.48.124",
      "localhost",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "netrosystems.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "server.netrosystems.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
