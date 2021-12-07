<template>
  <div id="signup">
    <div class="container mx-auto">
      <div class="row w-100 align-middle justify-content-center">
        <div class="col-4 text-light my-title align-self-center">
          <h1>Learn to code by watching others</h1>
          <p>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <div class="offset-1 col-5 form text-center my-5">
          <div
            class="jumbotron jumbotron-fluid align-middle rounded shadow-bottom"
          >
            <div class="container">
              <p class="lead text-white py-2">
                Try it free 7 days <span>then $20/mo, thereafter</span>
              </p>
            </div>
          </div>
          <form
            class="bg-white rounded shadow p-5"
            @submit.prevent="validateAll()"
          >
            <small
              id="success-help"
              v-if="msg.success"
              class="form-text text-success fst-italic"
              >{{ msg.success }}</small
            >

            <FormInput
              :bus="bus"
              :msg="msg"
              @inputUpdate="validateInput"
              :inputName="'firstname'"
              :name="firstname"
              :placeholder="'First name'"
              type="text"
            />
            <FormInput
              :bus="bus"
              :msg="msg"
              @inputUpdate="validateInput"
              :inputName="'lastname'"
              :name="lastname"
              :placeholder="'Last name'"
              type="text"
            />
            <FormInput
              :bus="bus"
              :msg="msg"
              @inputUpdate="validateEmail"
              @blur="validateEmail"
              :inputName="'email'"
              :name="email"
              :placeholder="'Email'"
              type="email"
            />
            <FormInput
              :bus="bus"
              :msg="msg"
              @inputUpdate="validateInput"
              :inputName="'password'"
              :name="password"
              :placeholder="'Password'"
              type="password"
            />
            <button
              type="submit"
              class="btn btn-green text-uppercase w-100 py-3 my-3 shadow"
            >
              Claim Your free Trial
            </button>
            <small class="text-secondary mt-3"
              >By clicking the button, you are agreeing to our
              <a href="#" class="text-danger text-decoration-none"
                >Terms and Services</a
              ></small
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormInput from "@/components/Form/FormInput.vue";
import Vue from 'vue';
export default {
  name: "SignUp",
  components: {
    FormInput,
  },
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      msg: {},
      bus: new Vue()
    };
  },
  methods: {
    validateEmail(value) {
      this.email = value;
      if (value.includes("@")) {
        this.$set(this.msg, "email", "");
      } else {
        this.$set(this.msg, "email", "Invalid Email Address");
      }
    },
    validateInput(value) {
      let input = value[0];
      let name = value[1];
      switch (input) {
        case "firstname":
          this.firstname = value[2];
          break;
        case "lastname":
          this.lastname = value[2];
          break;
        case "password":
          this.password = value[2];
          break;
      }

      if (value[2] === "") {
        this.$set(this.msg, input, name + " cannot be empty");
      } else {
        this.$set(this.msg, input, "");
      }
    },
    validateAll: function () {
      this.validateEmail(this.email);
      this.validateInput(["First Name", "firstname", this.firstname]);
      this.validateInput(["Last Name", "lastname", this.lastname]);
      this.validateInput(["Password", "password", this.password]);

      if (
        this.firstname !== "" &&
        this.lastname !== "" &&
        this.password !== "" &&
        this.email !== ""
      ) {
        this.$set(this.msg, "success", "Trial Successfully Claimed");
        this.firstname = "";
        this.lastname = "";
        this.email = "";
        this.password = "";
        this.bus.$emit('clear')
      }
      return this.msg;
    },
  },
};
</script>

<style scoped>
@import "~bootstrap/dist/css/bootstrap.css";
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@600&display=swap");
#signup {
  background-image: url("~@/assets/form/bg-intro-desktop.png");
  background-color: hsl(0, 100%, 74%);
  background-size: cover;
  min-height: 100%;
  font-size: 16px;
}
#signup {
  font-family: Poppins;
  vertical-align: middle;
}

.my-title h1 {
  font-weight: 700;
  font-size: 53px;
}
.my-title p {
  font-weight: 400;
}
.lead {
  font-weight: 600;
}
.lead span {
  font-weight: 400;
}
.jumbotron {
  background-color: #5d54a3;
}
.btn-green {
  background-color: #77e2b4;
  color: white;
}
.shadow-bottom {
  box-shadow: 0px 15px 17px -15px #111;
}
.form-group {
  position: relative;
}
.input-icon {
  position: absolute;
  top: 8px;
  right: 10px;
}
</style>
