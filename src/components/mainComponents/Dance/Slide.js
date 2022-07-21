import React from 'react'
import "./Slide.css"
import Video1 from "../videos/video1.mp4"
import Video2 from "../videos/video2.mp4"
import Video3 from "../videos/video3.mp4"




function Slide() {
    return (
        <div>
            <div className='slide-carousel'>Slide Carousel</div>
            <div className='tb-txt'>
                <div className='tvv'>
                    <h5>The Result</h5>
                    <h1>
                        REVENUE UP 100% WITHIN 2 YEARS
                    </h1>
                </div>
            </div>
            <div className='plain-img'></div>
            <div className='course-sells'>
                <div className='course-sells-title'>Dance classes</div>
                <div className='courses'>
                    <div className='courses-1'>
                        <div className='visual-content'>
                            <video src={Video1} autoPlay loop muted className='' />
                        </div>
                        <div className='visual-txt'>
                            <h4>Title definition</h4>
                            <p>this is the paragraphy for text about that particular video. More text can be added but only three lines of text...</p>
                            <div className='sell-pay'>Subscribe</div>
                        </div>
                    </div>
                    <div className='courses-1'>
                        <div className='visual-content'>
                            <video src={Video2} autoPlay loop muted className='' />
                        </div>
                        <div className='visual-txt'>
                            <h4>Title definition</h4>
                            <p>this is the paragraphy for text about that particular video. More text can be added but only three lines of text...</p>
                            <div className='sell-pay'>Subscribe</div>
                        </div>
                    </div>
                    <div className='courses-1'>
                        <div className='visual-content'>
                            <video src={Video3} autoPlay loop muted className='' />
                        </div>
                        <div className='visual-txt'>
                            <h4>Title definition</h4>
                            <p>this is the paragraphy for text about that particular video. More text can be added but only three lines of text...</p>
                            <div className='sell-pay'>Subscribe</div>
                        </div>
                    </div>
                </div>
                <div className='course-sell-btn-container'>
                    <div className='course-sell-btn'>View More</div>
                </div>
            </div>
        </div>
    )
}

export default Slide