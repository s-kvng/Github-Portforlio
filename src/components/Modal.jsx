import React, { useRef,useEffect } from 'react';

//links
import { Link , useNavigate } from 'react-router-dom';


const Modal = ({ project, loading }) => {

    const modalWrapperRef = useRef(null)

    const navigate = useNavigate()
    

    console.log("pro-> ",project)
  
    //Close Modal
  useEffect(() => {
    const handleOutsideClick = (e) => { 
      if (e.target === modalWrapperRef.current) {
        // Handle the outside click event here
        navigate(-1)
        // Remove the modal or update the state to hide the modal
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

    

  return (
    <div ref={modalWrapperRef}  className="modalWrapper w-full h-full fixed top-[50%] left-[50%] z-99 backdrop-blur-sm translate-x-[-50%] translate-y-[-50%]">
      <div
        className="modal bg-bgModal  md:w-[40%] w-[80%] fixed top-[50%] left-[50%] translate-x-[-50%] 
        translate-y-[-50%] rounded-[35px] flex flex-col items-center justify-center min-h-[40%] p-1 animate-[modalAnimation_1s_ease-in-out]"
      >
      

        <h2 className=" text-3xl font-semibold text-black uppercase mb-2">{project.name}</h2>

        

        <div className="flex flex-wrap flex-col p-2 text-lg text-black">
         
          <p className=' text-xl py-1'>
            <span className="font-semibold">Visibility: </span>{project.visibility}
          </p>
          <p className=' text-lg py-1'> 
            <span className="font-semibold">Project Github-Page: </span> <span className=' text-cyan-400'><Link to={project.html_url}> Url </Link></span> 
          </p>
          <p className=' text-xl py-1'>
            <span className="font-semibold">Forking: </span>{project.allow_forking ? "You can fork this project" : "Not allowed"}
          </p>
          <p className=' text-xl py-1'>
            <span className="font-semibold">Last Updated: </span>{project.updated_at}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Modal