<template>
  <section class="online">
    <div class="row section-intro">
      <div class="col-twelve">
        <h5>Online</h5>
        <h1>Find me online.</h1>
      </div>
    </div>
    <div class="row profiles">
      <div class="col-six tab-full">
        <h3>{{ Online.stackoverflow.title }}</h3>
        <p>{{ Online.stackoverflow.description }}</p>
        <div class="flair-container">
          <StackOverflowFlair />
        </div>
      </div>
      <div class="col-six tab-full">
        <h3>{{ Online.github.title }}</h3>
        <p>{{ Online.github.description }}</p>
        <div class="flair-container">
          <GitHubFlair />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Online from "~~/content/online.json";
</script>

<style lang="scss" scoped>
.online {
  .row.profiles {
    > div {
      text-align: center;

      &:not(:last-child) {
        margin-bottom: 3rem;
      }

      > p {
        margin-bottom: 2rem;
        text-align: justify;
      }

      .flair-container {
        display: flex;
        justify-content: center;
        margin-top: 4rem;
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .online .row.profiles > div {
    text-align: justify;

    .flair-container {
      margin-top: 2rem;
      margin-bottom: 4rem;
    }
  }
}
</style>
