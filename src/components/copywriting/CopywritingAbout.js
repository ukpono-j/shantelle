import React from 'react'
import "./CopywritingAbout.css"
import AboutImage from "../mainComponents/images/copy2.jpg"
import { Link } from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const CopywritingAbout = () => {
    return (
        <div className='copywriting-about'>
            <div className='copyywriting-about-container'>
                <div className='copy-about-con'>
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Etiam ullamcorper risus nec porttitor rhoncus. Etiam dolor arcu, vulputate id lobortis a, fringilla vitae nisi. Curabitur molestie.</p>
                    <p>Pellentesque bibendum efficitur mi id tempor. Vivamus vulputate tincidunt sapien id tincidunt. Donec bibendum.</p>

                    <div className='copywriting-about-btn'>
                        <Link to="" className='copywriting-about-btn-link'><span>Get Quote</span> <ArrowRightAltIcon/></Link>
                    </div>
                </div>
                <div>
                    <div className='about-image'>
                        <img  src={AboutImage} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CopywritingAbout