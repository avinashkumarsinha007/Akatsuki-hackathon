import {
  SIGNUP_FAILURE,
  SIGNUP_REQ,
  SIGNUP_SUCCESS,
  TOKEN,
} from "./actionType";

const initState = {
  isAuth: false,
  isLoading: false,
  isError: false,
  user: "",
  token: "",
};
export const registerReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SIGNUP_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case TOKEN:
      return {
        ...state,
        isLoading: false,
        isError: false,
        token: payload,
      };
    default:
      return state;
  }
};
