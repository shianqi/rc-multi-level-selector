const isProd = process.env.NODE_ENV === 'production'
const assetPrefix = isProd ? '/rc-multi-level-selector' : ''

module.exports = {
  assetPrefix
}
