<template>
  <div class="row">
    <div class="col-sm-12">
      <form action="">
        <div class="form-group">
          <label for="addTextTitle">Text Titlte</label>
          <input 
            type="text"
            class="form-control"
            id="addTextTitle"
            placeholder="Add some text in quote title here"
            v-model="title"
          >
        </div>
        <div class="form-group">
          <label for="addTextFooter">Text Footer</label>
          <input
            type="text"
            class="form-control"
            id="addTextFooter"
            placeholder="Add some text in quote footer here"
            v-model="footer"
          >
        </div>
        <div class="form-group">
          <button class="btn btn-large btn-outline-primary" type="button" id="button-submit" @click.prevent="createNew">Submit</button>
        </div>

        {{ title }}, {{ footer }}
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      footer: '',
    }
  },
  methods: {
    createNew: function() {
      this.$emit('titleAdded', this.title , this.footer);
      this.title = '';
      this.footer = '';
    }
  },
}
</script>