import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
  const { logout } = useAuth0();

  return (
<div>
THIS IS DASHBOARD 
<button onClick={() => logout()}>LogOut</button>;
</div>

  ) 
};

export default Dashboard;