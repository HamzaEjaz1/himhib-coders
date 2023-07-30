import React from 'react'

const Aboutus = () => {
  return (
    <div className='min-h-[100vh] py-5 '>
    <h1 className='text-center text-3xl mt-16'>About us</h1>
    <hr className='w-1/12 mx-auto border-t-[4px]  border-0 font-bold mb-16 h-4 py-2 border-red-500 '/>


    <div className='md:flex sm:block md:px-36 px-8'>
    <div className='left sm:w-full md:w-1/2 '>
    <h1 className='text-3xl'>We are the team of highly talented  <span className='text-orange-600'>Developers.</span>
    <p className='font-light pt-5 text-sm  '><i>We are team of young, highly motivated and talented developers whose aim is to build real life solutions that can serve to the community and to contribute to te world of technology. </i></p>
   
    </h1>
    <ul className='list-disc text-sm py-5'>
    <li className='my-4'> Highly Motivated and Talented Wing.</li>
    <li className='my-4'>Proffessionals in their core Technologies.</li>
    <li className='my-4'>Aimers to change the world with Technology.</li>
    <li className='my-4'>Believers of team work and helping each other.</li>
    </ul>
    
    </div>
    <div className='right md:w-1/2  sm:w-full'><img src='https://www.bytewiseltd.com/assets/img/tabs-4.jpg' className='md:p-5 md:m-5 sm:p-2 sm:m-12'></img>
  
    </div>
    </div>
    </div>
  )
}

export default Aboutus