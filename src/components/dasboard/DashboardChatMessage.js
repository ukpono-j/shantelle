import React from 'react'
import "./DashboardChatMessage.css"
import DashboardChatReciever from './DashboardChatReciever'
import DashnoardChatSender from './DashnoardChatSender'


const DashboardChatMessage = () => {
  return (
    <div className='chat-main-container'>
        <DashnoardChatSender/>
        <DashboardChatReciever/>
        <DashnoardChatSender/>
        <DashboardChatReciever/>
        <DashnoardChatSender/>
        <DashboardChatReciever/>
        <DashnoardChatSender/>
    </div>
  )
}

export default DashboardChatMessage