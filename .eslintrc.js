module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
  rules: {
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'max-len': ['error', { code: 100, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreRegExpLiterals: true }],
    'no-irregular-whitespace': ['error', { skipStrings: true, skipComments: true }],
    semi: 'error',
    'component-name': 'off'
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  plugins: ['prettier']
}
