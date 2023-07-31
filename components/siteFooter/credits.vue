<script setup lang="ts"></script>

<template>
  <div class="credits">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 creditsInner">
          <div class="credits__translations">
            Translation:
            <NuxtLink
              to="https://openai.com/blog/chatgpt"
              external
              target="_blank"
            >
              ChatGPT
            </NuxtLink>
          </div>
          <div class="credits__design">
            Design: <NuxtLink to="#" external target="_blank">Kobra</NuxtLink>
          </div>
          <div class="credits__frontEnd">
            FrontEnd:
            <NuxtLink to="https://github.com/BobbaruK" external target="_blank"
              >SCSSeco</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.credits {
  .creditsInner {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 2rem;
  }
  a {
    font-weight: bold;
  }
}
</style>
