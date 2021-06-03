export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: (chunk) => {
      return chunk ? `${chunk} - Scratory` : "Scratory";
    },
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "scratch signature history",
      },
    ],
    script: [
      {
        src:
          process.env.VERCEL == "y"
            ? "/scratchblocks.js"
            : "/scratory/scratchblocks.js",
      },
    ],
    link: [{ rel: "icon", href: "/favicon.ico", id: "favicon" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/color-mode"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/redirect-module"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    base: process.env.VERCEL == "y" ? "/" : "/scratory/",
  },

  colorMode: {
    preference: "system",
    fallback: "light",
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "nuxt-color-mode",
  },

  generate: {
    fallback: "404.html",
  },

  loading: {
    color: "blue",
    height: "5px",
  },

  redirect: [
    { from: "^/youtube/(.*)$", to: "https://youtube.com/watch?v=$1" },
    { from: "^/discuss/(.*)$", to: "/$1" },
    { from: "^/", to: "/user/9gr" },
  ],
};