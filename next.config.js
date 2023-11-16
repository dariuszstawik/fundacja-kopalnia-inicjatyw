const withNextIntl = require("next-intl/plugin")();

module.exports = withNextIntl({
  images: {
    domains: ["localhost:3000", "images.ctfassets.net"],
  },
});
