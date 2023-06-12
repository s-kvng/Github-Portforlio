import React from 'react'

//import Link
import { Link } from 'react-router-dom';

//img
import img from '../img/1.png';
import nea from '../img/NEAblack.png';

//links
import Links from './Links'


const Header = () => {

  console.log(Links)
  return (
    <div className='md:container flex justify-between items-center mb-5'>
        <div className="logo w-[100px] h-[100px]">
            <img src={ nea } alt="img" />
        </div>
        <div className="flex justify-around ">
            { Links.map((link , index)=>(
              <Link key={index} to={link.path} className=" px-3 mx-3 hover:text-sky-500">
                  {link.name}
              </Link>
            ))}
        </div>
    </div>
  )
}

export default Header