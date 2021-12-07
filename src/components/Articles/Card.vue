<template>
  <div class="card my-5">
    <div class="row">
      <div class="col-lg-4 col-12 img-responsive"></div>
      <div class="col-lg-8 col-12 text-section container p-3">
        <h4 class="text-left">
          {{ quote.title }}
        </h4>
        <p class="text-left">
          {{ quote.text }}
        </p>
        <div class="row footer justify-content-around align-items-center">
          <div class="col-lg-8 col-10 row quote">
            <div class="img-avatar col-lg-2 col-2">
              <img src="@/assets/articles/avatar-michelle.jpg" alt="" />
            </div>
            <div class="col-lg-10 col-10">
              <h5>
                {{ quote.name }} <br /><span>{{ quote.date }}</span>
              </h5>
            </div>
          </div>

          <div class="col-lg-4 col-12 icon-section" @blur="hideShare">
            <div
              v-if="display"
              class="row w-100 icon-shares align-items-center"
            >
              <div class="col-lg-6 col-6 text-share">SHARE</div>
              <div class="col-lg-2 col-2 btn-media facebook">
                <a href="#"><i class="fab fa-facebook fa-1x"></i></a>
              </div>
              <div class="col-lg-2 col-2 btn-media twitter">
                <a class="#"><i class="fab fa-twitter fa-1x"></i></a>
              </div>
              <div class="col-lg-2 col-2 btn-media pinterest">
                <a href="#"><i class="fab fa-pinterest fa-1x"></i></a>
              </div>
            </div>
            <div class="mydiv w-100">
              <button
                class="btn btn-light btn-share btn-circle"
                @click="showShare()"
              >
                <i class="fas fa-share"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    quote: Object,
  },
  data() {
    return {
      display: false,
    };
  },
  methods: {
    hideShare: function () {
      this.display = false;
    },
    showShare: function () {
      this.display = !this.display;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text-section {
  padding: 10px;
}

.img-avatar img {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.btn-circle {
  width: 30px;
  height: 30px;
  text-align: center;
  padding: 0;
  font-size: 12px;
  line-height: 1.428571429;
  border-radius: 50%;
}
.quote {
  margin: 20px auto;
  justify-content: space-around;
  align-items: center;
}
.quote h5 {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
}
.quote span {
  font-size: 12px;
  color: gainsboro;
}
p.text-left {
  font-size: 13px;
  font-weight: 500;
  color: #8c9093;
}
h5 {
  font-size: 13px;
  font-weight: 700;
}
.img-responsive {
  background-image: url("~@/assets/articles/drawers.jpg");
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.btn-share {
  background-color: #f0f4fd;
  color: #768394;
}
.btn-media {
  padding: 10px;
}
.btn-media a {
  text-decoration: none;
  color: white;
}
.icon-section {
  position: relative;
}
.icon-shares {
  position: absolute;
  width: 55%;
  background-color: #49556b;
  padding: 0 15px;
  color: white;
  top: -55px;
  z-index: 12;
  right: 25px;
}
.text-share {
  font-size: 10px;
  color: lightgrey;
  vertical-align: middle;
  letter-spacing: 2px;
}
.btn-share {
  width: 30px;
  height: 30px;
  padding: 6px 0px;
  border-radius: 15px;
  text-align: center;
  font-size: 12px;
  line-height: 1.42857;
}
.facebook:after {
  position: absolute;
  bottom: -10px;
  margin-left: -21px;
  content: "";
  border-left: 11px solid transparent;
  border-right: 11px solid transparent;
  border-top: 10px solid #49556b;
}
.facebook:hover,
.facebook:focus {
  background: #49556b;
}
.facebook:after {
  border-top-color: #49556b;
}
.card {
  margin: auto;
  width: 50%;
  border-radius: 12px;
  box-shadow: 10px 5px 5px 5px grey;
}
@media (max-width: 378px) {
  .card {
    width: 85%;
  }
  .img-responsive {
    height: 250px;
    width: 93.5%;
    margin: 0 auto;
    border-bottom-left-radius: 0;
    border-top-right-radius: 12px;
  }
  .quote {
    justify-content: start;
    align-items: center;
  }
  .img-avatar img {
    /* vertical-align: middle; */
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  .icon-shares {
    bottom: 0;
    top: 0;
    right: 0;
    left: 0;
    padding: 20px;
    position: relative;
  }
}
</style>
