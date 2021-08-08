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
          <h1>The Revolution</h1>
          <p>
            Realising a far larger scheme was needed, the trustees formed the
            Chatteris Educational Foundation and started raising funds to bring
            English tutors to Hong Kong to be placed in schools. Although a lot
            has changed in this time, we have always remained true to the
            lessons learnt by our founding trustees when volunteering all those
            years ago. Offering students opportunities for authentic, relaxed,
            and communicative use of English transforms their views of the
            language, especially for those from challenging socio-economic
            backgrounds, and our enthusiastic and committed tutors continue to
            provide such opportunities to this day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
