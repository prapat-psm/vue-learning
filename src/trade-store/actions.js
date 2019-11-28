import Vue from "vue";

export const loadData = ({commit}) => {
  Vue.http.get('trade_data.json')
    .then(response => response.json())
    .then(data => {
      if(data) {
        const stocks         = data.stocks;
        const funds          = data.funds;
        const stockPortfolio = data.stockPortfolio;

        const porfolio = {
          stockPortfolio,
          funds
        };

        commit('MUTE_SET_STOCKS', stocks);
        commit('MUTE_SET_PORTFOLIO', porfolio);
      }
    })
}