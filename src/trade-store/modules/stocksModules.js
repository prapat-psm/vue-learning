import stockData from "../../data/stockData";

const state = {
  stocks: []
};

const mutations = {
  'MUTE_SET_STOCKS' (state, stocksPayload) {
    state.stocks = stocksPayload;
  },
  'RND_STOCKS' (state) {
    state.stocks.forEach(element => {
      element.price = Math.round(element.price * ( 1 + Math.random() - 0.5)); // Math.round เกิน .5 ปัดขึ้น แต่ Math.floor ไม่ว่าจะ 0. เท่าไร ปัดลง
    });
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

