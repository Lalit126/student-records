import React, { Fragment, useEffect, useState } from 'react';
import App from './App' ;

// import { useAuth0 } from "@auth0/auth0-react";
import Spinner from '@material-ui/core/LinearProgress';
import {
    Switch,
    Route,
    Redirect,
    useHistory
  } from "react-router-dom";
  import Dashboard from "./components/Dashboard/Dashboard"


function Routing() {

 
      
//
// adminstritor enter 


    return (
        <div>
            <Switch>
            <Route path="/" component={App} /> 
            <Route path="/dashboard" component={Dashboard} />                                 
           </Switch>
        </div>
    )
 

}

export default Routing