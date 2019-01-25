const { resolve } = require('path')
const { assetPrefix } = require('./env')
const highlight = require('remark-highlight.js')
const withMDX = require('@zeit/next-mdx')({
  extension: /.mdx?$/,
  options: {
    mdPlugins: [
      highlight
    ]
  }
})

const newAlias = {
  COMPONENTS: resolve(__dirname, 'docs/src/components'),
  REDUX: resolve(__dirname, 'docs/src/redux'),
  SHARED: resolve(__dirname, 'docs/src/shared'),
  UTILS: resolve(__dirname, 'docs/src/utils'),
  ENV: resolve(__dirname, 'env')
}

module.exports = withMDX({
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // polyfills
    const originalEntry = config.entry
    config.entry = async () => {
      const entries = await originalEntry()
      if (entries['main.js'] && !entries['main.js'].includes('./docs/src/utils/polyfills.js')) {
        entries['main.js'].unshift('./docs/src/utils/polyfills.js')
      }
      return entries
    }

    // alias
    config.resolve.alias = {
      ...config.resolve.alias,
      ...newAlias
    }

    return config
  },
  assetPrefix,
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
})
