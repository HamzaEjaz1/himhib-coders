import React, { useState } from 'react'
import Button from './Button';
import {FaBars,FaTimes} from 'react-icons/fa'

const Nav = () => {
    let Links =[
      {name:"Home",link:"/Hero"},
      {name:"About us",link:"/About"},
      {name:"Services",link:"/services"},
    
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-36 px-10'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
    
        <h1><span className='text-4xl font-bold text-pink-600'>H</span><span>am</span><span className='text-4xl font-bold text-pink-600'>H</span><span>ib</span> <span>Coders</span></h1>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <FaBars name={open ? 'close':'menu'}></FaBars>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-[16px] md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
     <a href="contactus">
     <Button>
     Contact Us
     </Button>
     </a>
      </ul>
      </div>
    </div>
  )
}

export default Nav