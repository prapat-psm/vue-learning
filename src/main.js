import Vue from 'vue';
import App from './App.vue';
import VueRouter  from 'vue-router';
import { traderRoutes } from "./traderRoutes";

// import VueResource from 'vue-resource';
// import { testRoutes } from './testRoutes';
// import { testStore } from "./store/store";

Vue.use(VueRouter);
// Vue.use(VueResource);

/* eslint-disable */

export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit('addInputAge', age);
    }
  },
});

const traderRouter = new VueRouter({
  routes: traderRoutes,
  mode: 'history',
})

// const testRouter = new VueRouter({
//   routes: testRoutes,
//   mode: 'history', // default is hash นั่นจึงเป็นเหตุผลว่าทำไมถึงมี # อยู่บน url ตอนแรก
//   scrollBehavior: function(to, from, savedPosition) {
//     if (to.hash) {
//       return {
//         // -- Manually scroll position
//         // x: 0,
//         // y: 900
//         // -- More dynamic 
//         selector: to.hash
//       }
//     }
//   }
// });

// testRouter.beforeEach((to, from, next) => {
//   console.log('This is global before each');
//   next();
// })

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
  router: traderRouter,
  // router: testRouter,
  // store: testStore,
  render: h => h(App),
}).$mount('#app');