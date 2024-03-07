module.exports = {
  presets: ['module:@react-native/babel-preset'],
   plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ios.ts', '.android.ts', '.ts', '.ios.tsx', '.android.tsx', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@src': './src',
          '@assets': './src/assets',
          '@commons': './src/commons',
          '@screens': './src/screens',
          '@configs': './src/configs',
          '@constants': './src/constants',
          '@contexts': './src/contexts',
          '@services': './src/services',
          '@types': './src/types',
          '@helpers': './src/helpers',
          '@validations': './src/validations',
          '@navigations': './src/navigations',
          '@core-ui': './src/core-ui',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ]
};
