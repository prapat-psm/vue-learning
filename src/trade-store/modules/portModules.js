const state = {
  funds: 10000,
  stocks: []
};

const mutations = {
  'MUTE_BUY_STOCKS' (state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(element => element.id == stockId);

    if (record) {
      record.quantity += quantity
    } else {
      state.stocks.push({
        id: stockId,
        quantity: quantity
      });
    }

    state.funds -= stockPrice * quantity;
  },
  'MUTE_SELL_STOCKS' (state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(element => element.id == stockId);

    if (record.quantity > quantity) {
      record.quantity -= quantity
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }

    state.funds += stockPrice * quantity;
  },
  'MUTE_SET_PORTFOLIO' (state, portfolio) {
    state.funds  = portfolio.funds;
    state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
  }
};

const actions = {
  actSellStocks: ({commit}, order) => {
    commit('MUTE_SELL_STOCKS', order);
  },
};

const getters = {
  stockPortfolio(state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocksGetters.find(element => element.id == stock.id); // getters.stocksGetters refer to 'stockModules -> getters -> stocksGetters'

      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price,
      }
    });
  },
  fundsGetters(state) {
    return state.funds
  }
};

export default {
  state,
  actions,
  getters,
  mutations
}