import axios from "axios";
import {
  FAILURE_TEST,
  POST_TEST,
  SUCCESS_TEST,
} from "./actionTypes";

export const posttest = () => {
  return {
    type: POST_TEST,
  };
};

export const successtest = (payload) => {
  return {
    type: SUCCESS_TEST,
    payload,
  };
};

export const failuretest = () => {
  return {
    type: FAILURE_TEST,
  };
};

export const sendtest = (payload) => (dispatch) => {
  dispatch(posttest());
  axios
    .post(
      `https://hackaton-ed.herokuapp.com/exams`,payload)
    .then((res) => {
      dispatch(successtest(res.data));
    })
    .catch((err) => {
      dispatch(failuretest());
    });
};