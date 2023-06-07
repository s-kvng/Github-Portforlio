import React from 'react';

//import hooks
import { useState , useEffect } from 'react';

const useDataFetch = (dataSource) => {


  const [profile , setProfile ] = useState([]);
  const [loading , setLoading ] = useState(true);
  const [error , setError ] = useState('')

  
  useEffect(() => {
    
    async function fetchData(){

      try {
        const data = await fetch(dataSource)

      const result = await data.json()

      if(result){

        setProfile(result);
        setLoading(false)
      }
      } catch (error) {
        
        setError(error.message);
        setLoading(false)

      }

    }

    fetchData()

  }, [dataSource]);  


  return (
    [ profile , loading , error]
  )
}

export default useDataFetch