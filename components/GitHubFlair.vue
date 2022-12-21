<template>
  <a href="https://github.com/CallumWatkins" target="_blank" rel="noopener me">
    <div class="flair">
      <div class="flair__grid">
        <div class="flair__profile-picture">
          <img src="@/assets/images/logos/CW_Logo.svg">
        </div>
        <div class="flair__service-logo">
          <img src="@/assets/images/github-mark-white.svg" />
        </div>
        <div class="flair__name">Callum Watkins</div>
        <div class="flair__details" v-if="data">
          <div class="flair__contributions">
            <div><FontAwesomeIcon icon="fa-solid fa-code-commit" size="xs" /> {{ data.data.user.contributionsCollection.contributionCalendar.totalContributions.toLocaleString() }} contributions in the last year</div>
          </div>
          <div class="flair__questions-answers">
            <div><span>{{ data.data.user.repositories.totalCount }}</span> Repositories</div>
            <div><span>{{ data.data.user.gists.totalCount }}</span> Gists</div>
            <div><span>{{ new Date(Date.now() - Date.parse(data.data.user.createdAt)).getUTCFullYear() - 1970 }}</span> Years</div>
          </div>
        </div>
        <div class="flair__details" v-else>
          Loading...
        </div>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
const { data } = useLazyFetch<GHResponse>(
  '/api/github',
  {
    server: false,
  },
);

interface GHResponse {
  data: GHData;
}

interface GHData {
  user: GHUser;
}

interface GHUser {
  contributionsCollection: GHContributionsCollection;
  repositories: GHRepositories;
  gists: GHGists;
  createdAt: string;
}

interface GHContributionsCollection {
  contributionCalendar: GHContributionCalendar;
}

interface GHContributionCalendar {
  totalContributions: number;
}

interface GHRepositories {
  totalCount: number;
}

interface GHGists {
  totalCount: number;
}
</script>

<style lang="scss" scoped>
a:focus, a:hover {
  .flair {
    transform: translateY(-4px);
    box-shadow: 0px 5px 5px 1px rgba(150,150,150,1);
  }
}

.flair {
  padding: 1rem;
  background-color: #2d2d2d;
  transition: all 0.25s ease-out;
  text-align: left;

  &__grid {
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI Adjusted", "Segoe UI", "Liberation Sans", sans-serif;
    width: 31rem;
    height: 6rem;
    display: grid;
    grid-template-columns: 6rem 1fr 2.5rem;
    grid-template-rows: 2.5rem 1fr;
    grid-auto-flow: row;
    grid-template-areas:
      "profile-picture name service-logo"
      "profile-picture details details";
  }

  &__profile-picture {
    grid-area: profile-picture;
  }

  &__service-logo {
    grid-area: service-logo;
    display: flex;
    justify-content: flex-end;
  }

  &__name {
    grid-area: name;
    display: flex;
    font-weight: bold;
    align-items: center;
    padding-left: 1rem;
  }

  &__details {
    grid-area: details;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.2rem;
    padding-left: 1rem;
    line-height: 1.6rem;
    font-size: 1.4rem;
  }

  &__contributions {
    width: 100%;
    text-align: left;
  }

  &__questions-answers {
    display: flex;
    gap: 1rem;
    font-size: 1.3rem;

    span {
      font-weight: 600;
    }
  }
}
</style>
