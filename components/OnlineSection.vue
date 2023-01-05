<template>
  <section>
    <div class="row section-intro">
      <div class="col-twelve">
        <h5>Online</h5>
        <h1>Find me online.</h1>
      </div>
    </div>
    <div class="row profiles">
      <div class="col-six tab-full">
        <h3>Stack Overflow</h3>
        <p>I am a member of the Stack Overflow Q&amp;A community, contributing questions and answers to the wide community of professional and enthusiast programmers.</p>
        <div class="flair-container">
          <StackOverflowFlair />
        </div>
      </div>
      <div class="col-six tab-full">
        <h3>GitHub &amp; Gist</h3>
        <p>GitHub hosts my public code resositories and Gists. Gists are a handy way of sharing code; there's everything from snippets to whole projects, available for public use.</p>
        <div class="flair-container">
          <GitHubFlair />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.flair-container {
  display: flex;
  justify-content: center;
  margin-top: 4rem;

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
    margin-bottom: 4rem;
  }
}
</style>
