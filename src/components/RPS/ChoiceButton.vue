<template>
  <button
    @click="!isChoosed && setChoice()"
    :class="
      'bg-light btn-circle ' +
      (!choice.color ? 'border-dark' : choice.color) +
      ' me-3 mb-2'
    "
  >
    <img :src="choice.img" alt="" />
  </button>
</template>
<script>
export default {
  name: "ChoiceButton",
  props: {
    choice: Object,
    isChoosed: Boolean,
    index: Number,
  },
  methods: {
    setChoice() {
      this.$emit("setChoice", this.index);
    },
  },
};
</script>
<style>
</style>