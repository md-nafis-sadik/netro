import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/**",
      },
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
      {
        protocol: "https",
        hostname: "203.161.48.124",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.facebook.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
