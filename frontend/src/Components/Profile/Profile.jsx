import axios from "axios";
import React, { useState, useEffect } from "react";
import bgImg from "../imgs/Profile data-rafiki.png";
import profilePic from "../imgs/default.png";
import style from "../CSS/Demo.module.css";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();

  const email = useSelector((state) => state.login.email);
  const username = useSelector((state) => state.register.first_name);
  console.log(username);

  return (
    <div className={style.container}>
      <div className={style.left_container}>
        <img src={bgImg} alt="bgImg" />
      </div>
      <div className={style.right_container}>
        <div className={style.profile}>
          <img src={profilePic} alt="profile" height="250px" />
        </div>
        <div className={style.info}>
          <p>Username</p>
          <h1>Prashanth Vengala</h1>
          <p>Email</p>
          <h1>{email}</h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
