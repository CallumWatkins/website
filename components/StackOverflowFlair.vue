<template>
  <a href="https://stackoverflow.com/users/4415734/callum-watkins" target="_blank" rel="noopener me">
    <div class="flair">
      <div class="flair__grid">
        <div class="flair__profile-picture">
          <img src="@/assets/images/logos/CW_Logo.svg">
        </div>
        <div class="flair__service-logo">
          <img src="@/assets/images/stack-overflow.svg" />
        </div>
        <div class="flair__name">Callum Watkins</div>
        <div class="flair__details" v-if="user">
          <div class="flair__rep-badges">
            <div><FontAwesomeIcon icon="fa-solid fa-star" size="2xs" /> {{ user.reputation.toLocaleString() }}</div>
            <div><span class="gold"><FontAwesomeIcon icon="fa-solid fa-circle" size="2xs" /> {{ user.badge_counts.gold }}</span> <span class="silver"><FontAwesomeIcon icon="fa-solid fa-circle" size="2xs" /> {{ user.badge_counts.silver }}</span> <span class="bronze"><FontAwesomeIcon icon="fa-solid fa-circle" size="2xs" /> {{ user.badge_counts.bronze }}</span></div>
          </div>
          <div class="flair__questions-answers">
            <div><span>{{ user.question_count }}</span> Questions</div>
            <div><span>{{ user.answer_count }}</span> Answers</div>
            <div><span>{{ new Date(Date.now() - user.creation_date * 1000).getUTCFullYear() - 1970 }}</span> Years</div>
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
const userId = '4415734';

const { data } = useLazyFetch<SOUsers>(
  `https://api.stackexchange.com/2.3/users/${userId}?site=stackoverflow&filter=!duvJ0C1sKBF535KHUvUIF-QmcM7`,
  {
    server: false,
  },
);

const user = computed(() => data.value?.items[0]);

interface SOUsers {
  items: SOUser[];
}

interface SOUser {
  badge_counts: SOUserBadgeCounts;
  answer_count: number;
  question_count: number;
  reputation: number;
  creation_date: number;
  user_id: number;
}

interface SOUserBadgeCounts {
  bronze: number;
  silver: number;
  gold: number;
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
      "profile-picture details .";
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

  &__rep-badges {
    width: 100%;
    display: flex;
    gap: 1.5rem;

    span.gold svg {
      color: #ffcc01;
    }

    span.silver svg {
      color: #b4b8bc;
    }

    span.bronze svg {
      color: #d1a684;
    }
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
