<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1>This User Detail Page</h1>

        <p>User Detail Loaded : {{ userId }}</p>

        <router-link
          tag="button"
          class="btn btn-danger"
          :to="{
            name: 'userEdit',
            params: {
              id: $route.params.id
            },
            query: {
              locale: 'en',
              q: 100 ,
              id: $route.params.id
            }
          }"
        >Edit Profile</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userId: this.$route.params.id
    }
  },
}
</script>