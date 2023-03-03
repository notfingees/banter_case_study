import axios from 'axios'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  target: 'server', // should be static

  generate: {
    routes() {
      return axios.get('https://inwritingapi.com/inwriting_mumbai/get_addresses.php').then(res => {
        return res.data.map(user => {
          return '/collection/' + user.address
        })
      })
    }
  },

  render: {
    resourceHints: false
  },
  router: {
    prefetchLinks: false,
  },
  head: {
    title: 'In Writing | Text as NFTs',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [

      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Write, sell, and buy any text you want as an NFT on In Writing. We're the first decentralized text NFT marketplace with complete transparency and no fees." },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'keywords', name: 'keywords', content: 'inwriting, NFT, in writing, ethereum, text NFT, NFTs, text NFTs, inwritingio, text as NFT, NFT text, NFT writing' },

      {
        hid: 'og:title',
        property: 'og:title',
        content: 'In Writing | Text as NFTs'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Write, sell, and buy any text you want as an NFT on In Writing.'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/ogimg.png',
        //content: 'static/logo.png'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://inwriting.io/'
      },


    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    '@/assets/css/banter.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-gtag' },
    { src: '~/plugins/vue-analytics' },
    { src: '~/plugins/errors' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module', '@nuxtjs/html-validator', '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: [
      '~/assets/css/main.scss', '~/assets/css/banter.scss',
    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    gzip: true,
    hostname: 'https://www.inwriting.io'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build

  server: {
    host: "0.0.0.0"
  },


  build: {
    extend(config, { isDev, isClient }) {

      config.node = {
        fs: 'empty'
      }

      // ....
    }
  }

}
