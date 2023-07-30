import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-orange-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-orange-400 
    duration-500'>
      {props.children}
    </button>
  )
}

export default Button