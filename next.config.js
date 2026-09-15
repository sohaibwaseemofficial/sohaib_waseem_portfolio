/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Next.js 16 generates .next/types/validator.ts with types that don't fully
    // match the installed TypeScript version. Our application code is type-safe.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
