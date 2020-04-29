// Настройки сборки и тд осуществляются через файл конфига  vue.config.js
module.exports = {
	devServer: {
		proxy: {
			'^/api': {
				target: 'http://api.test.lan',
				ws: true,
				changeOrigin: true,
			},
		},
	},
};
