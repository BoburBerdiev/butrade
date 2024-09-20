/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_IMAGE_DOMAIN,
        port: '',
        pathname: '**',
      },
    ],

    // unoptimized:true,
  },
};

export default nextConfig;