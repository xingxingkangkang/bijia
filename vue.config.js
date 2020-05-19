module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  assetsDir: "static",
  devServer: {
    proxy: "http://47.112.216.17:9091"
  }
};
