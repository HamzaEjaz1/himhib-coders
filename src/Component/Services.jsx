import React from 'react'

import { FaBeer } from 'react-icons/fa';
import {TbWriting} from 'react-icons/tb'
import {BsCodeSlash, BsFillUsbDriveFill} from 'react-icons/bs'
import {FaGooglePlay} from 'react-icons/fa'
const Services = () => {
  return (
    <div className='bg-black text-white min-h-[100vh]'>
    <h1 className='text-center text-3xl pt-10'>Services </h1>
    <hr className='w-1/12 mx-auto border-t-[4px]  border-0 font-bold mb-5 border-red-500 '/>
    <p className='text-center md:px-36 px-8 py-5'>We use the right tools and methodologies to develop revolutionary solutions and quality products that address market needs and align with your business objectives to deliver maximum ROI.</p>
   

    <div className='flex justify-between items-center md:px-36 px-8 flex-wrap'>
    <div className='border-b-2 bg-slate-900 px-5 border-b-orange-600 md:w-[45%] sm:w-full py-5 '>
    <BsCodeSlash className='text-4xl text-orange-600'/>
    <h1 className=' text-orange-600 text-2xl py-2'>Web Development</h1>
    <p className='font-sm'>We help you build secure, stable, and scalable web applications, portals and solutions that your customers will love.</p>
    
    </div>
    <div  className='border-b-2 bg-slate-900 px-5 border-b-orange-600 my-5 py-5 md:w-[45%] sm:mx-3  sm:w-full '>
    <FaGooglePlay className='text-4xl text-orange-600 text-center'/>
    <h1 className=' text-orange-600 text-2xl py-2'>App Development</h1>
<p>We build high-quality android applications that provide maximum value for your customers & help grow your business.</p>    </div>
   <div  className='border-b-2 px-5 py-5 border-b-orange-600  md:w-[45%] sm:mx-3  sm:w-full bg-slate-900 my-5 '>
   <BsFillUsbDriveFill className='text-4xl text-orange-600'/>
   <h1 className=' text-orange-600 text-2xl py-2'>Graphic Designing </h1>
    <p>We provide the best solutions related to Design that our customers will love.</p>
  </div> 
    <div  className='border-b-2 bg-slate-900  px-5 py-5 border-b-orange-600 md:w-[45%] sm:mx-3  sm:w-full my-7  '>
<TbWriting className='text-4xl text-orange-600 text-center flex justify-center '/>
    
    <h1 className='text-orange-600 text-2xl py-2'>Content Writing</h1>

    
 <p>We provide the best and highly Recomended Content  related to Content that our customers will love.</p>
 </div> 
    
    </div>
    
    </div>
  )
}

export default Services