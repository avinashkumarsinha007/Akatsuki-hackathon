import React, { useState, useEffect } from "react";
import logImage from "./../imgs/Secure login-rafiki.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import style from "./Register.module.css";
import { signupSuc, signupFail } from "../../Redux/SignUp/action";
import firebase from "firebase";

// const auth = firebase.auth();

// const firebaseConfig = {
//   apiKey: "AIzaSyAaJjebmyZ9VXENV8Kt_3uwtNrjc8UKa_k",
//   authDomain: "akatsuki-e287a.firebaseapp.com",
//   projectId: "akatsuki-e287a",
//   storageBucket: "akatsuki-e287a.appspot.com",
//   messagingSenderId: "1024210240630",
//   appId: "1:1024210240630:web:14a8aa6333424ce804cb57",
// };
// firebase.initializeApp(firebaseConfig);
const Register = () => {
  const obj = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };

  const dispatch = useDispatch();
  const [query, setQuery] = useState(obj);
  const [done, setDone] = useState(false);

  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   auth.onAuthStateChanged((person) => {
  //     if (person) {
  //       setUser(person);
  //     } else {
  //       setUser(null);
  //     }
  //   });
  // }, []);

  const { first_name, last_name, email, password } = query;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    let val = type === "checkbox" ? checked : value;
    setQuery({
      ...query,
      [name]: val,
    });
  };

  // const handleGoogleSignUp = async () => {
  //   try {
  //     await auth.signUpWithPopup(new firebase.auth.GoogleAuthProvider());
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleRegister = (e) => {
    axios
      .post("http://localhost:4000/users/register", query)
      .then((res) => {
        dispatch(signupSuc(query));
        console.log(res);
      })
      .catch((err) => {
        dispatch(signupFail);
      });

    e.preventDefault();

    if (
      query.first_name !== "" &&
      query.last_name !== "" &&
      query.email !== "" &&
      query.password !== ""
    ) {
      let payload = {
        first_name: query.first_name,
        last_name: query.last_name,
        email: query.email,
        password: query.password,
      };
      setQuery(payload);
      alert("Registered Successfully");
      setDone(true);
    } else {
      if (query.first_name === "") {
        alert("Please enter your first_name");
      } else if (query.last_name === "") {
        alert("Please enter your last_name");
      } else if (query.email === "") {
        alert("Please enter your email filed");
      } else if (query.password === "") {
        alert("Please enter your password field");
      }
    }
  };

  return !done ? (
    <div className={style.container}>
      <div className={style.left_container}>
        <img src={logImage} alt="img" />
      </div>
      <div className={style.right_container}>
        <div className={style.heading}>
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
          <form class="ui form" className={style.form}>
            <div class="field">
              <label>First Name</label>
              <input
                type="text"
                placeholder="First Name"
                name="first_name"
                onChange={handleChange}
                value={first_name}
              />
            </div>
            <div class="field">
              <label>Last Name</label>
              <input
                type="text"
                name="last_name"
                onChange={handleChange}
                value={last_name}
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

          <div className={style.google_btn1}>
            <button
              class="ui google plus button"
              // onClick={handleGoogleSignUp}
            >
              <i class="google plus icon"></i>
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to="/new-login" />
  );
};

export default Register;
