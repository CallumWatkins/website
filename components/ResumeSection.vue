<template>
  <section>
    <div class="row section-intro">
      <div class="col-twelve">
        <h5>Résumé</h5>
        <h1>More of my credentials.</h1>
        <p class="lead">Explore my education and work experience.</p>
      </div>
    </div>
    <div class="row resume-timeline">
      <div class="col-twelve resume-header">
        <h2>Education</h2>
      </div>
      <div class="col-twelve">
        <div class="timeline-wrap">
          <div v-for="e in education" class="timeline-block">
            <div class="timeline-ico">
              <FontAwesomeIcon :icon="e.icon" />
            </div>
            <div class="timeline-header">
              <h3>{{ e.level }}</h3>
              <p>{{ e.period }}</p>
            </div>
            <div class="timeline-content grade">
              <h4>{{ e.institution }}</h4>
              <p>{{ e.grades.summary }}</p>
              <div class="education__grades">
                <template v-for="g in e.grades.grades">
                  <div>{{ g.grade }}</div>
                  <div>{{ g.subject }}</div>
                </template>
              </div>
              <p v-if="e.description" v-for="d in e.description.split('\n')">{{ d }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row resume-timeline">
      <div class="col-twelve resume-header">
        <h2>Work Experience</h2>
      </div>
      <div class="col-twelve">
        <div class="timeline-wrap">
          <div v-for="w in work" class="timeline-block">
            <div class="timeline-ico">
              <FontAwesomeIcon icon="fa-solid fa-briefcase" />
            </div>
            <div class="timeline-header">
              <h3>{{ w.role }}</h3>
              <p>{{ w.period }}</p>
            </div>
            <div class="timeline-content">
              <h4>{{ w.company }}</h4>
              <p v-for="d in w.description.split('\n')">{{ d }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import education from "@/content/education.json";
import work from "@/content/work.json";
</script>

<style lang="scss">
.education {
  &__grades {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-auto-flow: row;
    column-gap: 0.5em;
    margin-bottom: 3rem;
    line-height: 2.5rem;
  }
}
</style>
