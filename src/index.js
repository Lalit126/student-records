import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routing from './Routing';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    redirectUri={window.location.origin}
  >
    <Router>
       <Routing />
    </Router>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// let str=`I can code all Night long`
// let regex=/\s[a-z]+/gm

// let ret= str.replace(regex,(arg)=>{

//   console.log(arg,'arg');
// let play= arg.charAt(1).toUpperCase() + arg.slice(2)
// console.log(play,'play');
// return ` ${play}`
// })

// let str=`Three girls went to forest .Monkey said yee yaaaaaw `
// let regex=/([a-z])\1+/gmi

// let ret = str.match(regex)
// console.log(ret,'ret');
// return ret.join("")

// let str=`When boy went to boarding school, he was fine`
// let regex=/\sb[a-z]+/gmi

// let ret = str.match(regex)
// console.log(ret,'ret');
// return ret[0].trim().length  