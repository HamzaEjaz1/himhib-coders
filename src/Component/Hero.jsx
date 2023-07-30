import React from 'react'
import "../App.css"
import Contactus from './Contactus'
const Hero = () => {
  return (
  <div className='bg h-[100vh]'>
  <div className=' md:px-36  px-8 py-[100px]' >
    
  <h1 className='text-[50px] my-5 md:w-1/2 sm:w-full  container  flex justify-between items-center'>Revolutionize digital future with HamHib Coders !</h1>
 <p className=' font-light text-2xl md:w-1/2 sm:w-full my-2 '>A talented development & community wing aiming towards growth of digital world!</p>
<a href={Contactus}> <button className='px-9 py-2 text-white font-bold  bg-orange-500 rounded '>Contact us</button></a>
 </div>
  </div>
  )
}

export default Hero