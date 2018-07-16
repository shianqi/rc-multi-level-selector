const path = require('path');
const postcssPresetEnv = require('postcss-preset-env');

const cssLoader = [
  { loader: 'style-loader' },
  {
    loader: 'css-loader',
    options: {
      modules: true,
      localIdentName: '[path]-[local]--[hash:base64:5]'
    }
  },
  {
    loader: 'postcss-loader',
    options: {
      plugins: [
        postcssPresetEnv({
          autoprefixer: {
            browsers: '> 0.12%' // includes ie >= 9
          },
          stage: 0
        }),
      ]
    }
  }
]

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: cssLoader,
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['airbnb'],
            },
          },
        ],
      },
      {
        test: /\.jsx$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
