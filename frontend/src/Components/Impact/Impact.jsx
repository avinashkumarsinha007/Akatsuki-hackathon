import React from "react";
import bgImg from "../imgs/Mission Impossible-rafiki.png";
import style from "../CSS/Demo.module.css";

const Impact = () => {
  return (
    <div className={style.container}>
      <div className={style.left_container}>
        <img src={bgImg} alt="bgImg" />
      </div>
      <div className={style.right_container}>
        <div className={style.info}>
          <h1>Our Mission</h1>
          <p>
            <li>
              Realising a far larger scheme was needed, the trustees formed the
              Chatteris Educational Foundation and started raising funds to
              bring English tutors to Hong Kong to be placed in schools.
            </li>
            <br />
            <li>
              Although a lot has changed in this time, we have always remained
              true to the lessons learnt by our founding trustees when
              volunteering all those years ago.
            </li>
            <br />
            <li>
              Offering students opportunities for authentic, relaxed, and
              communicative use of English transforms their views of the
              language, especially for those from challenging socio-economic
              backgrounds, and our enthusiastic and committed tutors continue to
              provide such opportunities to this day.
            </li>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impact;
