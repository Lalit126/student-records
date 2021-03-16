import useCallApi from '../CustomHooks/useCallApi'
import Spinner from '@material-ui/core/LinearProgress';
import React from 'react';
import EditRecord from './EditRecord'
import {  useParams } from "react-router-dom";



function EditRecordLauncher () {

    const params= useParams()
    console.log(params,'params');
    const [isLoading, data] = useCallApi(`/v1/record/getRecordById?Id=${params.Id}`)
   console.log(data,'data')
    if(isLoading || !data ) {
        return <Spinner />
        }


   return (
       <React.Fragment>
           <EditRecord 
           editingMode='edit'
           gotData={data}
           />
       </React.Fragment>
   )
}

export default EditRecordLauncher
