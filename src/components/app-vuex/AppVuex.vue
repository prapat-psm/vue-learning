<template>
  <div class="container">
    <div class="row">
      <app-counter-result></app-counter-result>
      <app-counter-button></app-counter-button>
      <app-anoter-result></app-anoter-result>
    </div>
  </div>
</template>
<script>
import resultCounter from './Result'
import anotherResult from './AnotherResult'
import buttonCounter from './Counter'
export default {
  components: {
    'app-counter-result' : resultCounter,
    'app-counter-button' : buttonCounter,
    'app-anoter-result' : anotherResult,
  }
}
</script>