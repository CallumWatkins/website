<template>
  <footer>
    <div class="row">
      <div class="footer">
        <div class="footer__copyright">
          <div>&copy; 2018–{{ new Date().getFullYear() }} Callum Watkins</div>
          <div>
            Design by
            <NuxtLink
              href="https://www.styleshout.com"
              target="_blank"
              rel="nofollow noopener noreferrer"
              >Styleshout</NuxtLink
            >
            &amp; me
          </div>
        </div>
        <SocialLinks class="footer__social" />
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  padding-top: 3rem;
  padding-bottom: 3rem;
  font-size: 1.4rem;
  font-family: "poppins-regular", sans-serif;
  color: var(--grey-57);
  background: var(--grey-92);

  .row {
    max-width: 900px;
  }
}

.footer {
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 4rem;
  row-gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
  }

  &__copyright {
    grid-column: 1;

    @media screen and (max-width: 768px) {
      grid-column: unset;
      grid-row: 2;
      text-align: center;
    }

    a,
    a:visited {
      color: inherit;
    }

    a:hover,
    a:focus,
    a:active {
      color: var(--grey-37);
    }

    & > div {
      display: inline;

      &:first-child {
        border-right: 2px solid rgba(255, 255, 255, 0.3);
        padding-right: 1rem;

        @media screen and (max-width: 600px) {
          display: block;
          border: unset;
          padding: unset;
        }
      }

      &:last-child {
        padding-left: 1rem;

        @media screen and (max-width: 600px) {
          display: block;
          padding: unset;
        }
      }
    }
  }

  &__social {
    grid-column: 2;
    display: flex;
    justify-content: space-between;
    font-size: 2.1rem;

    @media only screen and (max-width: 768px) {
      grid-column: unset;
      grid-row: 1;
      justify-self: center;
      width: 100%;
      max-width: 400px;
    }

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
}
</style>
