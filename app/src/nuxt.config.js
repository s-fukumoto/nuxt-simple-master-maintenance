const pkg = require('./package')

module.exports = {
  mode: 'universal',
  srcDir: './client/',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Simple Master Maintenance',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/assets/main.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/my-constants', 
    '@/plugins/my-config',
    '@/plugins/common-components',
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/proxy',
    '@nuxtjs/toast',
  ],

  /*
   ** Nuxt.js buildModules
   */
  buildModules: ['@nuxtjs/vuetify'],

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: true,
  },

  /*
   ** proxy
   */
  proxy: {
    '/api': 'http://localhost:63000',
  },

  /*
   ** router
   */
  router: {
    middleware: ['authenticated'],
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: ['vuetify/lib'],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },

  /*
   ** watchers
   */
  watchers: {
    webpack: {
      aggregateTimeout: 300,
      poll: 1000,
      ignored: /node_modules/,
    },
  },

  /*
   ** Server側の middleware定義
   */
  serverMiddleware: [
    // API
    '~/../api/',
  ],

  /*
   ** auth
   */
  auth: {
    //cookie: false,
    redirect: {
      login: '/',
      logout: '/',
      callback: '/callback',
      home: '/',
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/auth/login',
            method: 'post',
            propertyName: 'token.accessToken',
          },
          logout: {
            url: '/api/auth/logout',
            method: 'post',
          },
          user: {
            url: '/api/user',
            method: 'get',
            propertyName: 'user',
          },
        },
      },
    },
  },

  /*
   ** toast
   */
  toast: {
    theme: 'bubble',
    position: 'top-right',
    duration: 2000,
  },

  /*
   ** vuetify
   */
  vuetify: {
    customVariables: ['~/assets/style/variables.scss'],
    defaultAssets: {
      font: {
        family: 'Roboto',
      },
      icons: 'fa',
    },
    optionsPath: '~/modules/vuetify.options.js',
  },
}
