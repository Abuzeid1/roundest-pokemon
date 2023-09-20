module.exports = {
  experimental :{
    serverActions: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["raw.githubusercontent.com"],
    minimumCacheTTL: 6_000_000,
  },
};
