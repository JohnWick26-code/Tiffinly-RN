import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import checkFile from 'eslint-plugin-check-file';

export default [
  {
    ignores: [
      'node_modules/**',
      'android/**',
      'ios/**',
      'libraries/**',
      '.expo/**',
      'dist/**',
      'babel.config.js',
      'eslint.config.mjs',
    ],
  },

  // Naming conventions (project rule):
  //   - folders: always lowercase
  //   - screen + ui component files: PascalCase
  //   - every other file: camelCase
  {
    files: ['lib/**/*.{ts,tsx}'],
    plugins: { 'check-file': checkFile },
    rules: {
      'check-file/folder-naming-convention': [
        'error',
        { 'lib/**/': 'KEBAB_CASE' },
      ],
      'check-file/filename-naming-convention': [
        'error',
        {
          'lib/screens/**/*.tsx': 'PASCAL_CASE',
          'lib/ui/**/*.tsx': 'PASCAL_CASE',
          'lib/!(screens|ui)/**/*.tsx': 'CAMEL_CASE',
          'lib/**/*.ts': 'CAMEL_CASE',
        },
        { ignoreMiddleExtensions: true },
      ],
    },
  },

  // Structural rules (project rule):
  //   - no cyclic dependencies
  //   - max 120 lines per file
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: { ecmaFeatures: { jsx: true }, sourceType: 'module' },
    },
    plugins: { import: importPlugin },
    settings: {
      'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
      'import/resolver': { typescript: true, node: true },
    },
    rules: {
      'import/no-cycle': ['error', { maxDepth: Infinity }],
      'max-lines': [
        'error',
        { max: 120, skipBlankLines: false, skipComments: false },
      ],
    },
  },

  // Pre-existing theme files exceed 120 lines — exempt from the size cap only.
  {
    files: ['lib/ui/theme/typography.ts', 'lib/ui/theme/colors.ts'],
    rules: { 'max-lines': 'off' },
  },
];
