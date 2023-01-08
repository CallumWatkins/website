<template>
  <div class="container">
    <section>
      <template v-if="error.statusCode !== undefined">
        <h2>Darn, it's a</h2>
        <h1>{{ error.statusCode }}</h1>
      </template>
      <template v-else>
        <h2>An error occurred</h2>
      </template>
      <p v-if="error.statusMessage">{{ error.statusMessage }}</p>
      <NuxtLink href="/"><FontAwesomeIcon icon="fa-solid fa-arrow-left" /> Back Home</NuxtLink>
    </section>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  error: any
}>();

console.log(props.error);
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;

  & > :first-child {
    margin: auto;
    padding: 4rem 1rem;
    text-align: center;
    max-width: 75ch;

    h2 {
      color: #aaa;
      font-size: 2em;
      margin: 0;
    }

    h1 {
      color: #eee;
      font-size: 8em;
      margin: 0;
      line-height: 0.9;
    }

    p {
      color: #eee;
      font-size: 1.2em;
    }

    a {
      color: #fff;
      display: inline-block;
      text-decoration: none;
      text-transform: uppercase;
      padding: 0 3rem;
      border: 3px solid #d8d8d8;
      letter-spacing: 0.3em;
      line-height: 3em;
      margin-top: 50px;
      background: linear-gradient(to right, transparent 50%, #319608 50%);
      background-size: 200% 100%;
      background-position: left bottom;
      transition: background-position 0.5s ease;

      &:visited {
        color: #fff;
      }

      &:hover {
        background-position: right bottom;
      }
    }

    @media only screen and (max-width: 480px) {
      a {
        padding: 0 1rem;
        width: auto;
        display: block;
      }
    }
  }
}
</style>
