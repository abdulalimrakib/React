/* eslint-disable no-undef */
import { ERROR, LOADING, LOADINGSUCSESSFUL } from "./constant";

const initialState = {
  isLoading: false,
  todos: [],
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case LOADINGSUCSESSFUL:
      return {
        ...state,
        todos: action.payload,
        isLoading: false,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
}

export default reducer;
