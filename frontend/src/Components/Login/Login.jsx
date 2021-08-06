import React, { useState } from "react";
import "./Login.css";
import logImage from "./../imgs/Mobile login-rafiki.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { loginSuc, loginFail } from "../../Redux/LogIn/action";

const Login = () => {
  const obj = {
    email: "",
    password: "",
  };
  const [loginDetails, setLogin] = useState(obj);

  const { email, password } = loginDetails;

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    let val = type === "checkbox" ? checked : value;
    setLogin({
      ...loginDetails,
      [name]: val,
    });
  };

  const handleLogin = () => {
    axios
      .post("http://localhost:4000/login", loginDetails)
      .then((res) => {
        console.log(res);
        dispatch(loginSuc(loginDetails));
      })
      .catch((err) => {
        dispatch(loginFail());
      });
  };

  return (
    <>
      <div className="container">
        <div className="left-container">
          <img src={logImage} alt="img" />
        </div>
        <div className="right-container">
          <div className="heading">
            <h1>Login Here</h1>
            <br />
            Already registered?
            <Link
              to="/new-register"
              style={{ textDecoration: "none", color: "blue", padding: 5 }}
            >
              <span>SIGNUP</span>
            </Link>
            here
          </div>
          <div>
            <form className="form">
              <label>
                Email
                <input
                  type="email"
                  placeholder="eg. admin@gmail.com"
                  name="email"
                  onChange={handleChange}
                  value={email}
                />
              </label>
              <label>
                Password
                <input
                  type="password"
                  placeholder="eg. admin@gmail.com"
                  name="password"
                  onChange={handleChange}
                  value={password}
                />
              </label>
              <button onClick={handleLogin}>LogIn</button>
            </form>
            <div className="or-line">
              <p>
                <span>Or</span>
              </p>
            </div>
            <div className="google-btn">
              <button>Login with google</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
