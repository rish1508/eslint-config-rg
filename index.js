module.exports = {
  plugins: ['compat'],
  env: {
    browser: true,
    jest: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    strict: 0,
    semi: [2, 'never'],
    'no-unexpected-multiline': 2,
    'compat/compat': 2,
    'linebreak-style': 0,
    'import/no-named-as-default': 'off', // Disabled due to double exports needed for react/redux testing
    'no-magic-numbers': ['error', { ignore: [0, 1], ignoreArrayIndexes: true }],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'], // React router element
        specialLink: ['to']
      }
    ],
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': [
      2,
      {
        ignore: ['t']
      }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.js', '**/__tests__/**']
      }
    ]
  },
  settings: {
    polyfills: ['promises']
  }
}
