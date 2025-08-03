/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "https://docs.stratifi.xyz/docs/intro",
        permanent: true, // 301 redirect
      },
      {
        source: "/whitelist",
        destination: "https://app.youform.com/forms/bbbn2d9r",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
