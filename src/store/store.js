import Vue  from 'vue';
import Vuex from 'vuex';

// split function import
import getters   from "./getters";
import actions   from "./actions";
import mutations from "./mutations";

// modules import
import counterModules from "./modules/counterModules";

Vue.use(Vuex);

// don't forget to use 'export' 

export const store = new Vuex.Store({
  state: {
    inputValue: 0
  },
  getters,
  mutations,
  actions,
  modules: {
    counterModules,
  },
  strict: true
})