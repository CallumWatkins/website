<template>
  <IntroSection id="intro" />
  <AboutSection id="about" class="white" />
  <ResumeSection id="resume" class="light-grey" />
  <OnlineSection id="online" class="white" />
  <ContactSection id="contact" class="dark-grey" />
  <AppHeader :nav-items="navItems" active-nav-item-id="intro" />
</template>

<script setup lang="ts">
const navItems = ref([
  { id: "intro", text: "Home" },
  { id: "about", text: "About" },
  { id: "resume", text: "Résumé" },
  { id: "online", text: "Online" },
  { id: "contact", text: "Contact" },
]);

useHead({
  title: "Callum Watkins"
});
</script>

<style lang="scss">
@use '@/assets/css/base';
@use '@/assets/css/main';
@use '@/assets/css/vendor';
</style>
