import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos'
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to'
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to'
      }
    ]
  },
  env: {
    GTM_ID: process.env.GTM_ID,
    GOOGLE_ADSENSE_UNIT_BLOG_CLIENT: process.env.GOOGLE_ADSENSE_UNIT_BLOG_CLIENT,
    GOOGLE_ADSENSE_UNIT_BLOG_SLOT: process.env.GOOGLE_ADSENSE_UNIT_BLOG_SLOT
  }
};

export default nextConfig;
