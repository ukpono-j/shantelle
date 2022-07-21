import React from 'react'
import "./GraphicsHero.css"
// import Video1 from "../mainComponents/videos/video5.mp4"


const GraphicsHero = () => {
    return (
        <div className='graphics-hero'>
            <div className='graphics-container'>
                <div className='overlay'></div>
                <video src="https://ff-portfolio.ams3.cdn.digitaloceanspaces.com/storage/88e42005-83f2-4332-abf9-42c26a8fcdff.mp4" autoPlay loop muted className='dance-hero-v1' />
                {/* <video src={Video1} autoPlay loop muted className='graphics-hero-v1' /> */}
                <div className='Grapics-content'>
                    <div className='Graphics-content-container'>
                        <h1>Welcome to the official website of my online dance school</h1>
                        <div className="">
                            <p>Advance at your own pace whatever your level, the programs are adapted to all profiles.. Accusamus aliquid, unde veniam itaque 
                                cumque </p>
                        </div>
                        <div>
                            <div>
                                Discover
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GraphicsHero 