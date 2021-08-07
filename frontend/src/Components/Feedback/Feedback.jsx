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
          <p>Feedback Form to your examinee</p>
          <span>
            Please give some valuable feedback to examinee where to improve
            themselves in respective fields.
          </span>
          <form className="form">
            <h3>Subject Knowledge </h3>
            <span>
              Does examinee has a full understanding of subject and is able to
              undertake daily activities without supervision?
            </span>
            <textarea
              type="text"
              placeholder="Type here"
              name="query1"
              value={query1}
              onChange={handleChange}
            />
            <h3> Time Management</h3>
            <span>
              Does the examinee is able to manage the time constraint during the
              assessment?
            </span>
            <textarea
              placeholder="Type here"
              type="text"
              name="query2"
              value={query2}
              onChange={handleChange}
            />
            <h3>Quality of work</h3>
            <span>
              Have work is completed thoroughly and with care, correctly and
              provided required paperwork is thorough and neat.
            </span>
            <textarea
              placeholder="Type here"
              type="text"
              name="query3"
              value={query3}
              onChange={handleChange}
            />
            <h3>Overall Assessment</h3>
            <span>Rate the examinee on the scale of 0 to 5.</span>
            <textarea
              placeholder="Type here"
              type="text"
              name="query4"
              value={query4}
              onChange={handleChange}
            />
            <h3>Areas to improve</h3>
            <span>Any specific area need to be improved?</span>
            <textarea
              placeholder="Type here"
              type="text"
              name="query5"
              value={query5}
              onChange={handleChange}
            />
            <h3>Remarks</h3>
            <span>Do you have any final comments you would like to raise?</span>
            <textarea
              placeholder="Type here"
              type="text"
              name="query6"
              value={query6}
              onChange={handleChange}
            />
            <button class="ui yellow button" onClick={handleSubmitForm}>
              Submit Your Feedback
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Feedback;
