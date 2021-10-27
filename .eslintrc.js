module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    'jest/globals': true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecotators: true,
    },
    createDefaultProgram: true,
  },
  settings: {
    'import/parser': '@babel/eslint-parser',
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
      webpack: {
        config: './webpack.config.dev.js',
      },
    },
  },
  rules: {
    'no-console': 'off',
    'import/no-unresolved': ['error', { commonjs: true, amd: true }],
    'import/extensions': ['error', 'never', { packages: 'always' }],
    'import/no-extraneous-dependencies': ['error'],
  },
  overrides: [
    {
      files: ['*.tsx', '*.ts'],
      parser: '@typescript-eslint/parser',
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:jest/recommended',
        'plugin:testing-library/dom',
        'plugin:prettier/recommended',
      ],
      plugins: [
        '@typescript-eslint',
        'import',
        'jest',
        'testing-library',
        'prettier',
      ],
      // https://stackoverflow.com/questions/58510287/parseroptions-project-has-been-set-for-typescript-eslint-parser
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
};
