import React, { useState } from "react";
import logImage from "./../imgs/Mobile login-rafiki.png";
import "./Register.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { signupSuc, signupFail } from "../../Redux/SignUp/action";
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
            <h1>Exam Registration Form</h1>
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
            <form className="form">
              <label>
                Firstname
                <input
                  type="text"
                  placeholder="eg. admin@gmail.com"
                  name="firstname"
                  onChange={handleChange}
                  value={firstname}
                />
              </label>
              <label>
                Lastname
                <input
                  type="text"
                  placeholder="eg. admin12"
                  name="lastname"
                  onChange={handleChange}
                  value={lastname}
                />
              </label>
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
              <button onClick={handleRegister}>SignUp</button>
            </form>
            <div className="or-line">
              <p>
                <span>Or</span>
              </p>
            </div>
            <div className="google-btn">
              <button>SignUp with google</button>
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
