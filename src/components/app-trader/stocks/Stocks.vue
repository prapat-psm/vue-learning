<template>
  <div class="container">
    <div class="row">
      <app-stock v-for="(stock, index) in stocks" :key="index" :stockProp="stock"></app-stock>
    </div>
  </div>
</template>

<script>
import Stock from './Stock';

export default {
  components: {
    'app-stock': Stock,
  },
  computed: {
    stocks() {
      return this.$store.getters.stocksGetters;
    }
  },
}
</script>