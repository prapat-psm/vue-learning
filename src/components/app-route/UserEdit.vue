<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1>This User Edit Page</h1>
        <p>User Editing on ID : {{ userId }}</p>
        <p>User locale : {{ $route.query.locale }}</p>
        <p>User query Analytics : {{ $route.query.q }}</p>
        <p>User query ID : {{ $route.query.id }}</p>
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