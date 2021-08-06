import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { Navbar } from '../Components/Navbar/Navbar';
export const Routes =()=>{
    return(
        <>
        <Navbar/>
        <Switch>
            <Route></Route>
        </Switch>
        </>
    )
}