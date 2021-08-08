import React from "react";
import bgImg from "../imgs/Contact us-amico.png";
import style from "./Contact.module.css";
import shubham from "../imgs/shubham.jpeg";
import prashanth from "../imgs/prashanth.jpeg";
import avinash from "../imgs/avinash.jpeg";
import jagrati from "../imgs/jagruthi.jpeg";

const Contact = () => {
  return (
    <div className={style.container}>
      <div className={style.left_container}>
        <img src={bgImg} alt="bgImg" />
      </div>
      <div className={style.contact}>
        <div className={style.heading}>
          <h1>Our Team</h1>
        </div>
        <div className={style.image}>
          <div>
            <h2>Shubham Kumar</h2>
            <img src={shubham} alt="shubham" height="300px" />
          </div>

          <div>
            <h2>Jagrati Panchal</h2>
            <img src={jagrati} alt="shubham" height="300px" />
          </div>
          <div>
            <h2>Prashanth Vengala</h2>
            <img src={prashanth} alt="shubham" height="300px" />
          </div>
          <div>
            <h2>Avinash Kumar Sinha</h2>
            <img src={avinash} alt="shubham" height="300px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
