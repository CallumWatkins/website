<template>
  <slot />
  <AppFooter />
</template>

<script setup lang="ts">
useHead({
  link: [
    { rel: "apple-touch-icon", sizes: "180x180", href: "/icons/apple-touch-icon.png" },
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/icons/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "192x192", href: "/icons/android-chrome-192x192.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", href: "/icons/favicon-16x16.png" },
    { rel: "manifest", href: "/icons/site.webmanifest" },
    { rel: "mask-icon", href: "/icons/safari-pinned-tab.svg", color: "#319608" },
  ],
  meta: [
    { property: "msapplication-TileColor", content: "#603cba" },
    { property: "msapplication-TileImage", content: "/icons/mstile-144x144.png" },
    { property: "theme-color", content: "#319608" },
  ],
});
</script>
