module.exports = {
  extends: ['react-app', 'react-app/jest', 'prettier'],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/no-duplicates': 'error',
    "import/newline-after-import": "error",
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              ['^\\u0000'],
              ['^react', '^@?\\w'],
              ['^node:'],
              ['^@/?\\w'],
              ['^@/components?\\w', '^@/features?\\w', '^@/pages?\\w'],
              ['^'],
              ['^\\.'],
              ['^.+\\.s?css$'],
            ],
          },
        ],
      },
    },
  ],
};