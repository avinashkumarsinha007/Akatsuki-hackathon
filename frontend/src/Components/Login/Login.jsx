import React, { useState } from "react";
import logImage from "./../imgs/Mobile login-rafiki.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import style from "./Login.module.css";
import { loginUser } from "../../Redux/LogIn/action";

const Login = () => {
  const obj = {
    email: "",
    password: "",
  };
  const [loginDetails, setLogin] = useState(obj);

  const { email, password } = loginDetails;

  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.login.isAuth);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    let val = type === "checkbox" ? checked : value;
    setLogin({
      ...loginDetails,
      [name]: val,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
    };
    dispatch(loginUser(payload));
    
    if (loginDetails.email !== "" && loginDetails.password !== "") {
      let payload = {
        email: loginDetails.email,
        password: loginDetails.password,
      };
      setLogin(payload);
    }
  };

  if (isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.left_container}>
          <img src={logImage} alt="img" />
        </div>
        <div className={style.right_container}>
          <div className={style.heading}>
            <p>Login Here</p>
            <br />
            Not registered?
            <Link
              to="/new-register"
              style={{ textDecoration: "none", color: "blue", padding: 5 }}
            >
              <span>SIGNUP</span>
            </Link>
            here
          </div>
          <div>
            <form class="ui form" className={style.form}>
              <div class="field">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="eg. admin@gmail.com"
                  name="email"
                  onChange={handleChange}
                  value={email}
                />
              </div>
              <div class="field">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="eg. admin123"
                  name="password"
                  onChange={handleChange}
                  value={password}
                />
              </div>

              <button class="ui yellow button" onClick={handleLogin}>
                Login
              </button>
            </form>
            {/* <div className="or-line">
              <p>
                <span>Or</span>
              </p>
            </div> */}
            <div className={style.google_btn1}>
              <button class="ui google plus button">
                <i class="google plus icon"></i>
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
