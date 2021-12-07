<template>
  <div class="form-group text-end my-3">
    <input
      :type="type"
      :class="{
        'form-control': true,
        'border-danger': msg[inputName],
      }"
      @blur="blurInput"
      id="first-name"
      aria-describedby="firstname-help"
      :placeholder="placeholder"
      v-model="var_input"
    />
    <img
      v-if="msg[inputName]"
      src="@/assets/form/icon-error.svg"
      alt=""
      class="input-icon"
    />
    <small
      id="firstname-help"
      v-if="msg[inputName]"
      class="form-text text-danger fst-italic"
      >{{ msg[inputName] }}</small
    >
  </div>
</template>
<script>
import Vue from 'vue';
export default {
  name: "FormInput",
  created() {
    this.var_input = this.name;
  },
  mounted() {
    this.bus.$on('clear', this.clear)
  },
  data() {
    return {
      var_input: "",
    };
  },
  props: {
    inputName: String,
    name: String,
    msg: Object,
    placeholder: String,
    type: String,
    bus: Vue,
  },
  methods: {
    blurInput(){
      this.$emit('blur', this.var_input)
    },
    clear(){
      this.var_input = ""
    }
  },
  watch: {
    var_input() {
      if (this.inputName != "email") {
        this.$emit("inputUpdate", [
          this.inputName,
          this.placeholder,
          this.var_input,
        ]);
      } else if (this.inputName == "email"){
        this.$emit("inputUpdate", this.var_input);
      }
    },
  },
};
</script>
<style>
</style>