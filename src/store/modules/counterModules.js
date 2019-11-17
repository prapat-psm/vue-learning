import * as named from "../named";

const state = {
  counter: 0,
};

const getters = {
  [named.DOUBLE_COUNTER]: state => {
    return state.counter * 2;
  },
  [named.CLICKS_COUNTER]: state => {
    return state.counter + 'Clicks';
  },
}

const mutations = {
  // increse : (state, payload) => {
  //   state.counter += payload;
  // },
  // decrese : (state, payload) => {
  //   state.counter -= payload;
  // },
  [named.MUTATIONS_INC_COUNTER] : (state, payload) => {
    state.counter += payload;
  },
  [named.MUTATIONS_DEC_COUNTER] : (state, payload) => {
    state.counter -= payload;
  },
}

const actions = {
  // same as bottom but use context.commit. 
  // increment(context) {
  //   context.commit('increment');
  // },
  // actInc ({ commit }, payload) {
  //   commit('increse' , payload);
  // },
  // actDec ({ commit }, payload) {
  //   commit('decrese' , payload);
  // },
  [named.ACTIONS_DEC_COUNTER] ({ commit }, payload) {
    commit(named.MUTATIONS_DEC_COUNTER , payload);
  },
  [named.ACTIONS_INC_COUNTER] ({ commit }, payload) {
    commit(named.MUTATIONS_INC_COUNTER , payload);
  },
  [named.ACTIONS_DEC_COUNTER] ({ commit }, payload) {
    commit(named.MUTATIONS_DEC_COUNTER , payload);
  },
  [named.ACTIONS_INC_COUNTER] ({ commit }, payload) {
    commit(named.MUTATIONS_INC_COUNTER , payload);
  },
  [named.ACTIONS_DEC_COUNTER] ({ commit }, payload) {
    commit(named.MUTATIONS_DEC_COUNTER , payload);
  },
  [named.ACTIONS_INC_COUNTER_ASYNC] ({ commit }, payload) {
    setTimeout(() => {
      commit(named.MUTATIONS_INC_COUNTER , payload.by );
    }, payload.duration) // ส่งค่า payload เป็น objects
  },
  [named.ACTIONS_DEC_COUNTER_ASYNC] ({ commit }, payload) {
    setTimeout(function() {
      commit(named.MUTATIONS_DEC_COUNTER , payload.by );
    }, payload.duration)
  },
  // incrementIfOddOnRootSum ({ state, commit, rootState }) {
  //   console.log('state', state);
  //   console.log('rootState', rootState);
  //   if ((state.count + rootState.count) % 2 === 1) {
  //     commit('increment')
  //   }
  // }
}

export default {
  state, getters, mutations, actions
}