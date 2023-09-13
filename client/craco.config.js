const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@Pages': path.resolve(__dirname, 'src/Pages'),
      '@Routes': path.resolve(__dirname, 'src/Routes'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@Interfaces': path.resolve(__dirname, 'src/Interfaces'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@layout': path.resolve(__dirname, 'src/layout'),
    },
  },
};
