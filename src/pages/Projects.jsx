import React from 'react'

//import hook
import useDataFetch from '../hooks/useDataFetch';

//import component
import ProductSlider from '../components/ProjectSlider';

const Projects = ({ userName }) => {

const [ projects , loading , error] = useDataFetch(`https://api.github.com/users/${userName}/repos`)

console.log(projects);
  return (
    <div className='container h-[65vh] mt-10 flex mb-6'>
      <ProductSlider data={ projects } />
    </div>
  )
}

export default Projects