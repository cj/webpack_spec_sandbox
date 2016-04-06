const webpack = require('webpack')
const stubs = process.env.OPAL_STUBS.split(',')

module.exports = {
  entry: "./entry.js",
    output: {
        path: '/host',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.rb$/,
                exclude: /node_modules/,
                loader: "opalrb-loader",
                query: {
                    dynamic_require_severity: 'ignore'
                }
            }
        ]
    },
    opal: {
        stubs: stubs,
        cacheDirectory: './tmp/cache'
    }
}
