module.exports= (env) => ({
	output:{
		filename:`${env}-server.js`
	},
	module: {
		rules:[
			{
				test:/\.css$/, 
				use: ['style-loader', 'css-loader']
			}
		]
	}
});