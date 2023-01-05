<template>
  <div class="badge-collection">
    <div v-for="badge in badges">{{ badge }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  badges: string[]
}>();
</script>

<style lang="scss" scoped>
.badge-collection {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  & > *
  {
    font-family: "poppins-semibold", sans-serif;
    font-size: 0.8em;
    padding-inline: 1rem;
    border-radius: 3px;
    border: 1px solid var(--accent-secondary);
  }
}
</style>
