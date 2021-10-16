import colors from 'vuetify/es5/util/colors'
import en from './locales/en.json'
import ku from './locales/ku.json'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '',
    title: 'Darin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'assets/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'assets/css/owl.theme.default.min.css' },
      { rel: 'stylesheet', href: 'assets/css/owl.carousel.min.css' },
      { rel: 'stylesheet', href: 'assets/css/remixicon.css' },
      { rel: 'stylesheet', href: 'assets/css/flaticon.css' },
      { rel: 'stylesheet', href: 'assets/css/meanmenu.min.css' },
      { rel: 'stylesheet', href: 'assets/css/animate.min.css' },
      { rel: 'stylesheet', href: 'assets/css/magnific-popup.min.css' },
      { rel: 'stylesheet', href: 'assets/css/odometer.min.css' },
      { rel: 'stylesheet', href: 'assets/css/style.css' },
      { rel: 'stylesheet', href: 'assets/css/responsive.css' }
    ],
    script: [
      { src: "assets/js/jquery.min.js" },
      { src: "assets/js/bootstrap.bundle.min.js" },
      { src: "assets/js/meanmenu.min.js", defer: true },
      { src: "assets/js/owl.carousel.min.js" },
      { src: "assets/js/wow.min.js" },
      { src: "assets/js/magnific-popup.min.js" },
      { src: "assets/js/appear.min.js" },
      { src: "assets/js/odometer.min.js" },
      { src: "assets/js/form-validator.min.js" },
      { src: "assets/js/contact-form-script.js" },
      { src: "assets/js/ajaxchimp.min.js" },
      { src: "assets/js/custom.js", defer:true },
      
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/lang.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    ['@nuxtjs/vuetify', { rtl: false }],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/i18n'
  ],
  i18n: {
    locales: [
      { code: 'en', file: 'en.json' },
      { code: 'ku', file: 'ku.json' }
    ],
    defaultLocale: 'en',
    langDir: 'locales/'
  },


  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {}
  },
  server: {
    host: '0.0.0.0'
  }
}
