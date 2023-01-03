<template>
  <div class="social">
    <div v-for="s in Social">
      <NuxtLink :href="s.url" target="_blank" rel="noopener noreferrer me" :title="s.title">
        <FontAwesomeIcon :icon="s.icon" fixedWidth />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import Social from "@/content/social.json";
</script>
