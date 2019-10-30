<template>
  <div class="col-sm-12 my-3">
    <div class="row">
      <div class="col-sm-6">
        <button type="button" class="btn btn-primary btn-lg btn-block" @click="increment">Increase</button>
      </div>
      <div class="col-sm-6">
        <button type="button" class="btn btn-primary btn-lg btn-block" @click="decrement">Decrease</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.state.counter += 5;
    },
    decrement() {
      this.$store.state.counter -= 5;
    }
  }
}
</script>