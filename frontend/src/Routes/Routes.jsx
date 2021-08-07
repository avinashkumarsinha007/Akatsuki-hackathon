import React from "react";
import { Route, Switch } from "react-router-dom";
import Feedback from "../Components/Feedback/Feedback";
import { Landing } from "../Components/Landingpage/Landing";
import Login from "../Components/Login/Login";
import { Navbar } from "../Components/Navbar/Navbar";
import { TestRegister } from "../Components/RegisterForTest/TestRegister";
import Register from "../Components/SignUp/Register";
import Join from '../Components/Chatbot/Join/Join.js'
import Chat from '../Components/Chatbot/Chat/Chat.js'
import {QuizApp} from "../Components/Quiz Page/QuizApp/index";
export const Routes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/testregister">
          <TestRegister />
        </Route>
        <Route path="/new-register">
          <Register />
        </Route>
        <Route path="/new-login">
          <Login />
        </Route>
        <Route path='/join'>
         <Join/>
        </Route>
        <Route path='/chat'>
         <Chat/>
         </Route>
        <Route path="/feedback">
          <Feedback />
        </Route>
        <Route path="/quiz">
         <QuizApp></QuizApp>
        </Route>
      </Switch>
    </>
  );
};
