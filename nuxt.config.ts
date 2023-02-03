// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: [
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/free-regular-svg-icons",
      "@fortawesome/free-brands-svg-icons",
      "@fortawesome/vue-fontawesome",
    ],
  },
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    "@/assets/css/_global.scss",
  ],
  vite: {
    esbuild: {
      drop: process.env.NODE_ENV === "production" ? ["console"] : undefined,
    },
  },
});
