// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint"],
  build: {
    transpile: [
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/free-regular-svg-icons",
      "@fortawesome/free-brands-svg-icons",
      "@fortawesome/vue-fontawesome",
    ],
  },
  compatibilityDate: "2026-02-18",
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    "@/assets/css/_global.scss",
  ],
  nitro: {
    prerender: {
      routes: ["/llms.txt", "/llms-full.txt"],
    },
  },
  typescript: {
    strict: true,
  },
  vite: {
    esbuild: {
      drop: process.env.NODE_ENV === "production" ? ["console"] : undefined,
    },
  },
});
