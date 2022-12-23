<template>
  <IntroSection id="intro" />
  <AboutSection id="about" class="white" />
  <ResumeSection id="resume" class="light-grey" />
  <OnlineSection id="online" class="white" />
  <ContactSection id="contact" class="dark-grey" />
</template>

<script setup lang="ts">
useHead({
  title: "Callum Watkins"
});
</script>

<style lang="scss">
@use '@/assets/css/base';
@use '@/assets/css/main';
@use '@/assets/css/vendor';
</style>
