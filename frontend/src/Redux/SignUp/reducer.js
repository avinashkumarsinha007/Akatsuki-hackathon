import { SIGNUP_FAILURE, SIGNUP_REQ, SIGNUP_SUCCESS } from "./actionType";

const initState = {
  isAuth: false,
  isLoading: false,
  isError: false,
};
export const registerReducer = (state = initState, action) => {
  const { type } = action;

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
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
