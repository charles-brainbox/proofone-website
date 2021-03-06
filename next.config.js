const withSvgr = require("next-svgr");

module.exports = withSvgr({
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
    ];
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  experimental: {
    outputStandalone: true,
  },
});
