module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'next',
    'airbnb',
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'import'],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['apps/*/tsconfig.json'],
      },
    },
  },
  rules: {
    // react
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'function-declaration',
      },
    ],

    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'react/no-unescaped-entities': 'off',
    // next
    '@next/next/no-html-link-for-pages': 'off',

    '@typescript-eslint/no-use-before-define': 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/**/*.[jt]s',
        '**/__mocks__/**/*.[jt]s',
        '**/?(*.)+(spec|test).[jt]s',
      ],
      extends: ['plugin:vitest/recommended'],
      rules: {
        'import/no-extraneous-dependencies': [
          'off',
          { devDependencies: ['**/?(*.)+(spec|test).[jt]s'] },
        ],
        'vitest/max-nested-describe': [
          'error',
          {
            max: 3,
          },
        ],
      },
    },
  ],
  ignorePatterns: [
    '**/*.js',
    '**/*.cjs',
    '**/*.json',
    'node_modules',
    'public',
    'styles',
    '.next',
    'coverage',
    'dist',
    '.turbo',
  ],
}
