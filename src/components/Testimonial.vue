<template>
  <div id="testimonial">
    <div class="card container mx-auto">
      <div class="carousel">
        <div class="carousel-content">
          <Carousel :current="current" :carousel="carousel" @next="next" @prev="prev"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Testimonial/Carousel";
import data from '@/assets/testimonials/data.json'
export default {
  name: "Testimonial",
  components: {
    Carousel
  },
  data() {
    return {
      carousel: data,
      current: 0,
      slide: "slide-left",
    };
  },
  methods: {
    next() {
      this.current = (this.current + 1) % this.carousel.length;
    },
    prev() {
      this.current = Math.abs(this.current - 1) % this.carousel.length;
    },
  },
  mounted() {
    window.addEventListener("keydown", (ev) => {
      if (ev.code == "ArrowLeft") {
        this.prev();
      } else if (ev.code == "ArrowRight") {
        this.next();
      }
    });
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;400&family=Manrope:wght@600&display=swap");
@import "~bootstrap/dist/css/bootstrap.css";
@import "~animate.css/animate.css";

.carousel {
  overflow: hidden;
  position: relative;
}
.card {
  background-image: url("~@/assets/testimonials/pattern-curve.svg");
  background-position: bottom left;
  background-repeat: no-repeat;
  overflow: hidden;
}

#testimonial {
  margin: 100px 0;
}
.btn:focus {
  box-shadow: none !important;
}
</style>
