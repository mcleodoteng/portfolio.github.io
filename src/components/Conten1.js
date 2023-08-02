import React from 'react'

const Conten1 = ({imageName,projectName,lang1,lang2,lang3}) => {

  const HandleClick = ((e) => {
    <div className='absolute bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-200'>
      <button><h2 className='text-white font-face-gm text-[20px] tracking-widest underline underline-offset-[12px] decoration-[#45e92c]'>VIEW PROJECT</h2></button>
      <button><h2 className='text-white font-face-gm text-[20px] tracking-widest underline underline-offset-[12px] decoration-[#45e92c]'>VIEW CODE</h2></button>
    </div>
  })
  return (
    <div className='w-[90%] mx-auto mt-12 group h-fit'>
      <div className='group relative'>
        <img src={(imageName)} alt='my-selfimage'  className='  mx-auto '/>
        <div className='absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#00000079] opacity-0 group-hover:h-full group-hover:opacity-100 duration-300'>
          <a href='/'><h2 className='text-white font-face-gm text-[20px] tracking-widest underline underline-offset-[10px] decoration-[#45e92c]'>VIEW PROJECT</h2></a>
          <a href='/'><h2 className='text-white font-face-gm text-[20px] tracking-widest underline underline-offset-[10px] decoration-[#45e92c] mt-8'>VIEW CODE</h2></a>
        </div>
        
      </div> 
      <h1 className='text-white font-face-gm text-[25px] mt-5'>{projectName}</h1>
      <div className='flex gap-3 mt-1'>
          <h2 className='text-white font-face-gm text-[23px]'>{lang1}</h2>
          <h2 className='text-white font-face-gm text-[23px]'>{lang2}</h2>
          <h2 className='text-white font-face-gm text-[23px]'>{lang3}</h2>
      </div>
      
        
      <div className='flex gap-5 mt-6'>
        <h2 className='text-white font-face-gm text-[20px] tracking-widest underline underline-offset-[12px] decoration-[#45e92c]'>VIEW PROJECT</h2>
        <h2 className='text-white font-face-gm text-[20px] tracking-widest underline underline-offset-[12px] decoration-[#45e92c]'>VIEW CODE</h2>
      </div>
        
    </div>
  )
}

export default Conten1