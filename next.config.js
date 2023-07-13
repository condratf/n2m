/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/(.*)\.php',
        destination: '/public/\$1.php',
      },
    ];
  },
}

module.exports = nextConfig
