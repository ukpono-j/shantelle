import React from 'react'
import "./DanceHero.css"
// import ReactPlayer from 'react-player/lazy'
import ReactPlayer from 'react-player'
import Video1 from "../videos/video1.mp4"
import { Link } from 'react-router-dom'

const DanceHero = () => {
    return (

        <div className='dance-hero'>
            {/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
         playing={true} 
         loop={true} 
         controls={false}  height="100vh" width="100%"/> */}
            <div className='overlay'></div>
            <video src={Video1} autoPlay loop muted className='dance-hero-v1' />
            <div className='content'>
                <div className='content-container'>
                    <h1>Welcome to the official website of my online dance school</h1>
                    <div className="dance-hero-txt">
                    <p>Advance at your own pace whatever your level, the programs are adapted to all profiles.. Accusamus aliquid, unde veniam itaque
                        esse
                        cumque </p>
                    </div>
                    <div className='dance-hero-btn'>
                        <div className='dance-hero-b'>
                            Discover
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DanceHero