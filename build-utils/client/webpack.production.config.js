const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports= (env) => ({
	output:{
		filename:`${env}-server-[chunkhash].js`
	},
	module: {
		rules:[
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin, 'css-loader']
			}
		]
	},
	plugins: [new MiniCssExtractPlugin()]
});