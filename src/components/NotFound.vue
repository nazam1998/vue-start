<template>
  <div class="text-center mt-5">
    <h1 class="text-muted">Sorry, We couldn't find the requested page :(</h1>
    <router-link to="/">Return Home</router-link>
    <button class="btn btn-primary" @click="back">Go back</button>
  </div>
</template>
<script>
export default {
  name: "NotFound",
  methods: {
    back: function () {
      this.$router.go(-1);
    },
  },
};
</script>
<style>
</style>