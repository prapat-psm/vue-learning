<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1>This User Page</h1>
        <hr>
        <!-- <h4>User ID Loaded {{ userId }} </h4> -->
        <!-- <hr> -->
        <button type="button" class="btn btn-outline-primary" @click="backToHome">Back Home</button>
        <hr>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     userId: this.$route.params.id
  //   }
  // },
  // watch: {
  //   '$route'(to, from) {
  //     this.userId = to.params.id;
  //   }
  // },
  methods: {
    backToHome: function() {
      // this.$router.push({path: '/'})
      // this.$router.push('/')
      this.$router.push({ name: 'home'})
    }
  },
}
</script>