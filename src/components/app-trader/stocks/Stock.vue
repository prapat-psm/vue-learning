<template>
  <div class="col-sm-6 col-md-4 mt-3">
    
    <div class="card text-left">
      <!-- <img class="card-img-top" src="holder.js/100px180/" alt=""> -->
      <div class="card-body">
        <h4 class="card-title">{{ stockProp.name }} <small>Price: {{ stockProp.price }}</small></h4>
        <div class="form-group">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            :class="{ danger : insufficientFunds }"
          >
        </div>
        <div class="form-group mb-0">
          <button
            type="button"
            class="btn btn-primary btn-lg btn-block"
            @click="buyStock"
            :disabled="insufficientFunds || quantity <= 0"
          >{{ insufficientFunds ? 'Too much than funds' : 'BUY' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.danger {
  border: 1px solid red
}
</style>

<script>
export default {
  props: ['stockProp'],
  data() {
    return {
      quantity: 0,
    }
  },
  computed: {
    funds() {
      return this.$store.getters.fundsGetters;
    },
    insufficientFunds() {
      return this.quantity * this.stockProp.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId : this.stockProp.id,
        stockPrice : this.stockProp.price,
        quantity: this.quantity
      }

      this.$store.dispatch('actBuyStocks', order)
      this.quantity = 0;
    }
  }
}
</script>