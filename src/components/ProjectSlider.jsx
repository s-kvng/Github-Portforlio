import React from "react";

import { Link } from "react-router-dom";

//import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../slider.css';

//import required modules
import { Pagination , Navigation} from 'swiper';

//components
import Project from "./Project";

const ProjectSlider = ({ data }) => {
  

  return (
   <Swiper modules={[Pagination , Navigation]} loop={false} navigation={true}
    breakpoints={
      {
        320: {
          slidesPerView : 1,
          spaceBetween: 30
        },
        720: {
          slidesPerView : 2,
          spaceBetween: 30
        },
        1024: {
          slidesPerView : 4,
          spaceBetween: 30
        },
        1440: {
          slidesPerView : 5,
          spaceBetween: 30
        },
      }
    }

    pagination = {{
      clickable: true,
    }}

    className="productSlider mx-auto my-auto max-w-[330px] md:max-w-[950px] xl:max-w-[1410px] transition-all"
   >
    <>
      {data?.map((project)=>{
        console.log('log-> ',project)
        return (
          <SwiperSlide key={project.id}>
              <Project project={{
                field : project.name,
                value : (
                    <Link className="btn btn-accent text-[12px] font-semibold max-w-[180px]" to={`/projects/${project.name}`}>
                        Open Project
                    </Link>
                ),
                created : project.created_at,
              }}/>
          </SwiperSlide>
        )
      })}
    </>
   </Swiper>

  );
};

export default ProjectSlider;
