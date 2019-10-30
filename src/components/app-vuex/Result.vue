<template>
  <div class="col-sm-12 my-3">
    <h2>Counter Result is {{ counter }}</h2>
  </div>
</template>

<script>
export default {
  // props: ['counter'], // ใช้ props ในการส่งค่าแบบเก่า
  computed: {
    counter() {
      // return this.$store.state.counter;
      return this.$store.getters.doubleCounter;
    }
  }
}
</script>