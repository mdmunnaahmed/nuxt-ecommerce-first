import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: "stylesheet", href: "/css/bootstrap-5.3.0.min.css" },
        { rel: "stylesheet", href: "/css/plugin.css" },
        { rel: "stylesheet", href: "/css/remixicon.css" },
        { rel: "stylesheet", href: "/css/main-style.css" },
      ],
      script: [
        { src: "/js/bootstrap-5.3.0.min.js", type: "text/javascript", defer: true },
        { src: "/js/jquery-3.7.0.min.js", type: "text/javascript", defer: true },
        { src: "/js/popper.min.js", type: "text/javascript", defer: true },
        { src: "/js/plugin.js", type: "text/javascript", defer: true },
        { src: "/js/main.js", type: "text/javascript", defer: true },
      ],
    },
  },
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
  pinia: { autoImports: ["defineStore", ["defineStore", "definePiniaStore"]] },
});
