<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <AppHeader
    :nav-items="navItems"
    :active-nav-item-id="currentScrolledSectionId"
  />
  <IntroSection id="intro" :ref="setSectionRef" />
  <AboutSection id="about" :ref="setSectionRef" class="white" />
  <ResumeSection id="resume" :ref="setSectionRef" class="light-grey" />
  <OnlineSection id="online" :ref="setSectionRef" class="white" />
  <ProjectsSection id="projects" :ref="setSectionRef" class="light-grey" />
  <ContactSection id="contact" :ref="setSectionRef" class="dark-grey" />
</template>

<script setup lang="ts">
import type { Person, WithContext } from "schema-dts";

const navItems = ref([
  { id: "intro", text: "Home" },
  { id: "about", text: "About" },
  { id: "resume", text: "Résumé" },
  { id: "online", text: "Online" },
  { id: "projects", text: "Projects" },
  { id: "contact", text: "Contact" },
]);

const baseUrl = useBaseUrl();

const jsonLd = computed(() =>
  JSON.stringify([
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      name: "Callum Watkins",
      url: baseUrl.value,
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Callum Watkins",
      givenName: "Callum",
      familyName: "Watkins",
      url: baseUrl.value,
      email: "contact@callumwatkins.com",
      gender: "Male",
      nationality: {
        "@type": "Country",
        name: "United Kingdom",
      },
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "King's College London",
          sameAs: "https://en.wikipedia.org/wiki/King's_College_London",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "East Barnet School",
          sameAs: "https://en.wikipedia.org/wiki/East_Barnet_School",
        },
      ],
      jobTitle: "Full Stack Engineer",
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        name: "BSc Computer Science",
        educationalLevel: "BSc",
        credentialCategory: "degree",
        recognizedBy: {
          "@type": "CollegeOrUniversity",
          name: "King's College London",
          sameAs: "https://en.wikipedia.org/wiki/King's_College_London",
        },
      },
      disambiguatingDescription:
        "Software Engineer and Computer Science graduate in London.",
      sameAs: [
        "https://keybase.io/CallumWatkins",
        "https://www.facebook.com/Watkins.Callum",
        "https://twitter.com/CallumWatkins",
        "https://www.linkedin.com/in/CallumWatkins",
        "https://stackoverflow.com/users/4415734/callum-watkins",
        "https://github.com/CallumWatkins",
        "https://gitlab.com/CallumWatkins",
        "https://t.me/CallumWatkins",
      ],
    } satisfies WithContext<Person>,
  ]),
);

useHead({
  title: "Callum Watkins",
  link: [{ rel: "canonical", href: baseUrl }],
  meta: [
    {
      name: "description",
      content:
        "Software Engineer and Computer Science graduate in London, lover of all things technology, security and science.",
    },
    {
      name: "keywords",
      content:
        "Callum Watkins,Software Engineer,Software Developer,Programmer,Computer Science,Graduate,London",
    },
    { property: "og:title", content: "Callum Watkins" },
    { property: "og:type", content: "profile" },
    {
      property: "og:image",
      content: computed(() => `${baseUrl.value}/logos/CW_Logo.svg`),
      key: "og:image_svg",
    },
    {
      property: "og:image",
      content: computed(() => `${baseUrl.value}/logos/CW_Logo_1024x1024.png`),
      key: "og:image_1024",
    },
    { property: "og:image:width", content: "1024", key: "og:image:width_1024" },
    {
      property: "og:image:height",
      content: "1024",
      key: "og:image:height_1024",
    },
    {
      property: "og:image",
      content: computed(() => `${baseUrl.value}/logos/CW_Logo_512x512.png`),
      key: "og:image_512",
    },
    { property: "og:image:width", content: "512", key: "og:image:width_512" },
    { property: "og:image:height", content: "512", key: "og:image:height_512" },
    {
      property: "og:image",
      content: computed(() => `${baseUrl.value}/logos/CW_Logo_256x256.png`),
      key: "og:image_256",
    },
    { property: "og:image:width", content: "256", key: "og:image:width_256" },
    { property: "og:image:height", content: "256", key: "og:image:height_256" },
    { property: "og:url", content: baseUrl },
    { property: "og:locale", content: "en_GB" },
    {
      property: "og:description",
      content: "Software Engineer and Computer Science graduate in London.",
    },
    { property: "profile:first_name", content: "Callum" },
    { property: "profile:last_name", content: "Watkins" },
    { property: "profile:gender", content: "male" },
  ],
  script: [{ type: "application/ld+json", children: jsonLd }],
});

const { setSectionRef, currentScrolledSectionId } =
  useScrollingSectionDetection("intro");
</script>

<style lang="scss">
@use "@/assets/css/base";
@use "@/assets/css/main";
</style>
