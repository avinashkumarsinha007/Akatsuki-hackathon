import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { Landing } from '../Components/Landingpage/Landing';
import { Navbar } from '../Components/Navbar/Navbar';
import { TestRegister } from '../Components/RegisterForTest/TestRegister';
export const Routes =()=>{
    return(
        <>
        <Navbar/>
        <Switch>
            <Route path='/' exact>
               <Landing/>
            </Route>
            <Route path='/testregister'>
                <TestRegister/>
            </Route>
        </Switch>
        </>
    )
}