module.exports = {
  env: { browser: true, es6: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier',
    'prettier/react'
  ],
  globals: { Atomics: 'readonly', SharedArrayBuffer: 'readonly' },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: { 'prettier/prettier': 1, 'quote': 'off' },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: { '@typescript-eslint/no-unused-vars': [2, { args: 'none' }] }
    }
  ]
};
