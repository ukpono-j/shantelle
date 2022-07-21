import React from 'react'
import FooterContainer from '../footer/FooterContainer'
import GraphicsAbout from '../graphics/GraphicsAbout'
import GraphicsEmpty from '../graphics/GraphicsEmpty'
import GraphicsHero from '../graphics/GraphicsHero'
import TestimonialGraphics from "../mainComponents/images/about_photo_1.jpg"
import "./GraphicsMain.css"
const Graphics = () => {
  return (
    <div>
      <GraphicsHero />
      <GraphicsAbout />
      <GraphicsEmpty />
      <div className='nnd'>
        <div className='nnd-container'>
          <div className='circle-testimonal-circle'>
            <img src={TestimonialGraphics}  alt=""/>
          </div>
          <h5>Edidiong Umoh</h5>
          <p>
            We only do one fancy trick, and it’s just a little bit of math to magnify the difference between scores, which we then use to set the font-size of each word.
            it’s just a little bit of math to magnify the difference between scores
          </p>
          <div className='nnd-dot'>
            <div className='nnd-dots active-dots'></div>
            <div className='nnd-dots'></div>
            <div className='nnd-dots'></div>
          </div>
        </div>
      </div>
      <FooterContainer />


    </div>
  )
}

export default Graphics