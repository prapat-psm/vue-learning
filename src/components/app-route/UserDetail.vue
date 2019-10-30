<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1>This User Detail Page</h1>

        <p>User Detail Loaded : {{ userId }}</p>

        <router-link
          tag="button"
          class="btn btn-danger"
          :to="linkTo"
        >Edit Profile</router-link>
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
      linkTo: {
        name: 'userEdit',
        params: {
          id: this.$route.params.id
        },
        query: {
          locale: 'en',
          q: 100 ,
          id: this.$route.params.id,
        },
        hash: '#data'
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    // ไม่สามารถใช้ this ได้ เพราะอยู่ในรูปแบบ before enter คือยังไม่สามารถ get this ได้ แต่ใช้เป็น vue instance ได้
    if (true) {
      next();
    } else {
      next(false);
    }
  },
}
</script>