<template>
  <header>
    <div class="row">
      <div class="menu" :class="{ open: navOpen }">
        <nav class="menu__dropdown">
          <ul>
            <li
              v-for="navItem in navItems"
              :key="navItem.id"
              :class="{ current: activeNavItemId === navItem.id }"
            >
              <NuxtLink :href="`#${navItem.id}`" @click="navOpen = false">{{
                navItem.text
              }}</NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="menu__header">
          <a class="menu__toggle" href="#" @click.prevent="navOpen = !navOpen">
            <span>Menu</span>
          </a>
          <div class="menu__logo">
            <NuxtLink href="/">Callum Watkins</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
interface NavItem {
  id: string;
  text: string;
}

const navOpen = ref(false);

defineProps<{
  navItems: NavItem[];
  activeNavItemId: string;
}>();
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  pointer-events: none;
  width: 100%;
  z-index: 999;

  .row {
    position: relative;
  }
}

.menu {
  position: absolute;
  min-width: 220px;
  height: 66px;
  top: 0;
  left: 90px;
  pointer-events: initial;
  color: white;

  &__header {
    background: black;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  &__toggle {
    width: 40px;
    height: 40px;
    margin-left: 20px;
    display: block;
    position: relative;

    span {
      display: block;
      background-color: var(--accent-primary);
      width: 24px;
      height: 3px;
      margin-top: -1.5px;
      font: 0/0 a;
      text-shadow: none;
      color: transparent;
      position: absolute;
      right: 8px;
      top: 50%;
      bottom: auto;
      left: auto;
      transition: background-color 0.2s ease-in-out;

      &::before,
      &::after {
        content: "";
        width: 100%;
        height: 100%;
        background-color: inherit;
        position: absolute;
        left: 0;
        transition-duration: 0.2s, 0.2s;
        transition-delay: 0.2s, 0s;
      }

      &::before {
        top: -8px;
        transition-property: top, transform;
      }

      &::after {
        bottom: -8px;
        transition-property: bottom, transform;
      }
    }
  }

  &__dropdown {
    transition: transform 0.25s ease-in;
    position: absolute;
    width: 100%;
    bottom: 0;
    background: black;
  }

  &__logo {
    margin-left: 20px;
    margin-right: 20px;

    a {
      display: block;
      margin: 0;
      padding: 0;
      border: none;
      text-shadow: none;
      color: white;
      text-transform: uppercase;
      font-family: "poppins-bold";
    }
  }

  &.open {
    .menu__dropdown {
      transition: transform 0.5s ease-in-out;
      transform: translateY(100%);
    }

    .menu__toggle span {
      background-color: rgba(255, 0, 119, 0);

      &::before,
      &::after {
        background-color: var(--accent-primary);
        transition-delay: 0s, 0.2s;
      }

      &::before {
        top: 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }

      &::after {
        bottom: 0;
        -webkit-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
    }
  }
}

nav ul {
  display: block;
  font-family: "poppins-medium", sans-serif;
  font-size: 1.5rem;
  background: black;
  padding: 24px 30px 42px;
  margin: 0;
  width: 100%;

  li {
    display: block;
    height: auto;
    text-align: left;
    padding: 0;

    a {
      display: block;
      color: white;
      width: auto;
      padding: 15px 0;
      line-height: 16px;
      border: none;
      transition: padding-left 0.3s ease-in-out;

      &:hover {
        color: var(--accent-primary);
        padding-left: 1rem;
      }
    }

    &.current a {
      background: none;
      color: var(--accent-primary);
    }
  }
}

@media only screen and (max-width: 1024px) {
  .menu {
    left: 60px;
  }
}

@media only screen and (max-width: 768px) {
  .menu {
    left: 50px;
  }
}

@media only screen and (max-width: 600px) {
  .menu {
    left: 35px;
  }
}

@media only screen and (max-width: 400px) {
  .menu {
    height: 50px;
    left: 25px;
  }
}
</style>
