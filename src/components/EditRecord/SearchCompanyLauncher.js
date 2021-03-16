import useCallApi from '../CustomHooks/useCallApi'
import Spinner from '@material-ui/core/LinearProgress';
import React from 'react';
import CompanyTable from './CompanyTable'
import {  useParams } from "react-router-dom";



function SearchCompanyLauncher ({keyword,selectedRow,setSelectedRow}) {

    const params= useParams()
    console.log(params,'params');
    const [isLoading, data] = useCallApi(`/v1/company/searchcompanies?keyword=${keyword}`)
   console.log(data,'data')
    if(isLoading || !data ) {
        return <Spinner />
        }


   return (
       <React.Fragment>
           <CompanyTable 
               data={data}
               selectedRow={selectedRow}
               setSelectedRow={setSelectedRow}
           />
       </React.Fragment>
   )
}

export default SearchCompanyLauncher
