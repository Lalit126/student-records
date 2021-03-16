import useCallApi from '../CustomHooks/useCallApi'
import Spinner from '@material-ui/core/LinearProgress';
import React from 'react';
import EditCompany from './EditCompany'
import {  useParams } from "react-router-dom";



function EditCompanyLauncher () {

    const params= useParams()
    console.log(params,'params');
    const [isLoading, data] = useCallApi(`/v1/company/getCompanyById?Id=${params.Id}`)
   console.log(data,'data')
    if(isLoading || !data ) {
        return <Spinner />
        }


   return (
       <React.Fragment>
           <EditCompany 
           gotData={data}
           />
       </React.Fragment>
   )
}

export default EditCompanyLauncher
