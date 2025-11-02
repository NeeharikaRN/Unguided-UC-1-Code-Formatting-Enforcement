// eslint.config.cjs
module.exports = [
  {
    files: ['**/*.js'], // Apply to all JS files
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        process: 'readonly',
        module: 'readonly',
        require: 'readonly',
      },
    },
    rules: {
      // ESLint recommended rules manually included
      'no-unused-vars': 'warn',
      'no-console': 'off',
      eqeqeq: 'error',
      curly: 'error',
      semi: ['error', 'always'],
    },
  },
];
