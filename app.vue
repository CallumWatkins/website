<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "en",
  },
  script: [
    {
      src: "https://static.cloudflareinsights.com/beacon.min.js",
      defer: true,
      "data-cf-beacon": '{"token": "6b20566368134fdab84a60c9b25700ff"}',
    }, // Cloudflare Web Analytics
  ],
});
</script>
