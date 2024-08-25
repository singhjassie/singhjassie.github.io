/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

const nextConfig = {
  output: "export",
}

module.exports = withPlugins([
  [
    optimizedImages,
    {
      handleImages: ['jpeg', 'png'],
      optimizeImages: true,
    }
  ],
  {
    trailingSlash: true,
    basePath: '/website-deploy', // Configure base path if using GitHub Pages
    assetPrefix: '/website-deploy/',
  },
  {
    webpack: config => {
      config.module.rules = [
        ...config.module.rules,
        {
          test: /\.svg$/,
          use: {
            loader: '@svgr/webpack',
            options: {
              svgo: true,
              svgoConfig: {
                plugins: [
                  {
                    prefixIds: false
                  },
                  {
                    removeViewBox: false
                  },
                  {
                    cleanupIDs: false
                  }
                ]
              }
            }
          }
        }
      ]

      // Important: return the modified config
      return config
    }
  }
])
