module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://172.21.48.71:8080/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/wddm-api'
        }
      }
    }
  },
  lintOnSave: false,
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: false
    }
  }
}
