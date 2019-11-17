<template>
  <div class="col-sm-12 my-3">
    <p>Counter Result is : {{ simpleCounter }}</p>
    <p>Clicks Counter Result is : {{ clickCounter }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import * as named from "../../store/named";
export default {
  // props: ['counter'], // ใช้ props ในการส่งค่าแบบเก่า
  computed: {

    // maping getters
    ...mapGetters({
      simpleCounter : named.DOUBLE_COUNTER,
      clickCounter  : named.CLICKS_COUNTER
    }),
    // doubleCounter() {
    //   // return this.$store.state.counter;
    //   return this.$store.getters.doubleCounter;
    // },
    // clickCounter() {
    //   return this.$store.getters.clicksCounter;
    // }
  }
}
</script>