import React from "react";
import { Route, Switch } from "react-router-dom";
import Feedback from "../Components/Feedback/Feedback";
import { Landing } from "../Components/Landingpage/Landing";
import Login from "../Components/Login/Login";
import { Navbar } from "../Components/Navbar/Navbar";
import { TestRegister } from "../Components/RegisterForTest/TestRegister";
import Register from "../Components/SignUp/Register";
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
        <Route path="/feedback">
          <Feedback />
        </Route>
      </Switch>
    </>
  );
};
