import {
    FAILURE_TEST,
    POST_TEST,
    SUCCESS_TEST,
  } from "./actionTypes";
  
  const init = {
    data: '',
    isLoading: false,
    isError: true,
  };
  
  export const testreducer = (state = init, { type, payload }) => {
    switch (type) {
      case POST_TEST: {
        return {
          ...state,
          isLoading: true,
        };
      }
      case SUCCESS_TEST: {
        return {
          ...state,
          isLoading: false,
          data: payload,
        };
      }
      case FAILURE_TEST: {
        return {
          ...state,
          isError: true,
          isLoading: false,
        };
      }
      default:
        return state;
    }
  };