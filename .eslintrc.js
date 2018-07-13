module.exports = {
  extends: "standard",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true
  },
  plugins: [
    'react'
  ],
  rules: {
    'no-unused-vars': 1,
    'comma-dangle': [2, 'always-multiline'],
    'react/jsx-uses-vars': 2,
    'react/jsx-uses-react': 2,
  }
};
