module.exports = {
  ...require('@mj/eslint-config/eslint-server'),
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ['./@mj/tsconfig.lint.json'],
  },
}
