/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { hostname: "res.cloudinary.com", protocol: "https" },
      { hostname: "avatars.githubusercontent.com", protocol: "https" },
      { hostname: "imgur.com", protocol: "https" },
      { hostname: "media2.dev.to", protocol: "https" },
    ],
  },
  // Enable output for GitHub Pages
  output: "export",
  trailingSlash: true,
  distDir: "out",
  assetPrefix: "",
};

module.exports = nextConfig;
