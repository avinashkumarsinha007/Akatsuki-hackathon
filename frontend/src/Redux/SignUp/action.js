import axios from "axios";
import { SIGNUP_REQ, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "./actionType";

export const signupReq = () => {
  return {
    type: SIGNUP_REQ,
  };
};

export const signupSuc = (payload) => {
  return {
    type: SIGNUP_SUCCESS,
    payload,
  };
};

export const signupFail = (payload) => {
  return {
    type: SIGNUP_FAILURE,
    payload,
  };
};
