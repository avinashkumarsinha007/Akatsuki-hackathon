import axios from "axios";
import { LOGIN_REQ, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionType";

export const loginReq = () => {
  return {
    type: LOGIN_REQ,
  };
};

export const loginSuc = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const loginFail = (payload) => {
  return {
    type: LOGIN_FAILURE,
    payload,
  };
};

export const loginUser = (payload) => async (dispatch) => {
  dispatch(loginReq());
  axios
    .post("http://localhost:4000/login", payload)
    .then((res) => {
      dispatch(loginSuc(res.data.user));
      console.log(res.data.user);
    })
    .catch((err) => {
      dispatch(loginFail());
    });
};
