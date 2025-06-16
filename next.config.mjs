/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    loader: 'custom',
    loaderFile: './my-loader.ts',
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Performance optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['react-icons'],
  },
  // Compress output
  compress: true,
  // Enable static optimization
  swcMinify: true,
  // Optimize fonts
  optimizeFonts: true,
  // Remove unused CSS
  modularizeImports: {
    'react-icons': {
      transform: 'react-icons/{{member}}',
    },
  },
}

export default nextConfig;