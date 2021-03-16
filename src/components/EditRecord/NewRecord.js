import React ,{useEffect, useState} from 'react';
import './edit-record.scss';
import { Link, Redirect, useHistory,useParams,useLocation } from "react-router-dom";
import useCallApi from '../CustomHooks/useCallApi'
import Spinner from '@material-ui/core/LinearProgress';
import NavBar from '../NavBar/NavBar';
import BigHeader from '../ReusableUI/BigHeader';
import { Button,Input, FormGroup,Label,Col} from 'reactstrap';
import axios from '../../Axios';
import moment from 'moment';
import SearchCompanyLauncher from '../EditRecord/SearchCompanyLauncher';
import Checkbox from '@material-ui/core/Checkbox';







function NewRecord() {

const history= useHistory()

const [universityName,setUniversityName]=useState("")
const [specialization,setSpecialization]=useState("")
const [jobTitle,setJobTitle]=useState("")
const [jobStartDate,setjobStartDate]=useState(null)
const [graduationDate,setGraduationDate]=useState(null)
const [submitted,setSubmitted] =useState(false)
const [selectedRow,setSelectedRow] =useState(null)
const [fireCompanySearch,setFireCompanySearch] =useState(false)
const [companySearchText,setCompanySearchText] =useState("")
const [noCompanyFound,setNoCompanyFound] =useState(false)

console.log(selectedRow,'selectedRow');


function handleUpdateSubmit (e) {
// e.stopPropagation()
// e.preventDefault()
// setSubmitted(true)
console.log('I am insdie handleupdatesubmit')

let obj=  {
  universityName,
  specialization,
  jobTitle,
  jobStartDate,
  graduationDate,
  company:selectedRow
}

axios.post('v1/record/createnewrecord',obj)
  .then(res=>{
      console.log(res)
      setSubmitted(false)
      history.push('/administration')
      // setData(res.data)
      // setIsLoading(false)
  })
  .catch(e=>{
      // setIsLoading(false)
      console.log(e)
      setSubmitted(false) 
      alert(`Error Creating New Record`)
  })
}
function handleSubmitDisable () {

return false 
}

// console.log(children,'children');
 return (
    <div className='new-edit-container'>
      <NavBar>
       <BigHeader 
       banner="New Record"
       />
       <br></br>
       <p>To create new record . First create a new company <Link to='/createnewcompany'>here</Link>.
       If already created , Proceed to create new record
       </p>
       <br></br>
         <div className='field-container' >
        <span className='edit-label'><label>Company Search </label></span>
         <input type='text' size='60' onChange={(e)=>setCompanySearchText(e.target.value)} value={companySearchText}  
         placeholder=''></input>{` `}
         <Button disabled={fireCompanySearch} onClick={()=>setFireCompanySearch(true)} color="secondary">Search Companies</Button>{` `}
         <Button disabled={!fireCompanySearch} onClick={()=>setFireCompanySearch(false)} color="secondary">Clear</Button>

         </div> 
   
     {fireCompanySearch && <SearchCompanyLauncher 
     keyword={companySearchText}
     selectedRow={selectedRow}
     setSelectedRow={setSelectedRow}
     />
}
     <br></br>

 <div>
    
       <div className='field-container' >
        <span className='edit-label'><label>University Name</label></span>
         <input type='text' size='60' onChange={(e)=>setUniversityName(e.target.value)} value={universityName}  
         placeholder=''></input>
         </div>

       <div className='field-container' >
        <span className='edit-label'><label>Specialization</label></span>
         <input type='text' size='60' onChange={(e)=>setSpecialization(e.target.value)} value={specialization}  
         placeholder=''></input>
         </div>

      
       <div className='field-container' >
        <span className='edit-label'><label>Graduation Date</label></span>
         <input type='date' size='60' onChange={(e)=>setGraduationDate(e.target.value)} value={graduationDate}
         placeholder=''></input>
         </div>


         <div className='field-container' >
        <span className='edit-label'><label>Job Title</label></span>
         <input type='text' size='60' onChange={(e)=>setJobTitle(e.target.value)} value={jobTitle }  
         placeholder=''></input>
         </div>

         <div className='field-container' >
        <span className='edit-label'><label>Job Start Date</label></span>
         <input type='date' size='60' onChange={(e)=>setjobStartDate(e.target.value)} value={jobStartDate}
         placeholder=''></input>
         </div>

       <div className='field-container bmxl bpxl' >
         <Button disabled={handleSubmitDisable()} onClick={(e)=>handleUpdateSubmit(e)} color="secondary">Submit </Button>
         </div>
         </div>
</NavBar>
    </div>)

}


export default NewRecord
