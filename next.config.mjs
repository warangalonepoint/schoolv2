/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true },
  reactStrictMode: true,
  images: { unoptimized: true } // keeps PWA install happy on Vercel
};
export default nextConfig;
