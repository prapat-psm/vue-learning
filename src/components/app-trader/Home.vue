<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1>This is the Trade Application</h1>
        <h2>And this is your funds {{ funds | currency }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.fundsGetters
    }
  },
}
</script>