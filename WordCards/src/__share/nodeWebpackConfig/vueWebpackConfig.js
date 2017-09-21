import webpackBasicFrameConfig from './webpackBasicFrameConfig'
import vueWebpackConfigModule from './vueWebpackConfigModule'


export default ({
    ...webpackBasicFrameConfig,
    module: {
        ...vueWebpackConfigModule,
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    }
})