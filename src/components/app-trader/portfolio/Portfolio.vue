<template>
  <div class="container">
    <div class="row">
      <app-stock v-for="(stock, index) in stockGetters" :key="index" :stockProp="stock"></app-stock>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Stock from './Stock';

export default {
  components: {
    appStock: Stock
  },
  computed: {
    ...mapGetters({
      stockGetters: 'stockPortfolio',
    }),
  }
}
</script>