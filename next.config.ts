import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Root esplicita: evita che Next usi una cartella padre (es. per altri lockfile) e restituisca 404
  turbopack: {
    root: path.resolve(__dirname),
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
