<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-sm-12">
        <h1>Filters</h1>

        <p>{{ someText | toUppercase | toLowercase }}</p>
      </div>
      <div class="col-sm-12">
        <div class="form-group">
          <label for="filter">Filter Fruits</label>
          <input
            type="text"
            name=""
            id="filter"
            class="form-control"
            placeholder=""
            v-model="filterText"
          >
        </div>
        <ul class="list-group">
          <li v-for="(fruit, index) in filteredFruits" :key="index" class="list-group-item">{{ fruit }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { FruitsMixin } from '../../fruitsMixin'

export default {
  data() {
    return {
      someText: 'Hello World',
    }
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  mixins: [FruitsMixin],
}
</script>