import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {  useHistory } from "react-router-dom";
import NavBar from '../../components/NavBar/NavBar';
import BigHeader from '../ReusableUI/BigHeader';




const Administration = () => {
  const { logout } = useAuth0();
  const history= useHistory()

  return (
<div>
  <NavBar>
  <BigHeader 
       banner="Administration" 
       />
<div style={{margin:'50px'}}>
<button onClick={() => history.push(`/createnewrecord`)}>CREATE NEW RECORD</button>
<button onClick={() => history.push(`/app`)}>EDIT / DELETE RECORD</button>
</div>

<div style={{margin:'50px'}}>
<button onClick={() => history.push(`/createnewcompany`)}>CREATE NEW COMPANY</button>{` `}
<button onClick={() => history.push(`/createnewcompany`)}>CHANGE DETAILS OF EXISTING COMPANY</button>
</div>

<div style={{margin:'50px'}}>
<button onClick={() => logout()}>LOG OUT </button>
</div>




</NavBar>
</div>

  ) 
};

export default Administration;