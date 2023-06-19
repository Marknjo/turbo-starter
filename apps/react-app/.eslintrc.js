export default {
  ...import('@mj/eslint-config/eslint-react.js'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './@mj/tsconfig.json',
  },
}
