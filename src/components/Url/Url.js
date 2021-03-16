import React from "react";
import './Url.scss'

const Url = ({children}) => {
 
  return (
    <span className='url-container'>
     {children}
    </span>
  )
  
};

export default Url;