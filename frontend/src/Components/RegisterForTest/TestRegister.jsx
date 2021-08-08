import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Redirect } from "react-router";
// import { register } from "../../Redux/Signup/action";
import { Footer } from '../Footer/Footer'
import {Redirect, useLocation} from 'react-router-dom'
import styles from "./Test.module.css";
import queryString from 'query-string';
const init = {
  roll_no: "",
  time: "",
  profile_pict: "",
  user:"",
  date:"",
};

export const TestRegister = () => {
  const [query, setQuery] = useState(init);
  const [redir,setRedir] = useState(false)
  const { user,roll_no,date,profile_pict} = query;
//   const dispatch = useDispatch();
//   const Signup = useSelector((state) => state.Signup.Signup);
//   const message = useSelector((state) => state.Signup.Signmessage);
const location = useLocation()
const classes = queryString.parse(location.search);
console.log(classes.class)
  const handleSubmit = (e) => {
    e.preventDefault();
    setRedir(true)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const update = { ...query, [name]: value };
    setQuery(update);
  };
 //Redirect to Test page
 if(redir){
   return <Redirect to={`/quiz?classes=${classes.class}`} />
 }
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
              Time 
              <input
                type="time"
                value="13:30"
                className={styles.inputField}
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