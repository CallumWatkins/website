<template>
  <section class="about">
    <div class="row section-intro">
      <div class="col-twelve">
        <h5>About</h5>
        <h1>Let me introduce myself.</h1>
        <div class="intro-info">
          <img src="/logos/CW_Logo.svg" alt="My profile picture." />
          <p class="lead">
            I am a Computer Science graduate of King's College London, having
            progressed my skills in a wide range of technologies and programming
            languages. I have had a passion for developing software since I was
            14 years old.
          </p>
        </div>
      </div>
    </div>
    <div class="row button-section">
      <div class="col-twelve">
        <NuxtLink href="#contact" class="button stroke smoothscroll"
          >Contact Me</NuxtLink
        >
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  .section-intro {
    margin-bottom: 3rem;

    .intro-info {
      margin-top: 4.2rem;
      margin-right: -30px;
      margin-left: -30px;

      img {
        height: 10rem;
        width: 10rem;
        border-radius: 50%;
        margin: 0.9rem 0 0 0;
        float: left;
      }

      .lead {
        text-align: left;
        padding-left: 13rem;
      }
    }
  }

  .button-section {
    text-align: center;
    .button {
      min-width: 250px;
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }
}

@media only screen and (max-width: 1024px) {
  .intro-info {
    margin-right: 0;
    margin-left: 0;
  }
}

@media only screen and (max-width: 768px) {
  .intro-info {
    img {
      height: 8.5rem;
      width: 8.5rem;
    }

    .lead {
      padding-left: 11rem;
    }
  }

  .button-section .button {
    line-height: inherit;
    white-space: normal;
    min-width: 0;
    width: 100%;
    margin-bottom: 3rem;
    margin-left: 0;
    margin-right: 0;
    padding: 1.2rem 3rem;
  }
}

@media only screen and (max-width: 600px) {
  .intro-info {
    text-align: center;
    margin-top: 3rem;

    img {
      height: 8rem;
      width: 8rem;
      float: none;
      display: inline-block;
    }

    .lead {
      padding-left: 0;
      text-align: center;
    }
  }
}
</style>
