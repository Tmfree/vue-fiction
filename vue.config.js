const CompressionWebpackPlugin = require('compression-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';
module.exports = {
    configureWebpack: config => {
        if (isProduction) {
            // 开启gzip压缩
            config.plugins.push(new CompressionWebpackPlugin({
                algorithm: 'gzip',
                test: /\.js$|\.html$|\.json$|\.css/,
                threshold: 10240,
                minRatio: 0.8
            }))
            //分离js
            config.optimization = {
                runtimeChunk: 'single',
                splitChunks: {
                    chunks: 'all',
                    maxInitialRequests: Infinity,
                    minSize: 20000,
                    cacheGroups: {
                        vendor: {
                            test: /[\\/]node_modules[\\/]/,
                            name(module) {
                                // get the name. E.g. node_modules/packageName/not/this/part.js
                                // or node_modules/packageName
                                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                                // npm package names are URL-safe, but some servers don't like @ symbols
                                return `npm.${packageName.replace('@', '')}`
                            }
                        }
                    }
                }
            }
            // 取消webpack警告的性能提示
            config.performance = {
                hints: 'warning',
                //入口起点的最大体积
                maxEntrypointSize: 50000000,
                //生成文件的最大体积
                maxAssetSize: 30000000,
                //只给出 js 文件的性能提示
                assetFilter: function (assetFilename) {
                    return assetFilename.endsWith('.js');
                }
            }
        } else {
            // 为开发环境修改配置...
        }
    },
    // 如果你不需要使用eslint，把lintOnSave设为false即可
    lintOnSave: true,
    // 打包时不生成.map文件
    productionSourceMap: false
}