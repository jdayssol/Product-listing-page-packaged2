module.exports = {
  root: true,
  env: {
      jest: true,
      node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': ["error", 4],
    'import/no-extraneous-dependencies': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}