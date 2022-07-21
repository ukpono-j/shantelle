import React from 'react'
import { Link } from 'react-router-dom'
import "./PhotographyHero.css"


const PhotographyHero = () => {
    return (
        <div className='photo-hero'>
            <div className='photo-hero-container'>
                <div className='photo-hero-text'>Hero Text</div>
                {/* <div className='photo-hero-image'>Hero Image</div> */}
            </div>
            <div className='photo-hero-container1'>
                <div className='photo-hero-image'>About Image</div>
                <div className='photo-hero-text'>About Text</div>
                {/* this is the name of the name man that obeyed and kill the people of the main company.. */}
            </div>
            <div className='portfolio-photo'>
                <div className='portfolio-photo-title-container'>
                    <div className='portfolio-photo-title'>
                        <h3>Latest Works</h3>
                        <div className='portfolio-photo-title-links'>
                            <div>All</div>
                            <div>Fashion</div>
                            <div>Lifestyle</div>
                            <div>nature</div>
                            <div>Portraits</div>
                            <div>Studio</div>
                            <div>Video</div>
                        </div>
                    </div>
                </div>
                <div className='main-portfolio-gallery-container'>
                    <div className='main-portfolio-gallery'></div>
                    <div className='main-portfolio-gallery'></div>
                    <div className='main-portfolio-gallery'></div>
                    <div className='main-portfolio-gallery'></div>
                    <div className='main-portfolio-gallery'></div>
                    <div className='main-portfolio-gallery'></div>
                    <div className='main-portfolio-gallery'></div>
                    <div className='main-portfolio-gallery'></div>
                    <div className='main-portfolio-gallery'></div>
                    <div className='main-portfolio-gallery'></div>
                    <div className='main-portfolio-gallery'></div>
                    <div className='main-portfolio-gallery'></div>
                    <div className='main-portfolio-gallery'></div>
                    <div className='main-portfolio-gallery'></div>
                    <div className='main-portfolio-gallery'></div>
                    <div className='main-portfolio-gallery'></div>
                </div>
                <div className='port-more-container'>
                    <div className='port-more-link'>
                        <Link className='port-l' to="">View More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhotographyHero