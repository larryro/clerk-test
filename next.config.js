/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://payload-test-production-0c03.up.railway.app/api/:path*' // Proxy to Backend
        // destination: 'http://localhost:3000/api/:path*' // Proxy to Backend
      }
    ]
  }
}

module.exports = nextConfig
