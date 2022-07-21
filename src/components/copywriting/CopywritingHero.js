import React from 'react'
import "./CopywritingHero.css"
import copy1 from "../mainComponents/images/copy1.jpg"
import copy2 from "../mainComponents/images/copy2.jpg"
import { Link } from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

function CopywritingHero() {
  return (
    <div className='copywriting-hero'>
      <div className='copywriting-hero-container'>
        <div className='copy-hero-1'>
          <h1>
          Writing for your success.
          </h1>
          <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullam corper mattis, pulvinar dapibus leo.</p>
          <div className='copy-get-container'>
            <div className='copywriting-get-started'><Link to="" className='copywriting-get-started-link'>Get Started <ArrowRightAltIcon className='arrow-head'/> </Link></div>
            <div className='copywrite-contact'><Link to="" className='copy-contact'>Contact Us <PhoneEnabledIcon className='arrow-head'/></Link> </div>
          </div>
        </div>
        <div className='copy-hero-2'>
          <div className='copy-hero-2-container'>
            <img  src={copy1} alt="" />
          </div>
          <div className='copy-hero-3-container'>
            <img  src={copy2} alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CopywritingHero