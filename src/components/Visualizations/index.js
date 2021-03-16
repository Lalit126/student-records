import React, { Fragment, useEffect, useState } from 'react';
import TopEmployers from './TopEmployers/TopEmployers';
import NavBar from '../NavBar/NavBar';



  function Visualizations(){

    return <div>
    <NavBar>
    <TopEmployers />
    </NavBar>    
</div>
  }

  export default Visualizations