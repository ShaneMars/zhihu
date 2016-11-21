var webpack = require('webpack');
module.exports = {
					entry: {toDoList:'./src/js/app.js'},
				 	output: {
						path: './static/dist/',
						publicPath:'http://localhost:8080/static/dist',
						filename: '[name].js'
					},
					module: {	
						loaders: [	
							{
								test:/\.js$/,
								loader:'babel',
								exclude:/node_modules/,
								query:{
									presets:['react','es2015']
								}//解析react和es6 防止老版本浏览器无法识别es6
							},
							{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
							{ test: /\.css$/, loader: 'style-loader!css-loader' },
							{ test: /\.less$/,loader: 'style!css!less'}
						]
					},
					devtool:'source-map'
};