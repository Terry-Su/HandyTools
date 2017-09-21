import esWebpackConfigModuleRule from './esWebpackConfigModuleRule'

export default ({
    rules: [
        esWebpackConfigModuleRule,
        {
            test: /\.vue$/,
            loader: 'vue-loader',
        },
        {
            test: /\.(html)$/,
            use: {
                loader: 'html-loader',
                options: {
                    attrs: [':data-src']
                }
            }
        },
    ]
}
)