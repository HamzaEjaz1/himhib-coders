import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-900 min-h-[40vh]'>
    <div className='md:px-36  py-7 md:flex md:justify-between text-white sm:block'>
<div className='md:w-1/5 sm:w-full sm:text-center md:text-left px-8 py-5'>
<h1><span className='text-4xl font-bold text-pink-600'>H</span><span>am</span><span className='text-4xl font-bold text-pink-600'>H</span><span>ib</span> <span>Coders</span></h1>
<p className='text-sm font-light'>Peshawar , Pakistan</p>

<br/>
<p className='font-light'><b>Phone : </b> +92  311 8203633</p>
<p className='font-light'><b>Email :</b> hamzaejaz0771@gmail.com</p>
</div>
<div className='md:w-1/5 sm:w-full  md:mx-10   px-5 py-5'>
<h1 className=' text-xl  '>Useful Links </h1>
<hr className='w-10  border-t-[2px]  border-0 font-bold mb-5 border-red-500 '/>
<ul className=' text-gray-500 '>
<li className='my-2'>About</li>
<li className='my-2'>Services</li>
<li className='my-2'>Contact us </li>
</ul>
</div>
<div className='md:w-2/6 sm:w-full px-5 py-5'>
<h1 className=' text-xl '>Our Services </h1>
<hr className='w-10  border-t-[2px]  border-0 font-bold mb-5 border-red-500 '/>
<ul className='  text-gray-500'>
<li className='my-2'>Web Development</li>
<li className='my-2'>App Defvelopment</li>
<li className='my-2'>Graphic Designing</li>
<li className='my-2'>Content Writing</li>
</ul>
</div>
<div className='2/6 px-5 py-5'>
<h1 className=' text-xl '>News Letter</h1>
<hr className='w-10  border-t-[2px]  border-0 font-bold mb-5 border-red-500 '/>
<p>Join our newsletter to get the latest news and to stay updated with us.</p>
<div className='flex my-3 '><input className='w-full'/>
<button  className='px-4 text-white font-bold py-1 bg-orange-500 '>Subscribe</button></div>

</div>



    </div>
    
    
    </div>
  )
}

export default Footer