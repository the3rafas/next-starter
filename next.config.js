/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')();
const nextConfig = {
  env: {
    GQL_API_URL: 'http://localhost:5000/graphql',
  },
};

module.exports = withNextIntl(nextConfig);
