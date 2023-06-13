import React from 'react';

//import react router components
import { createBrowserRouter , Outlet , RouterProvider } from 'react-router-dom';

//import component
import Header from './Header';
import Footer from './Footer';

//pages
import Profile from '../pages/Profile';
import Projects from '../pages/Projects';
import ProjectDetails from '../pages/ProjectDetails';


const Layout = () =>{
    return (
        <div className=''>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>

    )
}


const router = createBrowserRouter([
    {
        element : <Layout/>,
        children : [
            {path : '/' , element : <Profile userName="s-kvng"/>},
            {path : '/projects' , element : <Projects userName="s-kvng"/>},
            {path: '/projects/:name', element : <ProjectDetails userName="s-kvng"/>}
        ],
    },
])



const Pages = () => {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default Pages