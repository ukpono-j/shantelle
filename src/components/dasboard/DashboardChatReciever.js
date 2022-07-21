import React from 'react'
import "./DashboardChatReciever.css"
import Avatar2 from "../mainComponents/images/reciever.jpg"


const DashboardChatReciever = () => {
  return (
    <div>
        <div className='chat-reciever'>
            <div className='receiver-message'>
            <div className='reciever-txt'>Hey, i'm doing good. how about you...</div>
                <div className='reciever-image'>
                    <img  src={Avatar2} alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardChatReciever