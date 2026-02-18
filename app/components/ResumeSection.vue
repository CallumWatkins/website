<template>
  <section class="resume">
    <div class="row section-intro">
      <div class="col-twelve">
        <h5>Résumé</h5>
        <h1>More of my credentials.</h1>
        <p class="lead">Explore my work experience and education.</p>
      </div>
    </div>
    <div class="row resume-timeline">
      <div class="col-twelve resume-header">
        <h2>Work Experience</h2>
      </div>
      <div class="col-twelve">
        <div class="timeline">
          <template v-for="w in Work">
            <div v-if="!w.hide" class="timeline-entry">
              <div class="timeline-entry__icon">
                <FontAwesomeIcon icon="fa-solid fa-briefcase" />
              </div>
              <div class="timeline-entry__header">
                <h3>{{ w.role }}</h3>
                <p>{{ w.period }}</p>
              </div>
              <div class="timeline-entry__content">
                <h4>{{ w.company }}</h4>
                <p v-for="d in w.description.split('\n')">{{ d }}</p>
                <BadgeCollection v-if="w.badges" :badges="w.badges" />
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

    <div class="row resume-timeline">
      <div class="col-twelve resume-header">
        <h2>Education</h2>
      </div>
      <div class="col-twelve">
        <div class="timeline">
          <div v-for="e in Education" class="timeline-entry">
            <div class="timeline-entry__icon">
              <FontAwesomeIcon :icon="e.icon" />
            </div>
            <div class="timeline-entry__header">
              <h3>{{ e.level }}</h3>
              <p>{{ e.period }}</p>
            </div>
            <div class="timeline-entry__content">
              <h4>{{ e.institution }}</h4>
              <p class="education__summary">{{ e.grades.summary }}</p>
              <div class="education__grades">
                <template v-for="g in e.grades.grades">
                  <div>{{ g.grade }}</div>
                  <div>{{ g.subject }}</div>
                </template>
              </div>
              <template v-if="e.description">
                <p v-for="d in e.description.split('\n')">
                  {{ d }}
                </p>
              </template>
              <BadgeCollection v-if="e.badges" :badges="e.badges" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Education from "~~/content/education.json";
import Work from "~~/content/work.json";
</script>

<style lang="scss" scoped>
.resume {
  .resume-header {
    text-align: center;

    h2 {
      color: var(--accent-primary);
    }
  }

  .resume-timeline {
    .timeline {
      position: relative;
      margin-top: 1.5rem;

      &::before {
        content: "";
        display: block;
        width: 1px;
        height: 100%;
        background: rgba(0, 0, 0, 0.1);
        position: absolute;
        left: 35%;
        top: 0;
      }

      .timeline-entry {
        position: relative;
        padding-top: 1.5rem;

        &__icon {
          height: 4.8rem;
          width: 4.8rem;
          background: var(--grey-81);
          border-radius: 50%;
          color: white;
          position: absolute;
          left: 35%;
          top: 0.9rem;
          margin-left: -2.4rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        &__header {
          float: left;
          width: 35%;
          padding-right: 90px;
          text-align: right;

          h3 {
            margin-bottom: 0;
            text-wrap: balance;
          }

          p {
            font-family: "poppins-regular", sans-serif;
            font-size: 1.6rem;
            color: var(--grey-60);
          }
        }

        &__content {
          margin-left: 35%;
          padding-left: 60px;

          h4 {
            position: relative;
            padding-bottom: 1.8rem;

            &::after {
              content: "";
              display: block;
              height: 3px;
              width: 50px;
              background: rgba(0, 0, 0, 0.2);
              position: absolute;
              left: 0;
              bottom: 0;
            }
          }
        }
      }
    }

    &:not(:last-child) .timeline {
      margin-bottom: 6rem;
    }
  }
}

.badge-collection {
  margin-bottom: 3rem;
}

.education {
  &__summary {
    margin-bottom: 0;
    font-weight: bold;
  }

  &__grades {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-auto-flow: row;
    column-gap: 0.5em;
    margin-bottom: 2rem;
    line-height: 2.5rem;
  }
}

@media only screen and (max-width: 1024px) {
  .resume {
    .resume-timeline {
      .timeline {
        .timeline-entry {
          &__header {
            padding-right: 50px;

            h3 {
              font-size: 1.8rem;
            }

            p {
              font-size: 1.4rem;
            }
          }

          &__content {
            padding-left: 50px;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .resume {
    .resume-timeline {
      .timeline {
        &::before {
          left: 2.4rem;
        }

        .timeline-entry {
          &__icon {
            left: 2.4rem;
          }

          &__header {
            float: none;
            width: auto;
            padding-left: 7rem;
            padding-right: 15px;
            text-align: left;

            h3 {
              font-size: 2rem;
            }

            p {
              font-size: 1.5rem;
              margin-bottom: 1.5rem;
            }
          }

          &__content {
            padding-left: 7rem;
            margin: 0;

            h4 {
              padding-bottom: 0;
              padding-top: 2.1rem;
              margin-bottom: 0.6rem;
              font-size: 1.7rem;

              &::after {
                bottom: auto;
                top: 0;
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 480px) {
  .resume {
    .resume-header h2 {
      font-size: 2.2rem;
    }

    .resume-timeline {
      .timeline {
        &::before {
          left: 1.8rem;
        }

        .timeline-entry {
          &__icon {
            height: 3.6rem;
            width: 3.6rem;
            left: 1.8rem;
            margin-left: -1.8rem;
            font-size: 1.5rem;
          }

          &__header,
          &__content {
            padding-left: 5.5rem;
          }
        }
      }
    }
  }
}
</style>
