import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  allConfig: {
    env: {
      browser: true,
      es2022: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: [
      'react',
      '@typescript-eslint',
      'react-hooks',
      'import-helpers',
      'prettier-plugin-tailwindcss',
    ],
    settings: {
      'import/resolver': {
        typescript: {},
      },
    },
  },
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'airbnb',
    'plugin:prettier/recommended',
  ),
  {
    rules: {
      'jsx-a11y/anchor-has-content': 'off',
      'jsx-a11y/heading-has-content': 'off',
      'no-underscore-dangle': 'off',
      'import/no-extraneous-dependencies': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-console': 'warn',
      'react/no-array-index-key': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-param-reassign': 'off',
      'react/prop-types': 'off',
      'no-prototype-builtins': 'off',
      'no-restricted-syntax': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      'no-useless-constructor': 'off',
      'react/display-name': 'off',
      '@typescript-eslint/no-use-before-define': 'error',
      'import/no-unresolved': 'error',
      'no-unused-vars': 'error',
      'react/function-component-definition': 'off',
      'react/jsx-no-useless-fragment': 'off',
      'import/prefer-default-export': 'off',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'warn',
      'class-methods-use-this': 'off',
      'prefer-promise-reject-errors': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-use-before-define': 'off',
      'react/jsx-props-no-spreading': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'interface',
          format: ['PascalCase'],
          custom: {
            regex: '^I[A-Z]',
            match: true,
          },
        },
      ],
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          ts: 'never',
          tsx: 'never',
        },
      ],
      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.jsx', '.tsx'],
        },
      ],
    },
  },
];

export default eslintConfig;
