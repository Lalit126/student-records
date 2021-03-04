import React, { Fragment, useEffect, useState } from 'react';
import './App.css'
import data from './Student_Data.json' ;
import Card from './components/Card/Card';
import CardDetails from './components/CardDetails/CardDetails';
import { v4 as uuidv4 } from 'uuid';
import Form from './components/Form/Form';
import { Link, Redirect, useHistory } from "react-router-dom";
import Modal from './components/Modal/Modal'
import { Button,Input, FormGroup,Label,} from 'reactstrap';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import {Pagination} from 'react-bootstrap';




import { getByDisplayValue } from '@testing-library/react';
import { green } from '@material-ui/core/colors';


let  uuidData = data.map(i=>{
return {
    ...i, 
    Id: uuidv4()
}

})


// console.log(uuidData,'uuidData');
// Career_Url: "https://ibegin.tcs.com/iBegin/jobs/search"
// Employer: "TCS"
// Graduation_Year: 2020
// Job_Start_Date: "6/20/2020"
// Job_Title: "Software Engineer"
// Specialization: "Computer Science"
// University_Name: "University of North Carolina at Charlotte"'
// Id:2303333303303003

//single source of truth 

// Lifting the state 

// Components
// Life cycle methods 
// Mounted , Updated , Unmounted 

function App() {
const [fav, setFav] =useState([])
const [data, setData]=useState([])
const [deletedRecords, setDeletedRecords]=useState([])
const [careerUrl,setCareerUrl] =useState("")
const [employer,setEmployer] =useState("")
const [graduationDate,setGraduationDate] =useState("")
const [jobStartYear,setJobStartYear] =useState("")
const [jobTitle,setJobTitle] =useState("")
const [specialization,setSpecialization] =useState("")
const [universityName,setUniversityName] =useState("")
const [isSubmitDisabled,setIsSubmitDisabled] =useState(false)
const [isModelOpen,setIsModalOpen]=useState(false)
const [viewCurrentRecord,setViewCurrentRecord]=useState({})
const [searchText,setSearchText]=useState("")
const [searchInvoked,setSearchInvoked]=useState(false)
const [filteredData,setFilteredData]=useState([])
const [graduationYearFilter,setGraduationYearFilter]=useState({})
const [page, setPage] = useState([])
const [entriesPerPage, setEntriesPerPage] = useState(25)
const [currentPage,setCurrentPage]=useState(1)






function getSliced(){
    let copyData=[...data]
    let returnData= copyData.slice((currentPage-1) * entriesPerPage,currentPage*entriesPerPage)
    console.log((currentPage-1)*entriesPerPage,(currentPage)*entriesPerPage ,'SLICED ')
    // console.log(returnData,'returnData')
    return returnData
}

function getFavs() {
let empData= uuidData.filter(i=>fav.includes(i.Id))
let returnEmployerName = empData.map(i=>i.Employer)
return returnEmployerName.join(",")
}

function handlePagination(page){
    let pageNumber =Number(page)
    let entriesPerPage =25
    let copyData = [...data]
    copyData.slice(pageNumber *entriesPerPage,(pageNumber +1)*entriesPerPage)
}


useEffect(()=>{
  
    let totalEntries = data && data.length
    let wholePage= Math.ceil(totalEntries/entriesPerPage)
   let arr=  Array(wholePage).fill(0)
//    console.log(arr,'arr')
   let pages=  arr.map((i,idx)=>{
       return (idx+1)
    })
// console.log(pages,'pages');
    setPage(pages)

},[data,entriesPerPage])

// function getPageNum(entriesPerPage = 25){

//     let totalItems = data.length
//     let wholepage = Math.ceil(totalItems/entriesPerPage);
//     let arr = Array(wholepage).fill(0)
//     let pages = arr.map((i,idx)=>{
//         return <span className = "pages" onClick={(idx)=> handlePagination(idx)}> {(idx +1).toString()}</span>
//     })

//     return pages
    
// }




function handleFormSubmit () {
    console.log('handleFormSubmit invoked')
    setIsSubmitDisabled(true)
    setTimeout(()=>{
        setIsSubmitDisabled(false)
    },3000)

    let objReady = {
        Career_Url:careerUrl,
        Employer:employer,
        Graduation_Year:graduationDate,
        Job_Start_Date:jobStartYear,
        Job_Title:jobTitle,
        Specialization:specialization,
        University_Name:universityName,
        Id:uuidv4()
    }
let copyData = [objReady,...data]

setData(copyData)
    
}

function handleOnKeyDown(e){
 if(e.keyCode === 13 || e.which === 13){
 handleSearch()
 }
}

function handleCardContainerOnClick (Id) {
console.log('handleCardContainer Click invoked',Id);  
let entry =data.filter(i=>i.Id === Id)
console.log(entry,'filteredEntry');
setViewCurrentRecord(entry[0])
setIsModalOpen(true)

}

function deleteRecord (e,Id) {

let deletedRecord= data.filter((i)=>i.Id ===Id)
console.log(deletedRecord,'deletedRecord');

let  copyDelRecords=[...deletedRecords]
copyDelRecords.push(deletedRecord[0])
setDeletedRecords(copyDelRecords)

/////////Logic for updating screen
let remainingRecord= data.filter((i)=>{
    return i.Id !==Id 
   })   
setData(remainingRecord)

console.log(remainingRecord,'remainingRecord');
}

useEffect(()=>{
setData(uuidData)
},[])

function handleGraduationDateOnChange(year){

    let copyObj= {...graduationYearFilter}
    copyObj[year]=!copyObj[year]
 console.log(copyObj,'copyObj');
 setGraduationYearFilter(copyObj)

}
useEffect(()=>{
    let getyears=filteredData.map(i=>i.Graduation_Year)
    let unique = [...new Set(getyears)];
 
    let obj={}
unique.forEach(l=>{
      obj[l]=true
 })
  setGraduationYearFilter(obj)
    
},[searchInvoked])

function getGraduationYear(){

  return  Object.entries(graduationYearFilter).map(j=>{
      return  <span style={{display:'inlineFlex'}}>
     
     <Checkbox
        checked={j[1]}
        onChange={()=>handleGraduationDateOnChange(j[0])}
        color="primary"
        
      />
      <label style={{paddingRight:'20px'}} >{j[0]}</label>
      </span>
   })
    
}

function handleRetrieveAllRecords() {
let mergedRecords = [...deletedRecords,...data]
console.log(mergedRecords,'mergedRecords');
setData(mergedRecords)
setDeletedRecords([])
}

const univName =getSliced().map((i,idx,arr)=>{
const {Employer, Career_Url, Job_Title,Id,Graduation_Year} = i 

return (
    <div className='cardDiv' onClick={()=>handleCardContainerOnClick(Id)}>
    <Card 
    careerUrl={Career_Url}
    Employer={Employer}
    Job_Title={Job_Title}
    Graduation_Year={Graduation_Year}
    key={Id} 
    setFav={setFav}
    fav={fav}
    Id={Id}
    deleteRecord={deleteRecord}

    />
    </div>
    )
    
})  
function handleClear(){
setSearchText("")
setSearchInvoked(false)
}
function handleSearch () {
    if(searchText.length ===0){
        setSearchInvoked(false)
    }
    else {
        setSearchInvoked(true)
    }

    let copyData =[...data]
        copyData = copyData.filter(i=>{
        return i.Employer.toLowerCase().includes(searchText.toLowerCase())
       }) 
       console.log(copyData,'copyData');
    if(setSearchInvoked){
       setFilteredData(copyData)
    }
    
}


function filterLogic () {
if(searchInvoked){
    // return filteredData
   const filterByYear= filteredData.filter((i)=>{
 const gradYear = i.Graduation_Year 
return graduationYearFilter[gradYear]
   })
   return filterByYear
}
    return data
}

return (  

<div className='container'>
<h1> Student Records </h1>
<br></br>


<Input autoFocus className= "search-bar" placeholder='Search with Company name' onKeyPress={(e)=> handleOnKeyDown(e)} value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>

<div className ="search-group">
<span><Button disabled={searchInvoked} onClick={()=>handleSearch()} color="primary" style={{paddingRight:'40px', paddingLeft:'40px', fontSize:'large'}}>Search</Button></span>
{searchInvoked && <span style={{marginLeft:'20px'}}>

    
     <Button onClick={()=>handleClear()} color="secondary">Clear</Button>
     {getGraduationYear()}

</span>

}
</div>
<div>{`Total record :::${filterLogic().length}`}</div>
<div>{`Total deleted record :::${deletedRecords.length}`}</div>
{/* <Modal
buttonLabel="Open"
title="Please enter the form "
handleFormSubmit={handleFormSubmit}
>
<Form 
careerUrl={careerUrl}
employer={employer}
graduationDate={graduationDate}
jobStartYear={jobStartYear}
jobTitle={jobTitle}
specialization={specialization}
universityName={universityName}
setCareerUrl={setCareerUrl}
setEmployer={setEmployer}
setGraduationDate={setGraduationDate}
setJobStartYear={setJobStartYear}
setJobTitle={setJobTitle}
setSpecialization={setSpecialization}
setUniversityName={setUniversityName}
isSubmitDisabled={isSubmitDisabled}
/>
</Modal> */}


<Modal
buttonLabel="Open"
title="Please enter the form "
handleFormSubmit={handleFormSubmit}
isModalOpen={isModelOpen}
setIsModalOpen={setIsModalOpen}
>
<CardDetails
Employer={viewCurrentRecord.Employer}
careerUrl={viewCurrentRecord.Career_Url}
Job_Title={viewCurrentRecord.Job_Title}
Job_Start_Date={viewCurrentRecord.Job_Start_Date}
Specialization={viewCurrentRecord.Specialization}
University_Name={viewCurrentRecord.University_Name}

/>
</Modal>   


<div>

{getFavs()}
</div>
<div>
{/* <Modal 
buttonLabel="Open"
title="Whats up Title"
body={"I am body of the Modal"}
/> */}

<br></br>
<Button className="button" onClick={()=>setFav([])}>Clear All Favorites</Button>

<Button className="button" onClick={()=>handleRetrieveAllRecords()}>Retrieve All Records</Button>
</div> 
  Here is the list of companies : 


  {/* Pagination buttons */}



<Pagination  className="pagination-bar">

  <Pagination.Prev  onClick={()=>setCurrentPage(currentPage-1)} disabled={page[0] === currentPage} color="primary">Previous </Pagination.Prev>   
{page.map(i=>{
   return  <Pagination.Item className={ i !== currentPage ? `page` : `active`} onClick={()=>setCurrentPage(i)}>{i}</Pagination.Item>
})}
<Pagination.Next disabled={page.length === currentPage} onClick={()=>setCurrentPage(currentPage+1)} color="primary">Next</Pagination.Next>
{/* <label>Enter number of records per page </label> */}
{/* <input onBlur={(e)=>setEntriesPerPage(e.target.value)} type='number' /> */}


</Pagination>

<div>
{univName}
</div>
 
    
</div>



) ;      

}

export default App