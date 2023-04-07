export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'wkey-client-front',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/styles/global.scss"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/global",
    "@/plugins/apiLayer",
  ],

  styleResources: {
    scss: ["~/assets/styles/variables.scss"]
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'cookie-universal-nuxt',
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
  ],

  axios: {
    proxy: true
  },

  proxy: {
    "/client-api": {
      target: process.env.BACKEND_URL,
      pathRewrite: {"/client-api": "/api/v1"}
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
