import React from 'react'
import {FaGithubSquare} from 'react-icons/fa'
import {SiFrontendmentor} from 'react-icons/si'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import images1 from "../assets/mypic2.jpg"
//bg-[#141414]
const Header = () => {
  return (
    <div className=''>
        
        <div className='w-[55%] mx-auto pt-10 bg-[#00000093] text-center md:w-[100%] lg:[100%] md:ml-10' >
            <div className=' md:flex md:justify-between lg:flex lg:justify-between'>
              <h1 className='text-white font-face-gm text-2xl lg:text-4xl md:float-left md:text-4xl sm:text-3xl ml-2 md:ml-0 bg-transparent'> mcleodoteng </h1>
              <div className='flex justify-between w-[80%] lg:w-[41%] md:w-[45%] sm:w-[50%] mx-auto mt-4 px-3.5'>
                  <FaGithubSquare className='text-white text-xl md:text-2xl md:ml-[50%] lg:text-2xl lg:ml-[67%]'/>
                  <SiFrontendmentor className='text-white text-xl md:text-2xl'/>
                  <BsLinkedin className='text-white text-xl md:text-2xl'/>
                  <BsTwitter className='text-white text-xl md:text-2xl lg:mr-0'/>
              </div>
            </div>
            <div className='md:flex md:w-[100%] md:mt-5 lg:flex lg:w-[100%] lg:mt-5'>*
              <img src={images1} alt='my-selfimage'className=' mt-7 mx-auto md:w-[45%] md:ml-[50%] lg:w-[29%] lg:ml-[57%]  '/>
            </div>
              
            <br/>
        </div>
        <div>
            {/* <img src={images1} alt='my-selfimage'className='grayscale '/> */}
        </div>
    </div>
    
  )
}

export default Header