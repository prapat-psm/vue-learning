<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1>This User Edit Page</h1>
        <p>User Editing on ID : {{ userId }}</p>
        <p>User locale : {{ $route.query.locale }}</p>
        <p>User query Analytics : {{ $route.query.q }}</p>
        <p>User query ID : {{ $route.query.id }}</p>
        <div style="height: 900px">
        </div>
        <p id="data">Some Data to Scroll</p>
        <button type="button" name="" id="" class="btn btn-primary btn-lg" @click="confirmCheck = true">Confirm</button>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      userId: this.$route.params.id,
      confirmCheck: false,
    }
  },
  // ใช้ในการเช็คการทำงานก่อนจะออกจากหน้านั้นๆ
  beforeRouteLeave (to, from, next) {
    // ใช้ this ได้
    if (this.confirmCheck) {
      next();
    } else {
      if (confirm('Please click confirm')) {
        next()
      } else {
        next(false);
      }
    }
  }
}
</script>