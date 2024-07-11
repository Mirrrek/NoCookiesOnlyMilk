const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
    const isDevelopment = argv.mode === 'development';

    return {
        entry: path.resolve(__dirname, 'src/index.ts'),
        devtool: isDevelopment ? 'inline-source-map' : false,
        module: {
            rules: [{
                test: /\.ts$/i,
                use: 'ts-loader'
            }]
        },
        resolve: {
            extensions: ['.ts', '.js'],
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        },
        output: {
            filename: 'index.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true
        },
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                    { from: path.resolve(__dirname, 'static') }
                ]
            })
        ],
        watch: isDevelopment
    }
}
