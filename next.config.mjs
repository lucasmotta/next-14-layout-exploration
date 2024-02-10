/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/settings',
        destination: '/settings/team',
      },
      {
        source: '/:envId/organizations/:orgId',
        destination: '/:envId/organizations/:orgId/features',
      },
    ]
  },
}

export default nextConfig
