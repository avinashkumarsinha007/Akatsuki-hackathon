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
  try {
    const res = await axios.post("https://hackaton-ed.herokuapp.com/login", payload);
    dispatch(loginSuc(res.data));

  } catch (error) {
    dispatch(loginFail(error));
  }
};
