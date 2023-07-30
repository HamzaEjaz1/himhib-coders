import React from 'react'
import { FaFacebook , FaTwitter ,FaInstagram ,FaLinkedin, FaVoicemail, FaPhone } from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rzzdfm8', 'template_z948jyg', form.current, 'OfPUyWKQa6JA9eNdX')
      .then((result) => {
          console.log(result.text);
          alert("Form Submit Succesfully");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='bg-gray-100 max-w-full py-5 min-h-[100vh]' id="contactus">
    <h1 className='text-center text-3xl pt-10'>Contact us </h1>
    <hr className='w-1/12 mx-auto border-t-[4px]  border-0 font-bold mb-5 border-red-500 '/>
    <p className='text-center md:px-36 sm:px-25 py-5'>Do you have any questions? or want to share any idea? reach out and we'll see how we can assist.</p>
   
<div className="md:flex justify-between   md:px-36  sm:block ">
<div className='mails  w-1/2  mr-10'>
<div className='bg-red flex w-full '>
<div className='bg-white px-5 py-3  '><FaFacebook className='text-orange-600 text-[82px] border-dotted border-2 border-orange-400 rounded-full py-5'/><p className='text-gray-500 text-center mt-2'>Facebook</p>
</div>
<div className='bg-white px-5 py-3  '><FaLinkedin className='text-orange-600 text-[82px] border-dotted border-2 border-orange-400 rounded-full py-5'/><p className='text-gray-500 text-center mt-2'>Linkedin</p>
</div>
<div className='bg-white px-5 py-3  '><FaTwitter className='text-orange-600 text-[82px] border-dotted border-2 border-orange-400 rounded-full py-5'/><p className='text-gray-500 text-center mt-2'>Twitter</p>
</div>
<div className='bg-white px-5 py-3  '><FaInstagram className='text-orange-600 text-[82px] border-dotted border-2 border-orange-400 rounded-full py-5'/><p className='text-gray-500 text-center mt-2'>Instagram</p>
</div>

</div>
<div className='flex justify-between my-7  '>
<div  className='bg-white px-12  md:w-1/2 sm:w-full mr-3  text-center py-20 '><a href='mailto:hamzaejaz0771@gmail.com'>
<AiOutlineMail className='text-orange-600 w-full text-[82px] text-center border-dotted border-2 border-orange-400 rounded-full py-5'/><p className='text-gray-500 text-center mt-2'>Email</p>
<p className='text-sm font-thin'>hamzaejaz0771@gmail.com</p>
</a>

</div>
<div  className='bg-white px-12  md:w-1/2 sm:w-full mr-3  text-center py-20 '><a href='tel:+9203118203633'>
<FaPhone className='text-orange-600 w-full text-[82px] text-center border-dotted border-2 border-orange-400 rounded-full py-5'/><p className='text-gray-500 text-center mt-2'>Phone</p>
<p className='text-sm font-thin'>+9203118203633</p>
</a>

</div>

</div>
</div>


<div className='forms bg-white md:w-1/2 sm:w-full ml-5 px-8 py-10'>
<div className='flex justify-between items-center'>
<form ref={form} onSubmit={sendEmail}>
<label className="w-full ">Name</label>
<input type="text" name="user_name" className="w-full px-5 py-2 my-2 bg-transparent border-2 rounded border-gray-300" />
<label className="w-full">Your Email</label>
<input type="email" name="user_email" className="w-full px-5 py-2 my-2 bg-transparent border-2 rounded border-gray-300" />
<label className="w-full">Message</label>
<textarea name="message" className="w-full px-4 py-2 resize-none border-2 rounded border-gray-300" rows="5" cols="5" />
<input type="submit" value="Send Message" className="w-full px-5 py-2 my-2 bg-orange-600 text-white" />
</form>
</div>
</div>

</div>
    
    </div>
  )
}

export default Contactus