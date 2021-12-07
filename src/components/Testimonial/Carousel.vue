<template>
  <div class="row align-items-center">
    <div class="col-6 carousel-text-section container mt-5 position-relative">
      <transition-group
        enter-active-class="animate__animated animate__fadeIndUp"
        leave-active-class="animate__animated animate__fadeOutLeft position-absolute"
      >
        <img
          :key="'img' + carousel[current].index"
          src="@/assets/testimonials/pattern-quotes.svg"
          alt=""
        />
        <div :key="'desc' + carousel[current].index" class="desc">
          {{ carousel[current].text }}
        </div>
        <div class="person" :key="'person' + carousel[current].index">
          {{ carousel[current].name }}
          <span class="text-secondary">{{ carousel[current].role }}</span>
        </div>
      </transition-group>
    </div>
    <div class="col-5 carousel-img-section container my-3 mx-auto text-center">
      <transition
        enter-active-class="animate__animated animate__fadeIndUp"
        leave-active-class="animate__animated animate__fadeOutUp"
      >
        <img
          class="img-responsive img-carousel mt-5"
          :src="imgSrc"
          :key="carousel[current].index"
          alt=""
        />
      </transition>
      <div class="carousel-button bg-light">
        <button @click="prev()" class="btn pr-2 rounded-left">
          <img src="@/assets/testimonials/icon-prev.svg" alt="" />
        </button>
        <button @click="next()" class="btn pl-2">
          <img src="@/assets/testimonials/icon-next.svg" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.imgSrc = require("@/assets/testimonials/" +
      this.carousel[this.current].picture);
  },
  updated() {
    this.imgSrc = require("@/assets/testimonials/" +
      this.carousel[this.current].picture);
  },
  name: "Carousel",
  props: {
    current: Number,
    carousel: Array,
  },
  data() {
    return {
      imgSrc: "",
    };
  },
  methods: {
    next() {
      this.$emit("next");
    },
    prev() {
      this.$emit("prev");
    },
  },
};
</script>

<style scoped>
.carousel-img-section {
  background-image: url("~@/assets/testimonials/pattern-bg.svg");
  background-size: contain;
  background-position: bottom left;
  background-repeat: no-repeat;
  font-family: "Inter", sans-serif;
  height: 500px;
}
.carousel-text-section {
  height: 200px;
}
.carousel-text-section .desc {
  font-size: 23px;
}
.carousel-text-section img {
  position: absolute;
  top: -40px;
  left: 70px;
}
.img-carousel {
  height: 400px;
  position: absolute;
  right: 10px;
}
.carousel-content {
  overflow: hidden;
}
.carousel-button {
  position: absolute;
  border-radius: 50%;
  padding: 0 20px;
  right: 300px;
  bottom: 47px;
}
</style>
