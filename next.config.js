/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Ganti 'nurul-ilmi' dengan nama repo GitHub Anda
  // Hapus basePath jika pakai custom domain
  basePath: '/nurul-ilmi',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
