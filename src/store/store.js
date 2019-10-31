import Vue  from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// don't forget to use 'export' 

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter: state => {
      return state.counter * 2
    },
    clicksCounter: state => {
      return state.counter + 'Clicks'
    }
  },
  mutations: {
    increment: (state, payload) => {
      state.counter += payload;
    },
    decrement: (state, payload) => {
      state.counter -= payload;
    }
  },
  actions: {
    // increment(context) {
    //   context.commit('increment'); // ---> same as bottom but use context.commit. 
    // },
    increment({ commit }, payload) {
      commit('increment', payload);
    },
    decrement({ commit }, payload) {
      commit('decrement', payload);
    },
    asyncIncrement({ commit }, payload) {
      setTimeout(() => {
        commit('increment', payload.by );
      }, payload.duration) // ส่งค่า payload เป็น objects
    },
    asyncDecrement({ commit }, payload) {
      setTimeout(function() {
        commit('decrement', payload.by );
      }, payload.duration)
    },
  }
})