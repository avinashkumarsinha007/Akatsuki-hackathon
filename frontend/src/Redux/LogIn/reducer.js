import { loadData, saveData } from "../../utils/localstorage";
import { LOGIN_FAILURE, LOGIN_REQ, LOGIN_SUCCESS, LOG_OUT } from "./actionType";

const initState = {
  isAuth: false || loadData("auth"),
  isLoading: false,
  isError: false,
  user: {} || loadData("user"),
  error: "",
};
export const LoginReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS: {
      saveData("user", payload);
      saveData("auth", true);
      const dataLocal = {
        ...state,
        isLoading: false,
        isAuth: true,
        user: payload,
      };
      return dataLocal;
    }
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: payload,
      };
    case LOG_OUT:
      saveData("auth", false);
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
};
