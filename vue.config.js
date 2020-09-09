module.exports = {
  publicPath: process.env.APP_PATH,
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/style/public.scss";'
      }
    }
  }
}
