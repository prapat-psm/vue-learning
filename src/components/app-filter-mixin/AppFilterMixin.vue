<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <app-filter></app-filter>
      </div>
      <div class="col-sm-12">
        <app-mixin></app-mixin>
      </div>
    </div>
  </div>
</template>

<script>
import { FruitsMixin } from '../../fruitsMixin';
import Filter from './Filter';
import Mixin  from './Mixin';

export default {
  mixins: [FruitsMixin],
  components: {
    'app-filter' : Filter,
    'app-mixin'  : Mixin,
  },
}
</script>