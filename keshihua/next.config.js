/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/(.*)',
        destination: '/',
      },
    ]
  },
}

module.exports = nextConfig 