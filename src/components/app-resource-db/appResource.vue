<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1>Vue resource</h1>

        <div class="form-group">
          <label for="userName">USERNAME</label>
          <input type="text" id="userName" class="form-control" v-model="users.username">
        </div>

        <div class="form-group">
          <label for="eMail">E-MAIL</label>
          <input type="text" id="eMail" class="form-control" v-model="users.eMail">
        </div>

        <div class="form-group">
          <button type="submit" class="btn btn-danger" @click="formSubmit">Submit</button>
        </div>
        <hr>
        <div class="form-group">
          <button type="submit" class="btn btn-danger" @click="fetchData">Get Data</button>
        </div>

        <!-- get json data from firebase -->
        <ul class="list-group">
          <li class="list-group-item" v-for="(u, index) in usersArr" :key="index">{{ index }} | {{ u.username }} | {{ u.eMail }} </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: {
        username: '',
        eMail: ''
      },
      usersArr: [],
      resource: {}
    }
  },
  methods: {
    formSubmit: function() {
      // this.$http.post('data.json', this.users)
      //     .then(response => {
      //       console.log(response);
      //     }, error => {
      //       console.log(error);
      //     });
      // this.resource.save({}, this.users)
      this.resource.saveAlt(this.users);
    },
    fetchData: function() {
      this.$http.get('data.json')
          .then(response => {
            // can't store response.json() with variable, have to use return to return Objects
            // const data = response.json();

            return response.json();
          })
          .then(data => {
            const resultArr = [];
            for (let value in data) {
              resultArr.push(data[value])
            }

            this.usersArr = resultArr;
          })
    },
    created() {
      // Custom Resource
      const customResource = {
        saveAlt: { method: "POST", url: "alternative.json" }
      };
      this.resource = this.$resource("data.json", {}, customResource);
    },
  },
}
</script>