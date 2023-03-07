/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://13.229.156.72:8008/api/:path*' // Proxy to Backend
        // destination: 'http://localhost:3000/api/:path*' // Proxy to Backend
      }
    ]
  }
}

module.exports = nextConfig
