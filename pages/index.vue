<template>
  <AppHeader :nav-items="navItems" :active-nav-item-id="currentScrolledSectionId" />
  <IntroSection id="intro" :ref="setSectionRef" />
  <AboutSection id="about" class="white" :ref="setSectionRef" />
  <ResumeSection id="resume" class="light-grey" :ref="setSectionRef" />
  <OnlineSection id="online" class="white" :ref="setSectionRef" />
  <ContactSection id="contact" class="dark-grey" :ref="setSectionRef" />
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

const { setSectionRef, currentScrolledSectionId } = useScrollingSectionDetection('intro');
</script>

<style lang="scss">
@use '@/assets/css/base';
@use '@/assets/css/main';
@use '@/assets/css/vendor';
</style>
