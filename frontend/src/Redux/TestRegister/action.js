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
   console.log(payload)
  dispatch(posttest());
  axios
    .post(
      `http://localhost:4000/exams`,payload)
    .then((res) => {
      dispatch(successtest(res.data));
    })
    .catch((err) => {
      dispatch(failuretest());
    });
};