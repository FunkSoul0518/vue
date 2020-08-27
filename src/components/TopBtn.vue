<template>
  <button class="top border-0">
    <font-awesome-icon
      icon="arrow-circle-up"
      class=" text-danger"
      @click.prevent="scrollTop"
    />
  </button>
</template>

<script>
import $ from "jquery";
export default {
  methods: {
    scrollTop() {
      $("html,body").scrollTop(0, 0);
    }
  }
};
</script>

<style lang="scss" scope>
.top {
  background-color: transparent;
  font-size: 2rem;
  position: fixed;
  right: 0;
  bottom: 10px;
  transition: all 0.3s;
  outline: none;
}

.top:hover {
  transform: translateY(-5px);
}
.top:focus {
  outline: none;
}
</style>
