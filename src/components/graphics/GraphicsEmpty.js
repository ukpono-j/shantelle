import React from 'react'
import "./GraphicsEmpty.css"
import BRAND1 from "../mainComponents/images/b1.png"
import BRAND2 from "../mainComponents/images/b2.png"
import BRAND3 from "../mainComponents/images/b3.png"
import BRAND4 from "../mainComponents/images/b4.png"
import BRAND5 from "../mainComponents/images/b5.png"

const GraphicsEmpty = () => {
  return (
    <div className='graphics-empty'>
      <div className='graphics-work-brands'>
        <div className='graphics-work-brands-bx'>
          <img src={BRAND1} alt="" />
        </div>
        <div className='graphics-work-brands-bx'>
          <img src={BRAND2} alt="" />
        </div>
        <div className='graphics-work-brands-bx'>
          <img src={BRAND3} alt="" />
        </div>
        <div className='graphics-work-brands-bx'>
          <img src={BRAND4} alt="" />
        </div>
        <div className='graphics-work-brands-bx'>
          <img src={BRAND5} alt="" />
        </div>
      </div>
    </div>
  )
}

export default GraphicsEmpty