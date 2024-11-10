import withPWA from "next-pwa";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js configuration options
  reactStrictMode: true,
  // Add other Next.js configurations here if needed
};

export default withPWA({
  dest: "public",
  // // Additional PWA configuration options
  // disable: process.env.NODE_ENV === 'development',  // Optional: Disable PWA in development
  // ...nextConfig
});
