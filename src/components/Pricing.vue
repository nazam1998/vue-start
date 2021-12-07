<template>
  <div id="pricing">
    <div id="img-bg">
      <img id="img-bg-1" src="@/assets/pricings/bg-top.svg" alt="" />
      <img id="img-bg-2" src="@/assets/pricings/bg-bottom.svg" alt="" />
    </div>
    <div class="p-5 container-lg text-center mx-auto">
      <h1 id="title">Our Pricing</h1>
      <div class="toggle row justify-content-center mx-auto mt-5">
        <span class="col-lg-2 col-4">Annually</span>
        <label class="switch col-lg-2 col-3">
          <input @change="show" type="checkbox" />
          <span class="slider round"></span>
        </label>
        <span class="col-lg-2 col-4">Monthly</span>
      </div>
    </div>
    <div class="container-lg">
      <div class="row justify-content-center align-items-center">
        <Plan
          v-for="(elem, index) in pricings"
          :key="index"
          :class="{
            middle: index == 1,
          }"
          :elem="elem"
          :affiche.sync="affiche"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Plan from "@/components/Pricing/Plan.vue";
import data from "@/assets/pricings/data.json";
export default {
  name: "pricing",
  components: {
    Plan,
  },
  data() {
    return {
      affiche: false,
      pricings: data,
    };
  },
  methods: {
    show: function () {
      this.affiche = !this.affiche;
    },
  },
};
</script>

<style scoped>
@import "~bootstrap/dist/css/bootstrap.min.css";

@font-face {
  font-family: "Montserrat";
  src: url("~@/assets/pricings/fonts/Montserrat-SemiBold.ttf");
}
body {
  background-color: hsl(240, 78%, 98%);
}
#title {
  color: #6f718d;
}
#pricing {
  margin: 0;
  background-repeat: no-repeat;
  font-family: "Montserrat";
  font-weight: 700;
  width: 100%;
}
#img-bg- {
  position: relative;
}
#img-bg-1 {
  position: absolute;
  top: 0;
  right: 0;
}
#img-bg-2 {
  position: absolute;
  bottom: 0;
  left: 0;
}
p {
  font-size: 15px;
}

.toggle span {
  color: #bcbcc7;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #9297eb;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #9297eb;
}

input:focus + .slider {
  box-shadow: 0 0 1px #9297eb;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

@keyframes shining {
  from {
    transform: translate(-50%);
  }
  to {
    transform: translate(100%);
  }
}

@media (max-width: 376px) {
  #img-bg-1 {
    position: absolute;
    top: 50;
    right: -200px;
  }
  #img-bg-2 {
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
