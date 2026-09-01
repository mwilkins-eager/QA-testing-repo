module.exports = {
  env: {
    node: true,
    mocha: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
  },
  extends: 'eslint:recommended',
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'off',
  },
  overrides: [
    {
      files: ['tests/e2e/**/*.js'],
      env: {
        mocha: true,
      },
      globals: {
        cy: 'readonly',
        Cypress: 'readonly',
        beforeEach: 'readonly',
        describe: 'readonly',
        it: 'readonly',
      },
    },
    {
      files: ['tests/performance/**/*.js'],
      globals: {
        http: 'readonly',
        check: 'readonly',
        sleep: 'readonly',
      },
    },
  ],
};
