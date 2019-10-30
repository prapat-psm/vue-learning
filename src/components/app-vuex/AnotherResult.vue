<template>
  <div class="col-sm-12 my-3">
    <h2>Counter Another Result is {{ counter }}</h2>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.doubleCounter;
    }
  }
}
</script>