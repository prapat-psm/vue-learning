<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <form action="" method="post">
          <div class="form-group">
            <label for="addAge">Add Age</label>
            <input
              type="text"
              class="form-control"
              name=""
              id="addAge"
              aria-describedby="helperAge"
              placeholder=""
              v-model="inputAge"
              maxlength="2"
            >
            <small id="helperAge" class="form-text text-muted">Add age please</small>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary" @click.prevent="editedAge">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

// use EventBus for communicate between children
import { eventBus } from "../../main";

export default {
  props: ['inputAge'],
  methods: {
    editedAge: function() {
      // this.$emit('addInputAge', this.inputAge);
      // eventBus.$emit('addInputAge', this.inputAge);

      /* .changeAge is the central eventBus from main.js to every single template */
      eventBus.changeAge(this.inputAge);
    }
  }
}
</script>