import Vue from 'vue';
import App from './App.vue';
// import VueResource from 'vue-resource';
import VueRouter  from 'vue-router';
import { routes } from './routes';

import { store } from "./store/store";

/* eslint-disable */ 

// Vue.use(VueResource);
Vue.use(VueRouter);


export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit('addInputAge', age);
    }
  },
});

const router = new VueRouter({
  routes: routes,
  mode: 'history', // default is hash นั่นจึงเป็นเหตุผลว่าทำไมถึงมี # อยู่บน url ตอนแรก
  scrollBehavior: function(to, from, savedPosition) {
    if (to.hash) {
      return {
        // -- Manually scroll position
        // x: 0,
        // y: 900
        // -- More dynamic 
        selector: to.hash
      }
    }
  }
});

router.beforeEach((to, from, next) => {
  console.log('This is global before each');
  next();
})

// set default root for database.
// Vue.http.options.root = 'https://vue-resume-db.firebaseio.com/';

// Vue.http.interceptors.push((request, next) => {
//   console.log(request);
//   if (request.method == "POST") {
//     request.method = "PUT";
//   }
//   next(response => {
//     response.json = function() { return {messages: response.body }}
//   });
// });

// Vue.config.productionTip = false;

new Vue({
  router: router,
  store,
  render: h => h(App),
}).$mount('#app');