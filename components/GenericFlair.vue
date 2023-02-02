<template>
  <NuxtLink
    :href="href"
    target="_blank"
    rel="noopener noreferrer me"
    :aria-label="`${profileName} on ${siteName}`"
  >
    <div class="flair">
      <div class="flair__grid">
        <div class="flair__profile-picture">
          <img
            :src="profilePicture"
            :alt="`My profile picture on ${siteName}.`"
          />
        </div>
        <div class="flair__service-logo">
          <img :src="logo" :alt="`${siteName} logo.`" />
        </div>
        <div class="flair__name">{{ profileName }}</div>
        <div class="flair__details">
          <slot name="details"></slot>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  siteName: string;
  profileName: string;
  profilePicture: string;
  logo: string;
  href: string;
}>();
</script>

<style lang="scss" scoped>
a:focus,
a:hover {
  .flair {
    transform: translateY(-4px);
    box-shadow: 0px 5px 5px 1px rgba(150, 150, 150, 1);
  }
}

.flair {
  padding: 1rem;
  background-color: #2d2d2d;
  border-radius: 0.5rem;
  transition-property: transform, box-shadow;
  transition-duration: 0.25s;
  transition-timing-function: ease-out;
  text-align: left;

  &__grid {
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI Adjusted",
      "Segoe UI", "Liberation Sans", sans-serif;
    width: 32rem;
    height: 6rem;
    display: grid;
    grid-template-columns: 6rem 1fr 2.5rem;
    grid-template-rows: 2.5rem 1fr;
    grid-auto-flow: row;
    grid-template-areas:
      "profile-picture name service-logo"
      "profile-picture details details";
  }

  &__profile-picture {
    grid-area: profile-picture;
  }

  &__service-logo {
    grid-area: service-logo;
    display: flex;
    justify-content: flex-end;
  }

  &__name {
    grid-area: name;
    display: flex;
    font-weight: bold;
    align-items: center;
    padding-left: 1rem;
  }

  &__details {
    grid-area: details;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.2rem;
    padding-left: 1rem;
    line-height: 1.6rem;
    font-size: 1.4rem;
  }
}
</style>
