<template>
  <div class="col-sm-12 my-3">
    <div class="row">
      <div class="col-sm-6">
        <button type="button" class="btn btn-primary btn-lg btn-block" @click="muInc(50)">Increase</button>
      </div>
      <div class="col-sm-6">
        <button type="button" class="btn btn-primary btn-lg btn-block" @click="muDec(50)">Decrease</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import * as named from "../../store/named";

export default {
  methods: {
    ...mapMutations({
      muInc : named.MUTATIONS_INC_COUNTER,
      muDec : named.MUTATIONS_DEC_COUNTER,
    }),
    // increment() {
    //   this.$store.state.counter += 5;
    // },
    // decrement() {
    //   this.$store.state.counter -= 5;
    // }
  }
}
</script>