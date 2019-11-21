<template>
  <div class="col-sm-6 col-md-4 mt-3">
    
    <div class="card text-left">
      <!-- <img class="card-img-top" src="holder.js/100px180/" alt=""> -->
      <div class="card-body">
        <h4 class="card-title">{{ stockProp.name }} <small class="">Price: {{ stockProp.price }}</small></h4>
        <div class="form-group">
          <input
            type="number"
            name=""
            id=""
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
          >
        </div>
        <div class="form-group mb-0">
          <button
            type="button"
            class="btn btn-primary btn-lg btn-block"
            @click="buyStock"
            :disabled="quantity <= 0"
          >BUY</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stockProp'],
  data() {
    return {
      quantity: 0,
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId : this.stockProp.id,
        stockPrice : this.stockProp.price,
        quantity: this.quantity
      }
      console.log(order);
      this.$store.dispatch('actBuyStocks', order)
      this.quantity = 0;
    }
  }
}
</script>