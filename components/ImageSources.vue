<template>
  <picture>
    <template v-for="(source, i) in sources">
      <source v-if="i < sources.length - 1" :srcset="source" :type="getType(source)">
      <img v-else :src="source" :alt="alt">
    </template>
  </picture>
</template>

<script setup lang="ts">
defineProps<{
  sources: string[],
  alt: string,
}>();

function getType(srcset: string) {
  if (srcset.endsWith(".png")) return "image/png";
  if (srcset.endsWith(".jpg")) return "image/jpeg";
  if (srcset.endsWith(".jpeg")) return "image/jpeg";
  throw new Error(`Unhandled image source type: ${srcset}`);
}
</script>
