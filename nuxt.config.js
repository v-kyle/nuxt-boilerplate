module.exports = {
  /*
  ** Mode nuxt app
  */
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-boilerplate',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'NuxtJS boilerplate' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/sitemap',
    [
      '@nuxtjs/google-tag-manager',
      {
        id: `GTM-${process.env.GTM}`,
        layer: 'dataLayer',
        pageTracking: true
      }
    ],
  ],
  /*
  ** Global scss files
  */
  styleResources: {
    scss: [
      '@/assets/scss/main.scss'
    ]
  },
  /*
  ** Plugins
  */
  plugins: [],
  /*
  ** Axios config
  */
  axios: {
    proxy: true,
    prefix: '/api'
  },
  /*
  ** Proxy api config
  */
  proxy: {
    '/api': {
      target: process.env.API_URL || 'http://example.com',
      pathRewrite: { '^/api': '' }
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Middleware
  */
  serverMiddleware: [],
  /*
  ** Sitemap custom configuration
  */
  sitemap: {},
  /*
  ** Build configuration
  */
  buildDir: '.nuxt',
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

