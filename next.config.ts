import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig:any = {
  reactStrictMode: true,

  // Existing image configuration
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-alpha-sig.figma.com",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "nextjs.org",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "d3l4smlx4vuygm.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "media.theeverygirl.com",
      },
    ],
  },

  // Add WebAssembly support
  webpack: (config:any, { isServer }:any) => {
    // Enable WebAssembly
    config.cache = false;
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    };

    // Prevent node-specific modules from being bundled on the client side
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        crypto: false,
        path: false,
        process: false,
      };
    }

    return config;
  },
};

export default withPWA({
  dest: 'public',
})(nextConfig);