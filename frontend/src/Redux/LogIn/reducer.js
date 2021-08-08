import { loadData, saveData } from "../../utils/localstorage";
import { LOGIN_FAILURE, LOGIN_REQ, LOGIN_SUCCESS, LOG_OUT } from "./actionType";

const initState = {
  isAuth: false,
  isLoading: false,
  isError: false,
  user: "",
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
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
        isAuth: true,
        isLoading: false,
        isError: false,
      };
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
