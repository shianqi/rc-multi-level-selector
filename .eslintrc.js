module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: ["standard", "standard-react"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    AMap: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "babel", "react", "standard"],
  rules: {
    "react/prop-types": 0,
    "@typescript-eslint/no-unused-vars": 2
  }
};
