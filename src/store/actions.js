import * as named from "../store/named";

// export const updateInputValue = ({ commit }, payload) => {
//   commit('updateInputValue', payload); 
// };

export default {
  [named.ACTIONS_INPUT_VALUE] : ({ commit }, payload) => {
    commit(named.MUTATIONS_INPUT_VALUE, payload); 
  }
};

export const actions02 = function() {
  
};

export const actions03 = () => {

};