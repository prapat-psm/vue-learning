<template>
  <div class="col-sm-12 my-3">
    <h2>Counter Another Result is {{ counter }}</h2>
  </div>
</template>

<script>
import * as named from "../../store/named";

export default {
  computed: {
    counter() {
      // normal getters
      return this.$store.getters[named.DOUBLE_COUNTER];
    }
  }
}
</script>