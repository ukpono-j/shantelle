import React from 'react'
import "./DashnoardChatSender.css"
import Avatar1 from "../mainComponents/images/1 (1).jpg"



const DashnoardChatSender = () => {
  return (
    <div>
        <div className='chat-sender'>
            <div className='sender-message'>
                <div className='sender-image'><img  src={Avatar1} alt=""/></div>
                <div className='sender-txt'>Hey, how are you doing.</div>
            </div>
        </div>
    </div>
  )
}

export default DashnoardChatSender