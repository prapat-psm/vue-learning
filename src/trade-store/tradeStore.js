import Vue  from 'vue';
import Vuex from 'vuex';

import StocksMod from "./modules/stocksModules";

Vue.use(Vuex);

export const tradeStore = new Vuex.Store({
  namespaced: true,
  strict: true,
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    StocksMod
  }
})