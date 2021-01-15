const env = require("dotenv").config()

module.exports = {
  /*
  ** .env variables
  */
  env: env.parsed,
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
    '@nuxtjs/robots',
    [
      '@nuxtjs/google-tag-manager',
      {
        id: process.env.GTM,
        layer: 'dataLayer',
        pageTracking: true
      }
    ],
  ],
  /*
  ** robots.txt settings
  */
  robots: {},
  /*
  ** Build modules
  */
  buildModules: [
    '@nuxtjs/google-analytics',
    '@nuxt/typescript-build'
  ],
  /*
  ** Google Analytics settings
  */
  googleAnalytics: {
    id: process.env.GA_ID
  },
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
  plugins: [
    '@/plugins/i18n.js'
  ],
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
      target: process.env.API_URL,
      pathRewrite: { '^/api': '' }
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Router settings
  */
  router: {
    middleware: 'i18n'
  },
  generate: {
    routes: ['/', '/en']
  },
  /*
  ** Middleware
  */
  serverMiddleware: [],
  /*
  ** Sitemap custom configuration
  */
  sitemap: {
    hostname: process.env.SITE_DOMAIN
  },
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

