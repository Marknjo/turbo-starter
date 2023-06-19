module.exports = {
  ...require('@mj/eslint-config/eslint-next.js'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './@mj/tsconfig.json',
  },
}
