<template>
  <div class="container mb-5">
    <div class="row">
      <app-first-item v-for="(name, index) in names" :key="index"  @click.native="deleteThisName(index)">
        <div class="bg-primary">
          <p class="mb-0 text-light text-center">{{ name }}</p>
        </div>
      </app-first-item>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <h3>Test Event Bus</h3>
      </div>
      <div class="col-sm-4 offset-sm-4">
        <p class="mb-0 text-primary text-center"> Age : {{ inputAge }} </p>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../main";
import FirstItem from './FirstChild'

export default {
  data() {
    return {
      inputAge: Number,
    }
  },
  props: ['names'],
  components: {
    'app-first-item' : FirstItem
  },
  methods: {
    deleteThisName(index) {
      this.$emit('nameDeleted', index)
    },
  },
  created() {
    eventBus.$on('addInputAge', (ageValue) => {
      this.inputAge = ageValue
    });
  },
}
</script>