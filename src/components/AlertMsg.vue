<template>
  <div class="message-alert">
    <div
      class="alert alert-dismissible text-center"
      :class="'alert-' + item.status"
      v-for="(item, i) in messages"
      :key="i"
    >
      {{ item.message }}
      <button
        type="button"
        class="close"
        @click="removeMsg(i)"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  name: "Navbar",
  data() {
    return {
      messages: []
    };
  },
  methods: {
    updateMsg(message, status) {
      const timestamp = Math.floor(new Date() / 1000);
      //當作id
      this.messages.push({
        message,
        status,
        timestamp
      });
      this.removeMsgWithTimeing(timestamp);
    },
    removeMsgWithTimeing(timestamp) {
      const vm = this;
      setTimeout(() => {
        vm.messages.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            vm.messages.splice(i, 1);
            //5秒之後去篩選id只要一樣就把msg刪掉
          }
        });
      }, 2000);
    },
    removeMsg(num) {
      this.messages.splice(num, 1);
    }
  },
  created() {
    const vm = this;
    eventBus.$on("message:push", (message, status = "warning") => {
      vm.updateMsg(message, status);
    });
  }
};
</script>

<style lang="scss" scope>
.message-alert {
  position: fixed;
  width: 250px;
  top: 71px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1100;
}
</style>
