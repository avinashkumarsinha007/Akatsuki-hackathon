import React from "react";
import bgImg from "../imgs/About us page-rafiki.png";
import style from "../CSS/Demo.module.css";

const About = () => {
  return (
    <div className={style.container}>
      <div className={style.left_container}>
        <img src={bgImg} alt="bgImg" />
      </div>
      <div className={style.right_container}>
        <div className={style.info}>
          <h1>A skill building program</h1>
          <p>
            <li>
              Exam is the way to express our real knowledge and ability in the
              written form.
            </li>
            <br />
            <li>
              Exams teach us lot of things and give training to various things
              like punctuality, writing skills, timing sense, expressing our
              thoughts and opinions and so on.
            </li>
            <br />
            <li>
              Without exam it is very hard to find out the real knowledge of an
              individual student as well as students will lost their motivation
              with their studies.
            </li>
            <br />
            <li>
              With this examination method, students will get fear about their
              exams and study their lessons properly to increase their knowledge
              as well as getting highest marks in their class.
            </li>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
