module.exports = (api) => {
  const isTest = api.env('test')

  const jestConfig = {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
  }

  return isTest ? jestConfig : {}
}
