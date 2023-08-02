import React from 'react'
import Conten1 from './Conten1'
import image1 from '../assets/1.jpg'
import image2 from '../assets/2.jpg'
import image3 from '../assets/3.jpg'
import image4 from '../assets/4.jpg'
import image5 from '../assets/5.jpg'
import image6 from '../assets/6.jpg'

const AllContent = () => {
  return (
    <div className='md:grid md:grid-cols-2'>
        <Conten1 imageName={image1} projectName={'DESIGN PORTFOLIO'} lang1={'HTML'} lang2={'CSS'}/>
        <Conten1 imageName={image2} projectName={'E-LEARNING LANDING PAGE'} lang1={'HTML'} lang2={'CSS'}/>
        <Conten1 imageName={image3} projectName={'TODO WEB APP'} lang1={'HTML'} lang2={'CSS'} lang3={'JAVASCRIPT'}/>
        <Conten1 imageName={image4} projectName={'ENTERTAINMENT WEB APP'} lang1={'HTML'} lang2={'CSS'} lang3={'JAVASCRIPT'}/>
        <Conten1 imageName={image5} projectName={'MEMORY GAME'} lang1={'HTML'} lang2={'CSS'} lang3={'JAVASCRIPT'}/>
        <Conten1 imageName={image6} projectName={'ART GALLERY SHOWCASE'} lang1={'HTML'} lang2={'CSS'} lang3={'JAVASCRIPT'} />
    </div>
  )
}

export default AllContent