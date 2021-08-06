import React from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar";
import Login from "../Components/Login/Login";
import Register from "../Components/SignUp/Register";
export const Routes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route>
          <Login path="/new-login" />
        </Route>
        <Route>
          <Register path="/new-register" />
        </Route>
      </Switch>
    </>
  );
};
