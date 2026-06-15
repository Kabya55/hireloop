/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["kysely", "@better-auth/kysely-adapter"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
