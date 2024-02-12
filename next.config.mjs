/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:envId/organizations/:orgId/conn_:connId(.*)',
        destination: '/:envId/organizations/:orgId/connections/conn_:connId',
      },
      {
        source: '/:envId/organizations/:orgId/directory_:directoryId(.*)',
        destination:
          '/:envId/organizations/:orgId/directories/directory_:directoryId',
      },
    ]
  },
}

export default nextConfig
