<template>
  <section>
    <div class="row section-intro">
      <div class="col-twelve">
        <h5>Projects</h5>
        <h1>What I've been working on.</h1>
        <p class="lead">Take a look at examples of my work.</p>
      </div>
    </div>
    <div class="projects-row">
      <swiper
        :grab-cursor="true"
        :modules="swiperModules"
        :scrollbar="{ hide: true }"
        :slides-per-view="'auto'"
      >
        <swiper-slide v-for="p in Projects" :key="p.title">
          <div class="card-wrapper">
            <div class="project-card">
              <div class="project-card__image">
                <ImageSources
                  :sources="
                    p.images.map((img) => getImageSrc(`projects/${img}`))
                  "
                  alt=""
                />
              </div>
              <div class="project-card__title">{{ p.title }}</div>
              <div class="project-card__description">{{ p.description }}</div>
              <div class="project-card__badges">
                <BadgeCollection v-if="p.badges" :badges="p.badges" />
              </div>
              <div class="project-card__link">
                <NuxtLink v-if="p.link" :href="p.link.url" target="_blank"
                  >View
                  <span v-if="p.link.site">on {{ p.link.site }}&nbsp;</span>
                  <FontAwesomeIcon
                    icon="fa-solid fa-arrow-up-right-from-square"
                    size="xs"
                  />
                </NuxtLink>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import { A11y, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import Projects from "@/content/projects.json";
import "swiper/scss";
import "swiper/scss/scrollbar";

const swiperModules = [A11y, Scrollbar];
const { getImageSrc } = useImages();
</script>

<style lang="scss" scoped>
.projects-row {
  max-width: 1200px;
  width: 100%;
  margin-bottom: -40px;
  margin-inline: auto;
}

.swiper {
  width: 100%;
}

.swiper:not(.swiper-initialized) ::v-deep(.swiper-wrapper) {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.swiper-slide {
  width: auto;
  height: auto;
}

.card-wrapper {
  height: 100%;
  box-sizing: border-box;
  padding: 20px 15px 40px 15px;
}

.project-card {
  --padding: 2.5rem;
  box-shadow: 0px 5px 10px 1px rgba(100, 100, 100, 1);
  border-radius: 10px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: auto auto auto 1fr auto;
  width: 350px;
  height: 100%;
  background-color: var(--grey-92);
  min-height: 400px;
  overflow: clip;

  &__image {
    aspect-ratio: 1.75 / 1;

    ::v-deep(img) {
      height: 100%;
      width: 100%;
      object-fit: cover;
      display: block;
    }
  }

  &__title {
    padding: var(--padding) var(--padding) 0 var(--padding);
    font-size: 1.2em;
    margin-bottom: 1rem;
    font-family: "poppins-semibold", sans-serif;
    color: white;
  }

  &__description {
    color: var(--grey-12);
    padding-inline: var(--padding);
    margin-bottom: 1rem;
  }

  &__badges {
    color: var(--grey-15);
    padding-inline: var(--padding);
    margin-bottom: 1rem;
  }

  &__link {
    padding: 0 var(--padding) var(--padding) var(--padding);
    a {
      color: var(--grey-37);

      &:hover,
      &:focus,
      &:active {
        color: var(--grey-20);
      }
    }
  }
}

@media screen and (max-width: 400px) {
  .project-card {
    --padding: 2rem;
    width: 300px;
  }
}
</style>
