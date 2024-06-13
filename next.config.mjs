/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}`,
      },
    ],
    // deviceSizes: [450, 640, 768, 1024, 1280, 1536],
  },
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.devServer = {
        hot: true,
      }
    }
    return config;
  },
};

export default nextConfig;