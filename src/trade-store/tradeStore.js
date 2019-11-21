import Vue  from 'vue';
import Vuex from 'vuex';

import PortMod from "./modules/portModules";
import StocksMod from "./modules/stocksModules";

Vue.use(Vuex);

export const tradeStore = new Vuex.Store({
  namespaced: true,
  strict: true,
  modules: {
    PortMod,
    StocksMod
  }
})