//https://webpack.js.org/guides/production/ provides this template
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
})
