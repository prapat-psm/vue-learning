<template>
  <div class="container mb-5">
    <div class="row">
      <div class="col-sm-12">
        <form action="">
          <div class="form-group">
            <label for="addName">Add some name</label>
            <input type="text" class="form-control" name="" id="addName" aria-describedby="addNameHelper" placeholder="" v-model="inputName">
            <small v-if="checkInput" id="addNameHelper" class="form-text text-muted">Please add some text</small>
          </div>
          <button type="submit" class="btn btn-primary" @click.prevent="submitName">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputName: '',
      checkInput: false,
    }
  },
  methods: {
    submitName: function() {
      if(this.inputName != '') {
        this.checkInput = false;
        this.$emit('nameAdded', this.inputName);
        this.inputName = ''
      } else {
        this.checkInput = true;
      }
    }
  }
}
</script>