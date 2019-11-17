import * as named from "../store/named";

// export const gettersInputValue = (state) => {
//   return state.inputValue;
// };

export default {
  [named.INPUT_VALUE] : (state) => {
    return state.inputValue;
  }
} 