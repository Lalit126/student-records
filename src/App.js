import React, { useEffect, useState } from 'react';
import './App.css'
import DataTable from './components/DataTable/DataTable';
import { useHistory } from "react-router-dom";
import { Button,Input,Col} from 'reactstrap';
import Spinner from '@material-ui/core/LinearProgress';
import axios from './Axios'
import {XYPlot,HorizontalGridLines,VerticalBarSeries, LineSeries, XAxis, YAxis} from 'react-vis';
import Login from './components/Login/Login'
import Navbar from './components/Navbar/Navbar'

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
<Navbar>

<h1> Student Records </h1>
<div>
<Col sm={4} >
<Input value={searchText} onChange={(e)=>setSearchText(e.target.value)} 
onKeyPress={(e)=>handleKeyPress(e)} autoFocus type="text" name="email" id="exampleEmail" placeholder="Search..." />
<div style={{margin:'20px'}}>

<Button disabled={searchInvoked} onClick={()=>handleSearch()} color="primary">Search</Button>
{searchInvoked && <span style={{marginLeft:'20px'}}><Button  onClick={()=>handleClear()} color="primary">Clear</Button></span>
}
</div>
</Col>
<Login/>

</div>
<div className ="graph-card">
<XYPlot width={400} height={300} xType="ordinal">
            <HorizontalGridLines />
            <VerticalBarSeries
               data={[
                  { x: "Amazon", y: 10 },
                  { x: "Facebook", y: 5 },
                  { x: "Quint", y: 14 },
                  { x: "Hello", y: 11 },
                  { x: "Bye", y: 12 }
               ]}
            />
            <XAxis />
            <YAxis />
            </XYPlot>
            </div>
<div>
<div style={{margin:'20px',textAlign:'right'}}>
<Button onClick={()=>getNext()} color="secondary">Next</Button>
</div>
<DataTable 
data={data}
/>
</div>
<div style={{margin:'20px',textAlign:'right'}}>
<Button onClick={()=>getNext()} color="secondary">Next</Button>

</div>
</Navbar>
</div>



) ;      

}

export default App