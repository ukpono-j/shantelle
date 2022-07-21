import React from 'react'
import FooterContainer from '../footer/FooterContainer'
import DanceHero from '../mainComponents/Dance/DanceHero'
import DanceOneLeft from '../mainComponents/Dance/DanceOneLeft'
import DanceOneRight from '../mainComponents/Dance/DanceOneRight'
import Slide from '../mainComponents/Dance/Slide'
import "./Dance.css"
const Dance = () => {
  return (
    <div>
      <DanceHero />
      <div className='dance-one'>
        <DanceOneLeft />
        <DanceOneRight />
      </div>
      {/* -----------------------  */}
      <div className='create-awesome'>
        <div className='create-awe-container'>
          We created the Awesome brand with plenty of flex, developing a suite of secondary logos and icons to support an identity that's distinctly business in the front, party in the back.
        </div>
      </div>
      {/* =============== */}
       
      {/* ================== SLIDE CONTAINER ============= */}
      <Slide/>

      <FooterContainer />
    </div>
  )
}

export default Dance