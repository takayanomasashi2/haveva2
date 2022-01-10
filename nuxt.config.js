import data from './static/storedata.json'
let dynamicRoutes = () => {
  return new Promise(resolve => {
    resolve(data.map(el => `product/${el.id}`))
  })
}

const axios = require('axios')
const { API_KEY, API_URL, BASE_URL,SERVICE_ID } = process.env

export default {
  mode: 'universal',
  // ssr: 'true',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    script: [{ src: 'https://js.stripe.com/v3/' },
  
    {
      rel: "stylesheet",
      href:
        "https://fonts.googleapis.com/css?family=Barlow:200,300,400,500,600,700,800,900&display=swap"
    },
    { src: "/assets/js/jquery.min.js", type: "text/javascript", body: true },
    { src: "/assets/js/bootstrap.bundle.min.js", type: "text/javascript", body: true },
    { src: "/assets/js/TweenMax.min.js", type: "text/javascript", body: true },
    { src: "/assets/js/jquery.mCustomScrollbar.concat.min.js", type: "text/javascript", body: true },
    { src: "/assets/js/bootstrap-datepicker.min.js", type: "text/javascript", body: true },
    { src: "/assets/js/jquery.easing.min.js", type: "text/javascript", body: true },
    { src: "/assets/js/bootstrap-select.min.js", type: "text/javascript", body: true },
    { src: "/assets/js/jquery.validate.min.js", type: "text/javascript", body: true },
    { src: "/assets/js/waypoints.min.js", type: "text/javascript", body: true },
    { src: "/assets/js/wow.js", type: "text/javascript", body: true },
    { src: "/assets/js/jquery.counterup.min.js", type: "text/javascript", body: true },
    { src: "/assets/js/owl.carousel.min.js", type: "text/javascript", body: true },
    { src: "/assets/js/jquery.bxslider.min.js", type: "text/javascript", body: true },
    { src: "/assets/js/jquery.magnific-popup.min.js", type: "text/javascript", body: true },
    { src: "/assets/js/jquery.ajaxchimp.min.js", type: "text/javascript", body: true },
    { src: "https://yubinbango.github.io/yubinbango-core/yubinbango-core.js" },
  
  ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300,600|PT+Serif&display=swap' },
      { rel: 'apple-touch-icon', sizes:'180x180', type: 'image/x-icon', href: '/assets/images/favicons/apple-touch-icon.png' },
      { rel: 'icon', sizes:'32x32', type: 'image/png', href: '/assets/images/favicons/favicon-32x32.png' },
      { rel: 'icon', sizes:'16x16', type: 'image/png', href: '/assets/images/favicons/favicon-16x16.png' },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600&display=swap" },
      { rel: "stylesheet", href: "/assets/css/bootstrap-datepicker.min.css" },
      { rel: "stylesheet", href: "/assets/css/vegas.min.css" },
      { rel: "stylesheet", href: "/assets/css/animate.min.css" },
      { rel: "stylesheet", href: "/assets/plugins/glightbox/glightbox.min.css" },
      { rel: "stylesheet", href: "/assets/css/fontawesome-all.min.css" },
      { rel: "stylesheet", href: "/assets/css/agrikol_iconl.css" },
      { rel: "stylesheet", href: "/assets/css/style.css" },
      { rel: "stylesheet", href: "/assets/css/responsive.css" },
      

      
      { rel: 'icon', type: 'image/x-icon', href: '/assets/images/favicons/favicon.ico' },
      { rel: 'apple-touch-icon', sizes:'180x180', href: '/assets/images/favicons/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes:'32x32', href: '/assets/images/favicons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes:'16x16', href: '/assets/images/favicons/favicon-16x16.png' },

      { rel: "stylesheet", href: "/assets/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "/assets/css/animate.min.css" },
      { rel: "stylesheet", href: "/assets/css/fontawesome-all.min.css" },
      { rel: "stylesheet", href: "/assets/css/bootstrap-datepicker.min.css" },
      { rel: "stylesheet", href: "/assets/css/bootstrap-select.min.css" },
      { rel: "stylesheet", href: "/assets/css/jquery.mCustomScrollbar.min.css" },
      { rel: "stylesheet", href: "/assets/css/owl.carousel.min.css" },
      { rel: "stylesheet", href: "/assets/css/owl.theme.default.min.css" },
      { rel: "stylesheet", href: "/assets/css/zimed-icon.css" },
      { rel: "stylesheet", href: "/assets/css/jquery.bxslider.min.css" },
      { rel: "stylesheet", href: "/assets/css/magnific-popup.css" },

      { rel: "stylesheet", href: "/assets/css/style.css" },
      { rel: "stylesheet", href: "/assets/css/responsive.css" },
    ]
  },
  generate: {
    routes: dynamicRoutes
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['normalize.css', { src: '~/assets/main.scss', lang: 'sass' }],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {src: 'plugins/owl.js', ssr: false},
    `~/plugins/currency-filter.js`,
    '~/plugins/filter.js',
    '~/plugins/vee-validate',
    '~/plugins/yubinbango.js'
    ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/markdownit'],

  //追加
  markdownit: {
  html: true,
  injected: true,
  preset: 'default',
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    transpile: ['vee-validate'], // 追加
    extend(config, ctx) {}
  },
  generate: {
    fallback: true,
    routes() {
      const blog = axios
        .get(`${process.env.API_URL}/blog`, {
          headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY },
        })
        .then((res) => {
          return res.data.contents.map((blog) => {
            return '/blog/' + blog.id
          })
        })
      return Promise.all([blog]).then((values) => {
        return values.join().split(',')
      })
    },
  },
  publicRuntimeConfig: {
    apiUrl: API_URL
  },
  privateRuntimeConfig: {
    apiKey: API_KEY
  },
  // target: 'serverless',
}