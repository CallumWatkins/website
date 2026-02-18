<template>
  <section class="contact">
    <div class="row section-intro">
      <div class="col-twelve">
        <h5>Contact</h5>
        <h1>I’d Love To Hear From You.</h1>
        <p class="lead">
          You can get in touch by emailing me directly.<br />To encrypt your
          message first, use
          <NuxtLink
            href="https://keybase.io/encrypt#callumwatkins"
            target="_blank"
            rel="noopener noreferrer me"
            >Keybase</NuxtLink
          >
          or
          <NuxtLink
            href="https://keybase.io/callumwatkins/pgp_keys.asc"
            target="_blank"
            >PGP</NuxtLink
          >.
        </p>
      </div>
    </div>
    <div class="row contact-info">
      <div class="col-twelve">
        <h5>Email Me</h5>
        <p>
          <NuxtLink href="mailto:contact@callumwatkins.com"
            >contact@callumwatkins.com</NuxtLink
          ><br />
          <NuxtLink href="mailto:callumwatkins@protonmail.com"
            >callumwatkins@protonmail.com</NuxtLink
          >
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  .contact-info {
    font-family: "poppins-regular", sans-serif;
    text-align: center;

    a,
    a:visited {
      color: inherit;
    }

    a:hover,
    a:focus,
    a:active {
      color: var(--grey-20);
      outline: 0;
    }
  }
}
</style>
