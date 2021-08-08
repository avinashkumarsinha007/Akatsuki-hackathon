import axios from "axios";
import {
  SIGNUP_REQ,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  TOKEN,
} from "./actionType";

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

export const getToken = (payload) => {
  return {
    type: TOKEN,
    payload,
  };
};

export const registerUser = (payload) => (dispatch) => {
  dispatch(signupReq());
  axios
    .post(`http://localhost:4000/users/register`, payload)
    .then((res) => {
      dispatch(signupSuc(res.data));
      dispatch(getToken(res.data.token));
    })
    .catch((err) => {
      dispatch(signupFail());
    });
};
