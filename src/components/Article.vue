<template>
  <div id="article">
    <Card
      v-for="(quote, index) in quotes"
      :key="index"
      :quote="quote"
    />
  </div>
</template>

<script>
import Card from "./Articles/Card.vue";
import data from '@/assets/articles/data.json'
export default {
  name: "Article",
  components: {
    Card,
  },
  data() {
    return {
      quotes: data,
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@600&display=swap");
@import "~bootstrap/dist/css/bootstrap.css";
@import "~@fortawesome/fontawesome-free/css/all.min.css";
@import "~@fortawesome/fontawesome-free/css/regular.min.css";
@import "~@fortawesome/fontawesome-free/css/solid.min.css";
@import "~@fortawesome/fontawesome-free/css/brands.min.css";
body {
  background-color: #edf2f8;
  font-family: "Manrope", sans-serif;
}
#article {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 250px 0;
}
</style>




