<template>
  <!-- <home /> -->
  <router-view></router-view>
</template>

<script setup>
import home from './components/home.vue'
import about from './components/about.vue'

const routes = {
  '/home': home,
  '/about': about
}



</script>

<style lang="scss">
  @import './assets/font/fonts.css';
  #app {
    font-family: 'SmileySans';
    font-weight: normal;
  }
</style>



<!-- <style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->
