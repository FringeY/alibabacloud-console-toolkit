module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      arrowFunctions: true,
      blockBindings: true,
      classes: true,
      defaultParams: true,
      destructuring: true,
      forOf: true,
      jsx: true,
      legacyDecorators: true,
      objectLiteralComputedProperties: true,
      objectLiteralShorthandMethods: true,
      objectLiteralShorthandProperties: true,
      spread: true,
      superInFunctions: true,
      templateStrings: true
    }
  },
  extends: [
    './config/es6',
    './config/react',
    './config/import',
    './config/jsx-a11y'
  ].map(require.resolve)
};
