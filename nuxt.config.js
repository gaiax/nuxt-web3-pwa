export default {
  mode: "spa",
  generate: {
    dir: "public"
  },
  env: {
    APIKEY: process.env.APIKEY,
    AUTHDOMAIN: process.env.AUTHDOMAIN,
    PRIVATE: process.env.PRIVATE || "http://localhost:8545"
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/web3.js" }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/pwa"],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  manifest: {
    name: "nuxt-web3-pwa",
    title: "nuxt-web3-pwa",
    "og:title": "nuxt-web3-pwa",
    description: "nuxt-web3-pwaのDescription",
    "og:description": "nuxt-web3-pwaのDescription",
    lang: "ja",
    theme_color: "#41b883",
    background_color: "#ffffff",
    display: "standalone",
    scope: "/",
    start_url: "/"
  }
};
