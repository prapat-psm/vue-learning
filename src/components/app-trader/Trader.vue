<template>
  <div>
    <app-header></app-header>
    <transition name="switch" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style lang="css" scoped>
  .switch-enter {}
  .switch-enter-active {
    animation: slideIn 0.5s ease-in-out;
  }
  .switch-leave {}
  .switch-leave-active {
    animation: slideOut 0.5s ease-in-out;
  }

  @keyframes slideIn {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slideOut {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
</style>

<script>
import Header from "./Header";

export default {
  components: {
    'app-header' : Header,
  },
  created() {
    this.$store.dispatch('initStocks');
  }
}
</script>