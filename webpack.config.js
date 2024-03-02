const Path = require('path');
const packageJson = require('./package.json');

const resourceLib = {
    name: `Kapeta.resourceTypes["[name]"]`,
    type: 'assign',
    export: 'default',
};

module.exports = {
    entry: {
        [`kapeta/resource-type-npm-registry:${packageJson.version}`]: {
            import: Path.resolve(__dirname, './src/web/NPMResourceTypeProvider.ts'),
            filename: `kapeta/resource-type-npm-registry.js`,
            library: resourceLib,
        },
        [`kapeta/resource-type-maven-registry:${packageJson.version}`]: {
            import: Path.resolve(__dirname, './src/web/MavenResourceTypeProvider.ts'),
            filename: `kapeta/resource-type-maven-registry.js`,
            library: resourceLib,
        },
        [`kapeta/resource-type-docker-registry:${packageJson.version}`]: {
            import: Path.resolve(__dirname, './src/web/DockerResourceTypeProvider.ts'),
            filename: `kapeta/resource-type-docker-registry.js`,
            library: resourceLib,
        },
    },
    output: {
        path: Path.join(process.cwd(), 'web'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'babel-loader',
                options: {
                    sourceMaps: true,
                    presets: ['@babel/env', '@babel/typescript', '@babel/react'],
                    plugins: [
                        ['@babel/plugin-proposal-decorators', { legacy: true }],
                        ['@babel/plugin-proposal-private-methods', { loose: true }],
                        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],

                        ['@babel/plugin-proposal-class-properties', { loose: true }],
                        '@babel/proposal-object-rest-spread',
                    ],
                },
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader'],
                include: Path.resolve(__dirname, './'),
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
                include: Path.resolve(__dirname, './'),
            },
            {
                test: /\.ya?ml$/,
                loader: 'yaml-loader',
                options: {
                    asStream: true,
                },
                include: Path.resolve(__dirname, './'),
            },
        ],
    },
    devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'inline-source-map',
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.less', '.yml', '.yaml'],
        fallback: {
            path: require.resolve('path-browserify'),
        },
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        lodash: '_',
        '@kapeta/ui-web-components': 'Kapeta.Components',
        '@kapeta/ui-web-types': 'Kapeta.Types',
        '@kapeta/ui-web-utils': 'Kapeta.Utils',
        '@kapeta/ui-web-context': 'Kapeta.Context',
    },
};
