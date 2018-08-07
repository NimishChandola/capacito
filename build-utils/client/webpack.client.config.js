const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

const path = require('path');
const baseConfig = () => require('../webpack.base.config')();
const modeConfig = env => require(`./webpack.${env}.config`)(env);

module.exports = ({ mode, presets } = {mode: 'development', presets: []}) => {
	return webpackMerge({
		mode,
		entry: './src/client/client.js',
		output: {
			path: path.resolve(__dirname, '../../dist/public')
		},
		plugins: [
			new HtmlWebpackPlugin(),
			new webpack.ProgressPlugin(),
		],
		target: 'web'
	},
	modeConfig(mode),
	baseConfig()
	);
};