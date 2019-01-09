const prod = process.env.NODE_ENV === 'production'
const env = {
  'process.env.PREFIX_STATIC': prod ? '/rc-multi-level-selector' : ''
}

module.exports = {
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    ["babel-plugin-transform-define", env],
    [
      "babel-plugin-styled-components",
      {
        "ssr": true,
        "displayName": true,
        "preprocess": false
      }
    ],
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-syntax-import-meta",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-json-strings"
  ]
}
