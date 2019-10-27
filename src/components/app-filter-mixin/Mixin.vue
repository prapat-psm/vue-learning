<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-sm-12">
        <h1>Mixins</h1>

        <div class="form-group">
          <label for="filter">Filter Fruits</label>
          <div class="input-group mb-3">
            <input
              type="text"
              name=""
              id="filter"
              class="form-control"
              placeholder=""
              v-model="filterText"
            >
            <div class="input-group-append">
              <button type="button" class="btn btn-outline-primary">Add Fruit</button>
            </div>
          </div>
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
  mixins: [FruitsMixin],
  created() {
    console.log('Inside Created');
  },
  methods: {
    addFruits: function(el) {
      this.fruits.push(el);
    }
  },
}
</script>