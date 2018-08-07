const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');

const modeConfig = env => {};
const baseConfig = () => require('../webpack.base.config')();

module.exports = ({ mode, presets } = {mode: 'development', presets: []}) => {
	return webpackMerge({
		mode,
		entry: './src/index.js',
		output: {
			filename: 'bundle.js',
			path: path.resolve(__dirname, '../../dist')
		},
		plugins: [
			new webpack.ProgressPlugin(),
			new CopyWebpackPlugin([
				{from:'src/ssl', to:'ssl'}
			]),
		],
		node: {
			__dirname: false,
			__filename: false,
		},
		target: 'node', // in order to ignore built-in modules like path, fs, etc.
		externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
	},
	modeConfig(mode),
	baseConfig()
	);
};