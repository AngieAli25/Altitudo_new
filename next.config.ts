import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Forza la root di Turbopack su questa directory del progetto
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.figma.com',
        pathname: '/api/mcp/asset/**',
      },
    ],
  },
};

export default nextConfig;
