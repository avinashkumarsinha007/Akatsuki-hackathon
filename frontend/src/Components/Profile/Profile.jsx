import axios from "axios";
import React, { useState, useEffect } from "react";
import bgImg from "../imgs/Profile data-rafiki.png";
import profilePic from "../imgs/default.png";
import style from "../CSS/Demo.module.css";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [data, setData] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4000/users/${id}`).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, [id]);
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
          <h1>ps@gmail.com</h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
