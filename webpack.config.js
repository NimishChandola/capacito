const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const path = require('path');

const modeConfig = envBuildType => {
	const [env, buildType] = envBuildType.split('.'); 
	return require(`./build-utils/${buildType}/webpack.${buildType}.config`)({mode: env});
};

module.exports = ({ mode, presets } = {mode: 'development', presets: []}) => {
	return webpackMerge({},modeConfig(mode));
};