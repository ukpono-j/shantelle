import React from 'react'
import { Link } from 'react-router-dom'
import CopywritingAbout from '../copywriting/CopywritingAbout'
import CopywritingHero from '../copywriting/CopywritingHero'
import "./Copywriting.css"


const Copywriting = () => {
  return (
    <div>

      <CopywritingHero />
      <CopywritingAbout />

      <div className='copy-content-1'>
        <div className='copy-content-1-txt1-container'>
          <div className='copy-content-1-txt1'>
            Copy that tells, sells & compels.
          </div>
        </div>
        <div className='copy-content-main1'>
          <div>
            <h1>Headings</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero temporibus nulla omnis quisquam nesciunt corporis vitae?
              Cumque rerum accusamus, velit ratione harum, cupiditate et provident, voluptatum odit doloribus fuga quisquam?
            </p>
          </div>
          <div>
            <h1>Headings</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero temporibus nulla omnis quisquam nesciunt corporis vitae?
              Cumque rerum accusamus, velit ratione harum, cupiditate et provident, voluptatum odit doloribus fuga quisquam?
            </p>
          </div>
          <div>
            <h1>Headings</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero temporibus nulla omnis quisquam nesciunt corporis vitae?
              Cumque rerum accusamus, velit ratione harum, cupiditate et provident, voluptatum odit doloribus fuga quisquam?
            </p>
          </div>
        </div>
        <div className='copy-content-1-btn'>
          <Link to="" className="copy-link-1">Get Started </Link>
        </div>
      </div>

      <div className='forward'>
        forward
      </div>
    </div>
  )
}

export default Copywriting