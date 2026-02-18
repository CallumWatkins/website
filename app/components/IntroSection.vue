<template>
  <section class="intro">
    <div class="intro-overlay"></div>
    <div class="intro-content">
      <div class="row">
        <div class="col-twelve">
          <h5>Hello, World.</h5>
          <h1>I’m Callum Watkins.</h1>
          <p class="intro-position">
            <span>Software Engineer</span>
            <span>BSc Computer Science</span>
          </p>
        </div>
      </div>
    </div>

    <SocialLinks />
  </section>
</template>

<style lang="scss" scoped>
.intro {
  background-image: url(/assets/images/intro-bg-1440.jpg);
  background-image: image-set(
    url(/assets/images/intro-bg-1440.avif) type("image/avif"),
    url(/assets/images/intro-bg-1440.jpg) type("image/jpeg")
  );
  background-position-x: center;
  background-position-y: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  padding: 0;
  min-height: 720px;
  display: table;
  position: relative;
  text-align: center;

  @media screen and (max-device-width: 1920px) and (max-device-height: 1080px) {
    background-image: url(/assets/images/intro-bg-1080.jpg);
    background-image: image-set(
      url(/assets/images/intro-bg-1080.avif) type("image/avif"),
      url(/assets/images/intro-bg-1080.jpg) type("image/jpeg")
    );
  }

  @media screen and (max-device-width: 1280px) and (max-device-height: 720px) {
    background-image: url(/assets/images/intro-bg-720.jpg);
    background-image: image-set(
      url(/assets/images/intro-bg-720.avif) type("image/avif"),
      url(/assets/images/intro-bg-720.jpg) type("image/jpeg")
    );
  }

  @media screen and (max-device-width: 1024px) {
    background-attachment: scroll; /* Fix for mobile devices that don't support fixed */
  }

  .intro-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(17, 17, 17, 0.8);
  }

  .intro-content {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    transform: translateY(-2.1rem);

    h1 {
      color: white;
      font-family: "poppins-medium", sans-serif;
      font-size: 8.4rem;
      line-height: 1.071;
      max-width: 900px;
      margin-top: 0;
      margin-bottom: 0.6rem;
      margin-left: auto;
      margin-right: auto;
      text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    }

    h5 {
      color: var(--accent-secondary);
      font-family: "poppins-bold", sans-serif;
      font-size: 2.3rem;
      line-height: 1.565;
      margin-bottom: 0;
      text-transform: uppercase;
      letter-spacing: 0.3rem;
      text-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
    }

    .intro-position {
      font-family: "lora-regular", serif;
      font-size: 1.7rem;
      line-height: 2.4rem;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      color: white;
      text-shadow: 0 0 6px rgba(0, 0, 0, 0.2);

      span {
        display: inline-block;
        padding-inline: 2rem;
        border-left: 2px solid rgba(255, 255, 255, 0.3);

        &:last-child {
          border-right: 2px solid rgba(255, 255, 255, 0.3);
        }
      }
    }

    .button {
      color: white !important;
      border-color: rgba(255, 255, 255, 0.3);
      height: 6rem !important;
      line-height: 5.4rem !important;
      padding: 0 3.5rem 0 3rem !important;
      margin-top: 0.6rem;
      font-size: 1.3rem;
      text-transform: uppercase;
      letter-spacing: 0.25rem;

      &:hover,
      &:focus {
        border-color: rgba(255, 255, 255, 0.5);
      }

      &::after {
        display: inline-block;
        content: "\f107";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        font-size: 1.6rem;
        line-height: inherit;
        text-align: center;
        position: relative;
        left: 1.2rem;
      }
    }
  }

  .social {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 7.2rem;
    font-size: 3.3rem;
    display: flex;
    justify-content: center;
    gap: 4rem;
    flex-wrap: wrap;
    padding-inline: 4rem;

    :deep() {
      a,
      a:visited {
        color: white;
      }

      a:hover,
      a:focus,
      a:active {
        color: var(--accent-primary);
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .intro-content h1 {
      font-size: 7rem;
    }
  }

  @media only screen and (max-width: 768px) {
    min-height: 660px;

    .intro-content {
      h1 {
        font-size: 5rem;
      }

      h5 {
        font-size: 1.8rem;
      }

      .intro-position {
        font-size: 1.3rem;
      }
    }

    .social {
      justify-content: space-evenly;
      gap: unset;
    }
  }

  @media only screen and (max-width: 600px) {
    min-height: 600px;

    .intro-content {
      h1 {
        font-size: 4.6rem;
        margin-bottom: 0.6rem;
      }

      h5 {
        font-size: 1.5rem;
        margin-bottom: 0.3rem;
        letter-spacing: 0.2rem;
      }

      .intro-position {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        column-gap: 3rem;
        font-size: 1.2rem;

        span {
          padding-inline: 0;
          border: none !important;
        }
      }
    }

    .social {
      justify-content: center;
      gap: 4rem;
    }
  }
}
</style>
