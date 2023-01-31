<template>
  <GenericFlair
    profileName="Callum Watkins"
    profilePicture="/logos/CW_Logo.svg"
    :logo="GitHubLogo"
    href="https://github.com/CallumWatkins"
  >
    <template v-slot:details>
      <template v-if="data">
        <div class="flair__contributions">
          <div>
            <FontAwesomeIcon icon="fa-solid fa-code-commit" size="xs" />
            {{
              data.data.user.contributionsCollection.contributionCalendar.totalContributions.toLocaleString()
            }}
            contributions in the last year
          </div>
        </div>
        <div class="flair__questions-answers">
          <div>
            <span>{{ data.data.user.repositories.totalCount }}</span>
            Repositories
          </div>
          <div>
            <span>{{ data.data.user.gists.totalCount }}</span> Gists
          </div>
          <div>
            <span>{{
              new Date(
                Date.now() - Date.parse(data.data.user.createdAt),
              ).getUTCFullYear() - 1970
            }}</span>
            Years
          </div>
        </div>
      </template>
      <template v-else> Loading... </template>
    </template>
  </GenericFlair>
</template>

<script setup lang="ts">
import GitHubLogo from "@/assets/images/github-mark-white.svg";

const { data } = useLazyFetch<GHResponse>("/api/github", {
  server: false,
});

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
.flair {
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
