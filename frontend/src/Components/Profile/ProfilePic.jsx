import React from "react";
import profilePic from "../imgs/default.png";
import style from "../CSS/Demo.module.css";

const ProfilePic = () => {
  return (
    <div className={style.pic}>
      <img src={profilePic} alt="pic" height="30px" />
    </div>
  );
};

export default ProfilePic;
