import stockData from "../../data/stockData";

const state = {
  stocks: []
};

const actions = {
  'ACT_BUY_STOCKS' : ({commit}, order) => {
    commit()
  },
  'ACT_INTI_STOCKS' : ({commit}) => {
    commit('MUTE_SET_STOCKS', stockData);
  },
  randomizeStocks: ({commit}) => {
    commit('RND_STOCKS');
  }
};

const mutations = {
  'MUTE_SET_STOCKS' (state, stocksPayload) {
    state.stocks = stocksPayload;
  },
  'RND_STOCKS' (state) {
  }
};

const getters = {
  stocks : state => { return state.stocks }
};

export default {
  state,
  getters,
  mutations,
  actions
}

