import React from 'react';

//import react router components
import { createBrowserRouter , Outlet , RouterProvider } from 'react-router-dom';

//import component
import Header from './Header';
import Footer from './Footer';

//pages
import Profile from '../pages/Profile';
import Projects from '../pages/Projects';


const Layout = () =>{
    return (
        <div className='h-screen'>
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
            {path : '/' , element : <Profile/>},
            {path : '/projects' , element : <Projects />},
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