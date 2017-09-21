import UglifyJSPlugin from 'uglifyjs-webpack-plugin'
import esWebpackConfigModuleRule from './esWebpackConfigModuleRule'
import htmlWebpackConfigModuleRule from './htmlWebpackConfigModuleRule'

export default {
  devtool: 'source-map',

  plugins: process.env.production ? [
    new UglifyJSPlugin()
  ] : [],

  module: {
    rules: [
      esWebpackConfigModuleRule,
      htmlWebpackConfigModuleRule,
    ]
  }
}