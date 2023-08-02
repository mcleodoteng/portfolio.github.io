import React from 'react'
import {FaGithubSquare} from 'react-icons/fa'
import {SiFrontendmentor} from 'react-icons/si'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='bg-[#2b2a2a] mt-24'>
      <div className='lg:grid lg:grid-cols-2'>
        <div>
          <h1 className='text-white font-face-gm text-[48px] text-center pt-10
          md:text-[65px] 
          lg:text-left lg:text-[65px] lg:ml-10 lg:mt-16
          '>Contact</h1>
          <p className='text-white font-face-m w-[95%] text-sm mx-auto mt-1 tracking-widest text-center leading-7
          md:w-[70%] md:text-[19px] md:leading-8
          lg:w-[75%] lg:text-[19px] lg:leading-8 lg:text-left lg:ml-10
          '>I would love to hear about your project and how I could help. Please fill in
              the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
      
        <div>
          <form className='mt-12
          md:w-[78%] mx-auto'>
            <div>
              <label className='text-white font-face-m text-[20px] ml-8'>NAME</label>
              <input type="text" className='text-white font-face-m text-[16px] bg-inherit outline-none text-lg md:text-2xl w-[90%]  px-2 py-2 mt-2  border-2 border-b-white border-x-[#2b2a2a] border-t-[#2b2a2a] mx-5'/>
            </div>
            <div className='mt-7'>
              <label className='text-white font-face-m text-[20px] ml-8'>EMAIL</label>
              <input type="text" className='text-white font-face-m text-[16px] bg-inherit text-lg w-[90%] md:text-2xl px-2 py-2 mt-2 outline-none border-2 border-b-white border-x-[#2b2a2a] border-t-[#2b2a2a] mx-5'/>
            </div>
            <div className='mt-7'>
              <label className='text-white font-face-m text-[20px] ml-8'>MESSAGE</label>
              <textarea type="text" className='text-white font-face-m text-[16px] bg-inherit text-lg md:text-2xl w-[90%] px-2 py-2 mt-5 outline-none border-2 border-b-white border-x-[#2b2a2a] border-t-[#2b2a2a] mx-5'>

              </textarea>
            </div>

            <button className='text-white font-face-gm text-[16px] tracking-widest text-center mt-8 p-2 underline underline-offset-[12px] decoration-[#45e92c] float-right mr-4
            md:text-[21px]'>SEND MESSAGE</button>

          </form>
        </div>
        

      </div>
        
        <br/>
        <hr className='mt-32 w-[90%] mx-auto lg:mt-24'/>

        <div className='mt-10 w-[55%] mx-auto text-center
        md:w-[110%] md:flex md:justify-between md:ml-12
        lg:w-[110%] lg:flex lg:justify-between lg:ml-12'>
          <h1 className='text-white font-face-gm text-2xl lg:text-4xl md:text-4xl sm:text-3xl ml-2 bg-transparent'> mcleodoteng </h1>
          <div className='flex justify-between w-[90%] lg:w-[620px] lg:mr-[300px] sm:w-[50%] mx-auto mt-4 px-3.5
          md:w-[22%]'>
            <FaGithubSquare className='text-white text-xl md:text-3xl lg:text-3xl lg:ml-96'/>
            <SiFrontendmentor className='text-white text-xl md:text-3xl lg:text-3xl'/>
            <BsLinkedin className='text-white text-xl md:text-3xl lg:text-3xl'/>
            <BsTwitter className='text-white text-xl md:text-3xl lg:text-3xl'/>
          </div>

        </div>
        <br/><br/>

    
    </div>
  )
}

export default Footer