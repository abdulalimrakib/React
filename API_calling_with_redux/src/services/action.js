import axios from "axios";
import { ERROR, LOADING, LOADINGSUCSESSFUL } from "./constant";

function action() {
  return async (dispatch) => {
    dispatch({
      type: LOADING,
    });

    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      dispatch({
        type: LOADINGSUCSESSFUL,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: ERROR,
        payload: e.message,
      });
    }
  };
}

export default action;
