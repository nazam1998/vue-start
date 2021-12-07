<template>
  <div id="app">
    <NavBar/>
    <router-view/>
    <!-- <Pricing/>
    <Article/>
    <SignUp/>
    <Testimonial/>
    <RockPaperScissors/> -->
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
// import Article from './components/Article.vue';
// import Pricing from './components/Pricing.vue';
// import SignUp from './components/SignUp.vue';
// import Testimonial from './components/Testimonial.vue';
// import RockPaperScissors from './components/RockPaperScissors.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    // Article,
    // Pricing,
    // SignUp,
    // Testimonial,
    // RockPaperScissors,
  }
}
</script>

<style>

</style>
