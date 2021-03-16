import React ,{useEffect, useState} from 'react';
import './edit-company.scss';
import { Link, Redirect, useHistory,useParams,useLocation } from "react-router-dom";
import NavBar from '../NavBar/NavBar';
import BigHeader from '../ReusableUI/BigHeader';
import { Button,Input, FormGroup,Label,Col} from 'reactstrap';
import axios from '../../Axios';
import moment from 'moment'




function EditCompany({gotData}) {

function getInitialValues () {
let initialState={
  careerUrl:"",
  companyName:"",
}

initialState.careerUrl= gotData.careerUrl
initialState.companyName= gotData.companyName

return initialState
}

// function handleFormDisable () {
// let elen= employer.length
// if(elen >=2 && elen <=20 && !isSubmitDisabled){
//     return false 
// }
// return true
// }

const history= useHistory()
const [companyName,setCompanyName]=useState(getInitialValues().companyName)
const [careerUrl,setCareerUrl]=useState(getInitialValues().careerUrl)
const [submitted,setSubmitted] =useState(false)

function handleDelete (e) {
  e.stopPropagation()
  e.preventDefault()
  setSubmitted(true)
  axios.delete(`v1/company/deletecompany?_id=${gotData._id}`)
          .then(res=>{
              console.log(res)
              setSubmitted(false)
              history.push('/app')
              // setData(res.data)
              // setIsLoading(false)
          })
          .catch(e=>{
              // setIsLoading(false)
              console.log(e)
              setSubmitted(false)
              alert(`Error Updating Record`)
          })
  
}

let commonFields ={
  careerUrl,
  companyName,
  
}


function handleUpdate (e) {
e.stopPropagation()
e.preventDefault()
setSubmitted(true)


axios.put('v1/company/editcompany',{...commonFields,_id:gotData._id})
        .then(res=>{
            console.log(res)
            setSubmitted(false)
            history.push('/app')
            // setData(res.data)
            // setIsLoading(false)
        })
        .catch(e=>{
            // setIsLoading(false)
            console.log(e)
            setSubmitted(false)
            alert(`Error Updating Company`)
        })
 

}

// console.log(children,'children');
 return (
    <div className='new-edit-container'>
      <NavBar>
       <BigHeader 
       banner={`Now Editing ${companyName}`} 
       />
    
          <div className='field-container' >
        <span className='edit-label'><label>Company Name</label></span>
         <input type='text' size='60' onChange={(e)=>setCompanyName(e.target.value)} value={companyName}
         ></input>
         </div>

         <div className='field-container' >
        <span className='edit-label'><label>Career Url</label></span>
         <input type='text' size='60' onChange={(e)=>setCareerUrl(e.target.value)} value={careerUrl}
         placeholder=''></input>
         </div>
         

       <div className='field-container' >
         <Button disabled={submitted} onClick={(e)=>handleUpdate(e)} color="secondary">Update </Button>
         </div>
         <div className="dangerzone">
        DANGER ZONE -- BE CAREFUL 
         <Button  onClick={(e)=>handleDelete(e)} color="secondary">DELETE </Button>
         </div>
       </NavBar>
    </div>)

}


export default EditCompany
