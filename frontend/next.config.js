/** @type {import('next').NextConfig} */
// Le frontend relaie /api/* vers le backend Express.
// Dans Docker Compose, le backend est joignable via son nom de service : http://backend:5000
// En développement local (npm run dev) : BACKEND_URL=http://localhost:5000
const BACKEND_URL = process.env.BACKEND_URL || 'http://backend:5000';

module.exports = {
  reactStrictMode: true,
  output: 'standalone',
  async rewrites() {
    return [{ source: '/api/:path*', destination: `${BACKEND_URL}/api/:path*` }];
  }
};
