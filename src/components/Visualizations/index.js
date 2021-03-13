
import React, { Fragment, useEffect, useState } from 'react';
import TopEmployers from './TopEmployers/TopEmployers';
import NavBar from '../Navbar/Navbar';



  function Visualizations(){

    return <div>
    <NavBar>
    <TopEmployers />
    </NavBar>    
</div>
  }

  export default Visualizations;