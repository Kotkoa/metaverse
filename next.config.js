/** @type {import('next').NextConfig} */
const basePath = process.env.NODE_ENV === 'production' ? '/metaverse' : ''

const nextConfig = {
  output: 'export',
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  },
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js'
      }
    }
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    })

    return config
  }
}

module.exports = nextConfig
