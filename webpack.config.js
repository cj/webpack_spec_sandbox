const webpack = require('webpack')
const stubs = process.env.OPAL_STUBS.split(',')

module.exports = {
  entry: ["./entry.js"],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.rb$/,
                exclude: /node_modules/,
                loader: "opal-webpack",
                query: {
                    dynamic_require_severity: 'ignore'
                }
            }
        ]
    },
    opal: {
        stubs: stubs,
        cacheDirectory: './tmp/cache'
    },
    devtool: 'source-map'
}
