const isProduction = process.env.NODE_ENV === 'production'
const assetPrefix = isProduction ? '/rc-multi-level-selector' : ''

module.exports = {
  assetPrefix,
  isProduction
}
