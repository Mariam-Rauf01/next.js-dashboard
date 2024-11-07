import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental', // Enable Partial Page Rendering (PPR) incrementally
  },
};

export default nextConfig;
