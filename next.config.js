/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/services/commercial-window",
        destination: "/services/emergency-board-up",
        permanent: true,
      },
      {
        source: "/locations/washington",
        destination: "/locations/virginia",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
