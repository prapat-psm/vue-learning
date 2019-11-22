import stockData from "../../data/stockData";

const state = {
  stocks: []
};

const mutations = {
  'MUTE_SET_STOCKS' (state, stocksPayload) {
    state.stocks = stocksPayload;
  },
  'RND_STOCKS' (state) {
  }
};

const actions = {
  actBuyStocks : ({commit}, order) => {
    commit('MUTE_BUY_STOCKS', order);
  },
  initStocks : ({commit}) => {
    commit('MUTE_SET_STOCKS', stockData);
  },
  randomizeStocks : ({commit}) => {
    commit('RND_STOCKS'); // RND => Random
  }
};

const getters = {
  stocksGetters : state => state.stocks
};

export default {
  state,
  getters,
  mutations,
  actions
}

