const state = {
  counter: 0,
};

const getters = {
  doubleCounter: state => {
    return state.counter * 2;
  },
  clicksCounter: state => {
    return state.counter + 'Clicks';
  },
}

const mutations = {
  increment: (state, payload) => {
    state.counter += payload;
  },
  decrement: (state, payload) => {
    state.counter -= payload;
  },
}

const actions = {
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
  incrementIfOddOnRootSum ({ state, commit, rootState }) {
    console.log('state', state);
    console.log('rootState', rootState);
    if ((state.count + rootState.count) % 2 === 1) {
      commit('increment')
    }
  }
  
}

export default {
  state, getters, mutations, actions
}