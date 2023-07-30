import React from 'react'
import { FaFacebook , FaTwitter ,FaInstagram ,FaLinkedin } from 'react-icons/fa'
const LowerFooter = () => {
  return (
    <div className='bg-black text-white md:flex sm:block md:justify-between md:items-center px-36 py-8 sm:text-center'>
 <div>   <p className='font-thin'>All &nbsp; &copy; Copyright Belong To HamHib Coder 2023 -2024</p>
 </div>
 <div className='flex md:my-0 sm:my-10 mx-[-50px] py-5'>
 <div className='bg-slate-900 px-5 py-3 md:mx-3 sm:0 rounded'><FaFacebook className=''/></div>
 <div className='bg-slate-900 px-5 py-3 mx-3 rounded'><FaInstagram/></div>
 <div className='bg-slate-900 px-5 py-3 mx-3 rounded'><FaTwitter/></div>
 <div className='bg-slate-900 px-5 py-3 mx-3 rounded'><FaLinkedin/></div>
 
 </div>
    </div>
  )
}

export default LowerFooter