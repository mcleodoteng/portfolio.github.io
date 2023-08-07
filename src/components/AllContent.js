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
        <Conten1 imageName={image1} projectName={'DESIGN PORTFOLIO'} lang1={'HTML'} lang2={'CSS'} link1={'https://github.com/mcleodoteng/portfolio.github.io.git'} link2={'https://github.com/mcleodoteng/portfolio.github.io.git'} />
        <Conten1 imageName={image2} projectName={'COUNTRY APP'} lang1={'HTML'} lang2={'CSS'} link1={'https://mcleodoteng.github.io/countryApp.github.io/'} link2={'https://github.com/mcleodoteng/countryApp.github.io.git'}/>
        <Conten1 imageName={image4} projectName={'TODO WEB APP'} lang1={'HTML'} lang2={'CSS'} lang3={'JAVASCRIPT'}/>
        <Conten1 imageName={image3} projectName={'FYLO WEB APP'} lang1={'HTML'} lang2={'CSS'} lang3={'JAVASCRIPT'} link1={'https://mcleodoteng.github.io/FirstReactProject/'} link2={'https://github.com/mcleodoteng/FirstReactProject.git'}/>
        <Conten1 imageName={image5} projectName={'WHACK A MOLE GAME'} lang1={'HTML'} lang2={'CSS'} lang3={'JAVASCRIPT'} link1={'/'} link2={'https://github.com/mcleodoteng/Whack-a-Mole.github.io.git'}/>
        <Conten1 imageName={image6} projectName={'ART GALLERY SHOWCASE'} lang1={'HTML'} lang2={'CSS'} lang3={'JAVASCRIPT'} />
    </div>
  )
}

export default AllContent