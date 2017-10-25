var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require('path');

let pathsToClean = [
    'dist',
    'build'
];

let cleanOptions = { }

module.exports = {
    entry: './src/base.tsx',
    output: {
        filename: 'scripts/bundle.js',
        path: __dirname + '/dist'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },

    plugins: [
        new CleanWebpackPlugin(pathsToClean, cleanOptions),
        new CopyWebpackPlugin([
            { from: 'node_modules/react/umd/react.production.min.js', to: 'scripts/react.production.min.js' },
            { from: 'node_modules/react-dom/umd/react-dom.production.min.js', to: 'scripts/react-dom.production.min.js' },
            { from: 'index.html', to: 'index.html' },
            { from: 'res/main.css', to: 'res/main.css' },
            { from: 'res/background.png', to: 'res/background.png' }
        ])
    ]
};