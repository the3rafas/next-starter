/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GQL_API_URL: "http://localhost:5000/graphql",
  },
};

module.exports = nextConfig;
