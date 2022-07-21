import React from 'react'
import "./GraphicsAbout.css"
import about1 from "../mainComponents/images/h2.jpg"
import about2 from "../mainComponents/images/h3.png"
import { Link } from 'react-router-dom'


const GraphicsAbout = () => {
    return (
        <div className='graphics-about'>
            <div className='graphics-about-container'>
                <div className='graphics-about-left-container'>
                    <div className='graphic-about-left'>
                        <img src={about1} alt="" />
                    </div>
                </div>
                <div className='graphics-about-right-container'>
                    <div className='graphic-about-right'>
                        <div className='graphics-inner'>
                            <h1>Heading About</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero temporibus nulla omnis quisquam nesciunt corporis vitae?
                                Cumque rerum accusamus, velit ratione harum, cupiditate et provident, voluptatum odit doloribus fuga quisquam?
                                Cumque rerum accusamus, velit ratione harum, cupiditate et provident, voluptatum odit doloribus fuga quisquam?
                            </p>
                            <div className='graphics-about-btn'>
                                <Link to="" className="graphics-discover">Discover More</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ======================= Opposite ===================== */}
                <div className='graphics-about-opposite-container'>
                    <div className='graphic-about-opposite'>
                        <img src={about2} alt="" />
                    </div>
                </div>
                <div className='graphics-about-opposite-1-container'>
                    <div className='graphic-about-opposite-1'>
                        <div className='graphics-inner txt-right'>
                            <h1>Heading About</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero temporibus nulla omnis quisquam nesciunt corporis vitae?
                                Cumque rerum accusamus, velit ratione harum, cupiditate et provident, voluptatum odit doloribus fuga quisquam?
                                Cumque rerum accusamus, velit ratione harum, cupiditate et provident, voluptatum odit doloribus fuga quisquam?
                            </p>
                            <div className='graphics-about-btn btn-right'>
                                <Link to="" className="graphics-discover">Discover More</Link>
                            </div>
                        </div>
                    </div>
                </div>


                {/* =========================== SECOND  PART =========================== */}
                <div className='graphics-about-left-container'>
                    <div className='graphic-about-left'>
                        <img src={about1} alt="" />
                    </div>
                </div>
                <div className='graphics-about-right-container'>
                    <div className='graphic-about-right'>
                        <div className='graphics-inner '>
                            <h1>Heading About</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero temporibus nulla omnis quisquam nesciunt corporis vitae?
                                Cumque rerum accusamus, velit ratione harum, cupiditate et provident, voluptatum odit doloribus fuga quisquam?
                                Cumque rerum accusamus, velit ratione harum, cupiditate et provident, voluptatum odit doloribus fuga quisquam?
                            </p>
                            <div className='graphics-about-btn'>
                                <Link to="" className="graphics-discover">Discover More</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default GraphicsAbout