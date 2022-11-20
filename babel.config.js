module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            '@components': './src/components',
            '@designSystem': './src/designSystem',
            '@icons': './src/icons',
            '@screens': './src/screens',
            '@ts': './src/ts',
          }
        }
      ],
    ]
  };
};
