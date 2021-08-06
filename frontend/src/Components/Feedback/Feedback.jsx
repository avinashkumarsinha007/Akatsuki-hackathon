import { query } from "express-validator";
import React, { useState } from "react";
import "./Feedback.css";

const Feedback = () => {
  const obj = {
    query1: "",
    query2: "",
    query3: "",
    query4: "",
    query5: "",
    query6: "",
  };

  const [feedback, setFeedback] = useState(obj);

  const { query1, query2, query3, query4, query5, query6 } = feedback;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    let val = type === "checkbox" ? checked : value;
    setFeedback({
      ...feedback,
      [name]: val,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    let payload = {
      query1: feedback.query1,
      query2: feedback.query2,
      query3: feedback.query3,
      query4: feedback.query4,
      query5: feedback.query5,
      query6: feedback.query6,
    };
    setFeedback(payload);
    alert("Feedback Submitted Successfully");
    console.log(payload);
  };
  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>Feedback Form for students</h1>
          <p>
            You can fill the feedback and let us know in what aspects you want
            to do better.
          </p>
          <form className="form">
            <p>What is your strength?</p>
            <textarea
              type="text"
              placeholder="eg. Im good at maths"
              name="query1"
              value={query1}
              onChange={handleChange}
            />
            <p>What is your strength?</p>
            <textarea
              placeholder="eg. Im good at maths"
              type="text"
              name="query2"
              value={query2}
              onChange={handleChange}
            />
            <p>What is your strength?</p>
            <textarea
              placeholder="eg. Im good at maths"
              type="text"
              name="query3"
              value={query3}
              onChange={handleChange}
            />
            <p>What is your strength?</p>
            <textarea
              placeholder="eg. Im good at maths"
              type="text"
              name="query4"
              value={query4}
              onChange={handleChange}
            />
            <p>What is your strength?</p>
            <textarea
              placeholder="eg. Im good at maths"
              type="text"
              name="query5"
              value={query5}
              onChange={handleChange}
            />
            <p>What is your strength?</p>
            <textarea
              placeholder="eg. Im good at maths"
              type="text"
              name="query6"
              value={query6}
              onChange={handleChange}
            />
            <button onClick={handleSubmitForm}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Feedback;
