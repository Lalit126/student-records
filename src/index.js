import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from '@auth0/auth0-react';
import  Routing from './Routing';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




ReactDOM.render(
 
  <Auth0Provider
    domain="dev-whvu660l.us.auth0.com"
    clientId="1kep9XQ4yck6huyq44HosMxlcO6ckX6H"
    redirectUri={window.location.origin}
  >
  
  <React.StrictMode>
  
    <Router>
       <Routing/>
    </Router>
  </React.StrictMode>
  </Auth0Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
