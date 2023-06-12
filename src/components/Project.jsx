import React, {useState} from "react";

//components
import Modal from "./Modal";
import Button from "./Button";

//
import { Link } from "react-router-dom";

const Project = ({ project }) => {


  return (

      <>

<div className="grad w-full h-[280px] overflow-hidden rounded-[8px] relative group flex  flex-col items-center justify-center">
        {/*badge*/}
        { project.created_at > "2023-04-20" ? (
          <div
            className="absolute bg-accent text-primary top-4 right-4 px-2 text-[12px]
          rounded-full upppercase font-extrabold z-10"
          >
            New
          </div>
        ) : (
          ""
        )}

        {/* image */}
        {/* <div className="w-full h-[200px] flex items-center justify-center relative">
          <img
            className="w-[160px] h-[160px] group-hover:scale-90 transition-all"
            src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
            alt=""
          />
        </div> */}

        {/* Text */}
        <div className="px-6 pb-6 flex flex-col items-center justify-center">
          {/* Project name*/}
          <div className=" text-2xl md:text-xl font-semibold text-accent capitalized uppercase mb-10 ">
            {project.name.substring(0, 18)}
          </div>


          {/* Project button*/}
          <div className="mb-3 lg:mb-9 w-full mx-auto flex justify-center">
          <Link className="btn btn-accent text-[12px] font-semibold max-w-[180px]" to={`/projects/${project.name}`}>
            Open Project
        </Link>
          </div>
        </div>

        <div  className="w-full ps-2 text-zinc-500 ">
          created - {project.created_at}
        </div>
      </div>
      
      
      </>

    
    
  );
};

export default Project;
