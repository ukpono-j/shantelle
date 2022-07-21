import React from 'react'
import { Link } from 'react-router-dom'
import "./FooterContainer.css"


const FooterContainer = () => {
    return (
        <div>
            <div className='footer'>
                <div className='footer-container'>  
                    <div className='footer-container1'>
                        <div className='log-foot'>
                            <h4>Logo</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Itaque aliquid voluptatibus harum eligendi mollitia minima sunt corporis.
                                Magni, repellendus consequatur..</p>
                                <div className='new-letter'>
                                    <input type="text"  placeholder='Enter your e-mail address'/>
                                    <div className='new-submit'>Submit</div>
                                </div> 
                        </div>
                        <div className='footer-ul'>
                            <li>
                                <Link to="/" className='footer-link'>Choreography</Link>
                            </li>
                            <li>
                                <Link to="about" className='footer-link'>About</Link>
                            </li>
                            <li>
                                <Link to="graphics" className='footer-link'>Graphics</Link>
                            </li>
                            <li>
                                <Link to="modelling" className='footer-link'>Modelling</Link>
                            </li>
                            <li>
                                <Link to="consultancy" className='footer-link'>Consultancy</Link>
                            </li>

                        </div>
                        <div className='footer-ul'>
                            <li>
                                <Link to="copywriting" className='footer-link'>Copywriting</Link>
                            </li>
                            <li>
                                <Link to="photography" className='footer-link'>Photography</Link>
                            </li>
                            <li>
                                <Link to="educationInstrument" className='footer-link'>Educational Instructor</Link>
                            </li>
                            <li>
                                <Link to="contact" className='footer-link'>Contact Us</Link>
                            </li>
                        </div>

                    </div>
                    <div className='copyright'>All rights reserved Femme Fatale Studio 2021</div>
                </div>
            </div>
        </div>
    )
}

export default FooterContainer