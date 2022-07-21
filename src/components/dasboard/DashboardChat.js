import React from 'react'
import DashboardSidebar from './DashboardSidebar'
import "./DashboardChat.css"
import { Link } from 'react-router-dom'
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar1 from "../mainComponents/images/1 (1).jpg"
import DashboardChatMessage from './DashboardChatMessage';
import DashboardCustomerAvatar from './DashboardCustomerAvatar';
import SendIcon from '@mui/icons-material/Send';


const DashboardChat = () => {
    return (
        <div className='dashboard-chat'>
            <div className='dashboard-chat-container'>
                <div>
                    <DashboardSidebar />
                </div>
                <div className='dashboard-chat-body'>
                    <h4>Chat</h4>
                    <div>
                        <div><Link to="/dashboard">Dashboard</Link></div>
                    </div>

                    {/* ============== Chat box ========== */}
                    <div className='dashboard-chat-bx'> 
                        <div className='dashboard-chat-avatars'>
                            <DashboardCustomerAvatar />
                        </div>
                        <div className='dashboard-chat-area'>
                            <div className='chat-title'>
                                <div className='chat-id'>
                                    <div className='chat-id-avatar'>
                                        <img src={Avatar1} />
                                    </div>
                                    <div className='chat-id-avatar-txt'>
                                        <h5>Deja Brady</h5>
                                        <p>Online</p>
                                    </div>
                                </div>
                                <div className='chat-visual'>
                                    <CallIcon />
                                    <VideocamIcon />
                                    <MoreVertIcon />
                                </div>
                            </div>
                            <div className='chat-room'>
                                <div className='chat-room-message'>
                                    <div className='message-cc'>
                                        <DashboardChatMessage />
                                    </div>
                                    <div className='messaage-area'>
                                        <div className='message-input'>
                                            <textarea type="text" placeholder='Type Message' />
                                        </div>
                                        <div className='message-btn'>
                                            <SendIcon />
                                        </div>
                                    </div>
                                </div>
                                <div className='chat-room-profile'>
                                    Customer Details
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardChat