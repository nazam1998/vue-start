<template>
  <div
    class="plan card text-center rounded col-11 col-lg-3 my-3"
    :class="{
      middle: index == 1,
      side: index != 1,
    }"
  >
    <div class="card-body p-4 my-5">
      <h4 class="card-title">{{ elem.title }}</h4>
      <h1 class="card-title">
        <span class="dollar-sign">$</span
        >{{ affiche ? elem.monthPrice : elem.yearPrice }}
      </h1>
      <hr />
      <p class="card-text">{{ elem.storage }} Storage</p>
      <hr />
      <p class="card-text">{{ elem.users }} Users allowed</p>
      <hr />
      <p class="card-text">Send up top {{ elem.transfer }}</p>
      <hr />
      <a href="#" class="btn rounded py-2 px-4 w-100">Learn more</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Plan",
  props: ['elem', 'index', 'affiche'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dollar-sign {
  font-size: 20px;
  vertical-align: middle;
}
.card .btn {
  background-color: #9297eb;
  color: white;
}

.card .btn:hover {
  background-color: white;
  color: #9297eb;
  border-color: #8b8ca3;
}
.card-title {
  font-weight: 1000;
}
.middle {
  box-shadow: -40px 0px 50px -50px #000000, 40px 0px 50px -50px #000000;
  z-index: 10;
  background: #9297eb;
  color: white;
}
.middle::before {
  display: block;
  content: "";
  width: 50%;
  height: 100%;
  transform: translate(50%);
  background-image: linear-gradient(to top, transparent, #9297eb, transparent);
  animation-name: shining;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}
.card::before {
  display: block;
  content: "";
  width: 50%;
  height: 100%;
  transform: translate(50%);
  background-image: linear-gradient(to right, transparent, white, transparent);
  animation-name: shining;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}
.middle hr {
  color: white;
  background-color: white;
}
.side {
  height: 445px;
}
.middle .btn {
  background-color: white;
  color: #9297eb;
}
.middle .btn:hover {
  background-color: #9297eb;
  color: white;
  border-color: white;
}
.card {
  box-shadow: -40px 0px 50px -50px #000000, 40px 0px 50px -50px #000000;
}
.card hr {
  color: #9297eb;
}
</style>
