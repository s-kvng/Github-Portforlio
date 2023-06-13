import React from 'react';

//useParams hook
import { useParams } from 'react-router-dom';

//useFetch
import useDataFetch from '../hooks/useDataFetch';

//components
import Modal from '../components/Modal';

const ProductDetails = ({ userName }) => {

    //get the name parameter in the url
    const { name } = useParams()

    //get the project data with the name 
    const [project, loading , error ] = useDataFetch(`https://api.github.com/repos/${userName}/${name}`)

  return (
    
    <div className=' h-[65vh]'>
        <Modal project={project} loading={loading}/> 
    </div>
  )
}

export default ProductDetails