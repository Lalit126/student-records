import React , {useState} from 'react';
import './Card.css';
import Url from '../Url/Url';
import PropTypes from 'prop-types'; // ES6
import {Button} from 'reactstrap';



function Card({Employer, careerUrl, Graduation_Year,Job_Title, setFav, fav,Id,deleteRecord}) {



function handleFavoriteClick(e,Id) {
    const copyfav= [...fav]
    if(copyfav.includes(Id)){
      return alert('Already on the list ')
    }
    copyfav.push(Id)
     setFav(copyfav)
}

function handleUnFavoriteClick(e,Id) {
    const copyfav= [...fav]
    if(!copyfav.includes(Id)){
      return alert('You have not favorite it yet  ')
    }
    
  const getIndex = copyfav.indexOf(Id)
  copyfav.splice(getIndex,1)
  console.log(copyfav,'copyfav');
   setFav(copyfav)
}

function isFavorite () {
  return fav.includes(Id)

}



 return (
    <div className={isFavorite() ?'card-container-fav' :'card-container'}>
    
     <Url
    //  careerUrl={careerUrl}
     mystyle="new-style"
     >
    Click Here 
     </Url>    

      {/* <span> apply for job</span> */}
      apply for job
    <div> {Employer}</div>   
    <div>{Job_Title}</div>
    <div>{Graduation_Year}</div>
    <div className="button-group">
    <Button className="button-card" onClick={(e)=>handleFavoriteClick(e,Id)}>Favorite</Button>
    <Button className="button-card" onClick={(e)=>handleUnFavoriteClick(e,Id)}>Unfavorite</Button>
    <Button className="button-card" onClick={(e)=>deleteRecord(e,Id)}>Delete Record</Button>
    </div>
    
    </div>)
}

export default Card
 
Card.propTypes = {
Employer:PropTypes.string.isRequired,
careerUrl:PropTypes.string,
Job_Title:PropTypes.string,

}