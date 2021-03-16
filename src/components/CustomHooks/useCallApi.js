import React, { useEffect, useState } from 'react';
import axios from '../../Axios';



function useCallApi (url){

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
   
    useEffect(()=>{
        setIsLoading(true)
        
        axios.get(url)
        .then(res=>{
            console.log(res)
            setData(res.data)
            setIsLoading(false)
        })
        .catch(e=>{
            setIsLoading(false)
            console.log(e)
        })
        },[])


   return  [isLoading, data]
}

export default useCallApi