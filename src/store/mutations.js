import * as named from "../store/named";

// export const updateInputValue = (state, payload) => {
//   state.inputValue = payload;
// };

export default {
  [named.MUTATIONS_INPUT_VALUE] : (state, payload) => {
    state.inputValue = payload;
  }
}