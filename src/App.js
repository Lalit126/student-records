

import React, { Fragment, useEffect, useState } from 'react';
import './App.css'
import './beststyles.scss'
import DataTable from './components/DataTable/DataTable';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import {  useHistory } from "react-router-dom";
import { Button,Input, FormGroup,Label,Col} from 'reactstrap';
import Spinner from '@material-ui/core/LinearProgress';
import axios from './Axios';
import TopEmployers from './components/Visualizations/TopEmployers/TopEmployers';
import NavBar from './components/NavBar/NavBar';


function App() {
const [data, setData]=useState([])
const [searchText,setSearchText]=useState("")
const [searchInvoked,setSearchInvoked]=useState(false)
const [isDataLoading, setIsDataLoading] = useState(false)
const [nextCursor, setNextCursor] = useState(null)
console.log(nextCursor,'nextCursor');

const history= useHistory()


function handleKeyPress (e) {
if(e.which == 13 || e.keyCode == 13){
    handleSearch()
}
}

// componentDidMount
useEffect(()=>{
setIsDataLoading(true)

axios.get(`v1/record/getpaginatedrecords?next_cursor=${nextCursor}`)
.then(res=>{
    console.log(res)
    setData(res.data)
    setIsDataLoading(false)
})
.catch(e=>{
    setIsDataLoading(false)
    console.log(e)
})
},[])

function getNext(){
    setIsDataLoading(true)
    axios.get(`v1/record/getpaginatedrecords?next_cursor=${nextCursor}`)
.then(res=>{
    console.log(res)
    let copyData=[...data,...res.data]
    setData(copyData)
    setIsDataLoading(false)
})
.catch(e=>{
    setIsDataLoading(false)
    console.log(e)
})
}

function handleSearch () {
    setSearchInvoked(true)
    setIsDataLoading(true)

    axios.get(`v1/record/search?searchText=${searchText}`)
    .then(res=>{
        console.log(res)
        setData(res.data)
        setIsDataLoading(false)

})
    .catch(e=>{
        setIsDataLoading(false)
        console.log(e)
    }) 

}

useEffect(()=>{
if(data && data.length) {
    const lastElemId = data[data.length-1]._id
   setNextCursor(lastElemId)
}

},[data])

   
function handleClear(){
setSearchText("")
setSearchInvoked(false)
}

if(isDataLoading){
   return <Spinner />
}

return (  

<div className='container'>


{/* <TopEmployers /> */}
<NavBar>
<div>
    <Login />
    <Logout />
</div>
<div>
<div style={{margin:'20px',textAlign:'right'}}>
<Button onClick={()=>getNext()} color="secondary">Next</Button>
</div>


<div>
  
<div className= "inline">
<Input value={searchText} onChange={(e)=>setSearchText(e.target.value)} 
onKeyPress={(e)=>handleKeyPress(e)} autoFocus type="text" name="email" id="inline" placeholder="Search..." />
<div style={{margin:'20px'}}>
</div>

<div className ="inline">
<Button disabled={searchInvoked} onClick={()=>handleSearch()} color="primary" id="inline">Search</Button>
</div>

</div>


{searchInvoked && <span style={{marginLeft:'20px'}}><Button  onClick={()=>handleClear()} color="primary">Clear</Button></span>
}
</div>

<DataTable 
data={data}
/>
</div>
<div>

</div>
<div style={{margin:'20px',textAlign:'right'}}>
<Button onClick={()=>getNext()} color="secondary">Next</Button>
</div>
</NavBar>  
</div>



) ;      

}

export default App