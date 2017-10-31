var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');

let pathsToClean = [
    'public',
    'dist',
    'build'
];

let cleanOptions = { }

module.exports = {
    entry: './src/base.tsx',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public'
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
            // { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },

            // All images processors
            { test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/, loader: "file-loader?name=assets/[name].[ext]" },

            // All html files
            {
                test: /\.html$/,
                loader: 'html-loader'
            },

            // All sass files
            {
                test: /\.sass$/,
                loader: ['style-loader','css-loader','resolve-url-loader','sass-loader?sourceMap']
            },
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
        // new CleanWebpackPlugin(pathsToClean, cleanOptions)
    ]
};
