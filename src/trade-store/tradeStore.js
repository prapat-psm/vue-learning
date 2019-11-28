import Vue  from 'vue';
import Vuex from 'vuex';

import PortMod from "./modules/portModules";
import StocksMod from "./modules/stocksModules";

import * as actions from "./actions";

Vue.use(Vuex);

export const tradeStore = new Vuex.Store({
  namespaced: true,
  strict: true,
  actions: actions,
  modules: {
    PortMod,
    StocksMod
  }
})