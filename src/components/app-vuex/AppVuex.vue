<template>
  <div class="container">
    <div class="row">
      <app-counter-result></app-counter-result>
      <app-counter-button></app-counter-button>
      <app-anoter-counter></app-anoter-counter>
      <app-anoter-result></app-anoter-result>
      <hr>
      <!-- Use Methods to bind data -->
      <!-- <div class="col-sm-12">
        <input class="form-control" type="text" :value="compUpdateValue" @input="methUpdateValue">
      </div>
      <div class="col-sm-12">
        <h4 class="text-left">Result two-way binding : {{ compUpdateValue }}</h4>
      </div> -->
      <div class="col-sm-12">
        <input class="form-control" type="text" v-model="compUpdateValue">
      </div>
      <div class="col-sm-12">
        <h4 class="text-left">Result two-way binding : {{ compUpdateValue }}</h4>
      </div>
    </div>
  </div>
</template>
<script>
import resultCounter from './Result'
import anotherResult from './AnotherResult'
import buttonCounter from './Counter'
import anotherCounter from './AnotherCounter'

export default {
  computed: {
    compUpdateValue: {
      // use get() and set() to bind value.
      get() {
        return this.$store.getters.gettersInputValue;
      },
      set(v) {
        this.$store.dispatch('updateInputValue', v)
      }
      // Normal return getters and bind data with method "methUpdateValue"
      // return this.$store.getters.gettersInputValue;
    }
  },
  methods: {
    methUpdateValue(event) {
      this.$store.dispatch('updateInputValue', event.target.value);
    }
  },
  components: {
    'app-counter-result' : resultCounter,
    'app-counter-button' : buttonCounter,
    'app-anoter-result' : anotherResult,
    'app-anoter-counter' : anotherCounter,
  }
}
</script>