import React , {useState} from 'react';
import './cardDetails.css';
import Url from '../Url/Url';
import PropTypes from 'prop-types'; // ES6



function CardDetails({Employer, careerUrl, Job_Title, Job_Start_Date,setFav,Specialization,
   fav,Id,deleteRecord,University_Name}) 
   
   {

 

 return (
    <div>
     <Url
     careerUrl={careerUrl}
     mystyle="new-style"
     >
    Click Here 
     </Url>    

    <div> {Employer}</div>   
    <div>{Job_Title}</div>
    <div>{Job_Start_Date}</div>
    <div>{Specialization}</div>
    <div>{University_Name}</div>
    <div>{Job_Title}</div>
    {/* <button onClick={(e)=>handleFavoriteClick(e,Id)}>Favorite</button>
    <button onClick={(e)=>handleUnFavoriteClick(e,Id)}>Unfavorite</button>
    <button onClick={()=>deleteRecord(Id)}>Delete Record</button> */}
    
    
    </div>)
}

export default CardDetails
 
CardDetails.propTypes = {
Employer:PropTypes.string.isRequired,
careerUrl:PropTypes.string,
Job_Title:PropTypes.string,
}