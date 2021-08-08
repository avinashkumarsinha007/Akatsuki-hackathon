import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Footer } from '../Footer/Footer'
import {Redirect, useLocation} from 'react-router-dom'
import styles from "./Test.module.css";
import queryString from 'query-string';
import { sendtest } from "../../Redux/TestRegister/action";
const init = {
  roll_no: "",
  time: "",
  profile_pict: "",
  user:"",
  date:"",
  subject:"",
};

export const TestRegister = () => {
  const [query, setQuery] = useState(init);
  const [redir,setRedir] = useState(false)
  const { user,time,subject,roll_no,date,profile_pict} = query;
  const dispatch = useDispatch();
  const token = useSelector((state)=>state.register.token)
const location = useLocation()
const classes = queryString.parse(location.search);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRedir(true)
    const payload = {
      roll_no:roll_no,
      class:classes.class,
      profile_pict:profile_pict,
      user:user,
      data:date,
      time:time,
      subject:subject,
      token:token
    }
    console.log(payload)
    dispatch(sendtest(payload))
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
              Subject
              <input
                type="text"
                className={styles.inputField}
                name="subject"
                value={subject}
                onChange={handleChange}
                required
              />
            </label><br/>

            <label className={styles.label}>
              Time 
              <input
                type="text"
                name="time"
                value={time}
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