import React from 'react';
import { Link ,Redirect,useHistory} from "react-router-dom";
import './Rooter.scss';
import { useAuth0 } from "@auth0/auth0-react";


const isSubmitDisabled=false
function Rooter() {
  let history = useHistory();
  
  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();
// console.log(children,'children');


 return (
    <div style={{margin:'100px'}}>
      <div className='box'>
      <Link to="/">Home</Link>
      </div>
      <div className='box'>
      <Link to="/app">Main App</Link>
      </div>

      <div className='box'>
    <Link to="/dashboard">Dashboard</Link>
      </div>

    </div>)
}


export default Rooter
