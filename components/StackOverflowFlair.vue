<template>
  <GenericFlair
    profileName="Callum Watkins"
    profilePicture="/logos/CW_Logo.svg"
    :logo="StackOverflowLogo"
    href="https://stackoverflow.com/users/4415734/callum-watkins">
    <template v-slot:details>
      <template v-if="user">
        <div class="flair__rep-badges">
          <div><FontAwesomeIcon icon="fa-solid fa-star" size="2xs" /> {{ user.reputation.toLocaleString() }}</div>
          <div><span class="gold"><FontAwesomeIcon icon="fa-solid fa-circle" size="2xs" /> {{ user.badge_counts.gold }}</span> <span class="silver"><FontAwesomeIcon icon="fa-solid fa-circle" size="2xs" /> {{ user.badge_counts.silver }}</span> <span class="bronze"><FontAwesomeIcon icon="fa-solid fa-circle" size="2xs" /> {{ user.badge_counts.bronze }}</span></div>
        </div>
        <div class="flair__questions-answers">
          <div><span>{{ user.question_count }}</span> Questions</div>
          <div><span>{{ user.answer_count }}</span> Answers</div>
          <div><span>{{ new Date(Date.now() - user.creation_date * 1000).getUTCFullYear() - 1970 }}</span> Years</div>
        </div>
      </template>
      <template v-else>
        Loading...
      </template>
    </template>
  </GenericFlair>
</template>

<script setup lang="ts">
import StackOverflowLogo from '@/assets/images/stack-overflow.svg';

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
.flair {
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
