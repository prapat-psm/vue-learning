<template>
  <div class="col-sm-12 my-3">
    <div class="row">
      <!-- This is normal Actions -->
      <!-- <div class="col-sm-6">
        <button type="button" class="btn btn-primary btn-lg btn-block" @click="ActIncrement(200)">Increase</button>
      </div>
      <div class="col-sm-6">
        <button type="button" class="btn btn-primary btn-lg btn-block" @click="ActDecrement(200)">Decrease</button>
      </div> -->
      <!-- This is Async Actions -->
      <div class="col-sm-6">
        <button type="button" class="btn btn-primary btn-lg btn-block" @click="ActIncrement({ by: 200, duration: 1000 })">Increase</button>
      </div>
      <div class="col-sm-6">
        <button type="button" class="btn btn-primary btn-lg btn-block" @click="ActDecrement({ by: 200, duration: 1000 })">Decrease</button>
      </div>

      <!-- <p @click="rootState()">test rootState</p> -->
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import * as named from "../../store/named";

export default {
  methods: {
    ...mapActions({
      // ActIncrement : 'increment',
      // ActDecrement : 'decrement',
      // rootState : 'incrementIfOddOnRootSum',
      ActIncrement : named.ACTIONS_INC_COUNTER_ASYNC,
      ActDecrement : named.ACTIONS_DEC_COUNTER_ASYNC,
    }),
    // increment() {
    //   this.$store.commit('increment')
    // },
    // decrement() {
    //   this.$store.commit('decrement')
    // }
  }
}
</script>