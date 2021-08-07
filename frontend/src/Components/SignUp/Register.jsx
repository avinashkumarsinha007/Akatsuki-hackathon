import React, { useState } from "react";
import logImage from "./../imgs/Mobile login-rafiki.png";
import "./Register.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { signupSuc, signupFail } from "../../Redux/SignUp/action";
import { Button } from "semantic-ui-react";
const Register = () => {
  const obj = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  const dispatch = useDispatch();

  const [query, setQuery] = useState(obj);
  const [done, setDone] = useState(false);

  const { firstname, lastname, email, password } = query;
  const isLoading = useSelector((state) => state.register.isLoading);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    let val = type === "checkbox" ? checked : value;
    setQuery({
      ...query,
      [name]: val,
    });
  };

  const handleRegister = (e) => {
    axios
      .post(`http://localhost:4000/users/register`, query)
      .then((res) => dispatch(signupSuc(query)))
      .catch((err) => dispatch(signupFail(err)));

    e.preventDefault();
    if (
      query.firstname !== "" &&
      query.lastname !== "" &&
      query.email !== "" &&
      query.password !== ""
    ) {
      let payload = {
        firstname: query.firstname,
        lastname: query.lastname,
        email: query.email,
        password: query.password,
      };
      setQuery(payload);
      alert("Registered Successfully");
      setDone(true);
    } else {
      if (query.firstname === "") {
        alert("Please enter your firstname");
      } else if (query.lastname === "") {
        alert("Please enter your lastname");
      } else if (query.email === "") {
        alert("Please enter your email filed");
      } else if (query.password === "") {
        alert("Please enter your password field");
      }
    }
  };

  if (isLoading) return <p>...loading</p>;

  return !done ? (
    <>
      <div className="container">
        <div className="left-container">
          <img src={logImage} alt="img" />
        </div>
        <div className="right-container">
          <div className="heading">
            <p>Exam Registration Form</p>
            <br />
            Already registered?
            <Link
              to="/new-login"
              style={{ textDecoration: "none", color: "blue", padding: 5 }}
            >
              <span>LOGIN</span>
            </Link>
            here
          </div>
          <div>
            <form class="ui form">
              <div class="field">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstname"
                  onChange={handleChange}
                  value={firstname}
                />
              </div>
              <div class="field">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  onChange={handleChange}
                  value={lastname}
                  placeholder="Last Name"
                />
              </div>
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

              <button class="ui yellow button" onClick={handleRegister}>
                SignUp
              </button>
            </form>
            {/* <div className="or-line">
              <p>
                <span>Or</span>
              </p>
            </div> */}
            <div className="google-btn1">
              <button class="ui google plus button">
                <i class="google plus icon"></i>
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <Redirect to="/new-login" />
  );
};

export default Register;
