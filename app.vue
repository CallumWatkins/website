<template>
  <div id="app">
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/icons/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/icons/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      href: "/icons/android-chrome-192x192.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/icons/favicon-16x16.png",
    },
    { rel: "manifest", href: "/icons/site.webmanifest" },
    {
      rel: "mask-icon",
      href: "/icons/safari-pinned-tab.svg",
      color: "#319608",
    },
  ],
  meta: [
    { property: "msapplication-TileColor", content: "#603cba" },
    {
      property: "msapplication-TileImage",
      content: "/icons/mstile-144x144.png",
    },
    { property: "theme-color", content: "#319608" },
  ],
  script: [
    {
      src: "https://static.cloudflareinsights.com/beacon.min.js",
      defer: true,
      "data-cf-beacon": '{"token": "6b20566368134fdab84a60c9b25700ff"}',
    }, // Cloudflare Web Analytics
  ],
});
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
}
</style>
