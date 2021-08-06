import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Redirect } from "react-router";
// import { register } from "../../Redux/Signup/action";
import { Footer } from '../Footer/Footer'
import styles from "./Test.module.css";
const init = {
  roll_no: "",
  classes: "",
  profile_pict: "",
  user:"",
  date:"",
  time:""
};

export const TestRegister = () => {
  const [query, setQuery] = useState(init);
  const { user,roll_no,classes,date,profile_pict} = query;
//   const dispatch = useDispatch();
//   const Signup = useSelector((state) => state.Signup.Signup);
//   const message = useSelector((state) => state.Signup.Signmessage);
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const update = { ...query, [name]: value };
    setQuery(update);
  };
 //Redirect to Signup page
  return (
    <>
        <div className={styles.container1}>
          <h1 className={styles.H1}>Exam Registration Form</h1>
          <p>Clearly fill the form below and ensure to indicate the class registered for</p>
          <hr className={styles.hori} />
          <form onSubmit={handleSubmit}>
            <label className={styles.label}>
              Username{" "}
              <input
                type="text"
                className={styles.inputField}
                name="user"
                value={user}
                onChange={handleChange}
                required
              />
            </label><br/>

            <label className={styles.label}>
              RollNo
              <input
                type="Number"
                className={styles.inputField}
                name="roll_no"
                value={roll_no}
                onChange={handleChange}
                required
              />
            </label><br/>

            <label className={styles.label}>
              Class 
              <input
                type="text"
                className={styles.inputField}
                name="classes"
                value={classes}
                onChange={handleChange}
                required
              />
            </label><br/>
            <label className={styles.label}>
              Date 
              <input
                type="Date"
                className={styles.inputField}
                name="date"
                value={date}
                onChange={handleChange}
                required
              />
            </label><br/>
            <label className={styles.label}>
              upload 
              <input
                type="file"
                className={styles.inputField}
                name="profile_pict"
                value={profile_pict}
                onChange={handleChange}
                required
              />
            </label><br/>
            <input
              type="submit"
              value="Signup"
              className={styles.submitField}
            />
          </form>
      
        </div>
        <Footer/>
      )
    </>
  );
};