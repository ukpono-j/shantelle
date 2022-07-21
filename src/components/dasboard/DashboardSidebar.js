import React from 'react'
import { Link } from 'react-router-dom'
import "./DashboardSidebar.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import ChatIcon from '@mui/icons-material/Chat';
import TimelineIcon from '@mui/icons-material/Timeline';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ClassIcon from '@mui/icons-material/Class';




const DashboardSidebar = () => {
    return (
        <div className='dashboard-sidebar'>
            <div>
                {/* <div className='app-scd'>
                    Application
                </div> */}
                <li>
                    <Link to="/dashboard" className="dashboard-sidebar-link"><TimelineIcon className='dash-side-icon' /><span>Dashboard</span></Link>
                </li>
                <li>
                    <Link to="" className="dashboard-sidebar-link"><ClassIcon className='dash-side-icon'/><span>Catalog</span></Link>
                </li>
                <li>
                    <Link to="/dashboard/customers" className="dashboard-sidebar-link"><PermIdentityIcon className='dash-side-icon'/><span>Customers</span></Link>
                </li>
                <li>
                    <Link to="" className="dashboard-sidebar-link"><ShoppingCartIcon className='dash-side-icon'/><span>Orders</span></Link>
                </li>
                <li>
                    <Link to="" className="dashboard-sidebar-link"><FavoriteBorderIcon className='dash-side-icon'/><span>Marketing</span></Link>
                </li>
                <li>
                    <Link to="" className="dashboard-sidebar-link"><ForwardToInboxIcon className='dash-side-icon'/><span>Inbox</span></Link>
                </li>
                <li>
                    <Link to="/dashboard/chat" className="dashboard-sidebar-link"><ChatIcon className='dash-side-icon'/><span>Chat</span></Link>
                </li>
                <li>
                    <Link to="/logIn" className="dashboard-sidebar-link"><ChatIcon className='dash-side-icon'/><span>Login</span></Link>
                </li>
                <li>
                    <Link to="/signUp" className="dashboard-sidebar-link"><ChatIcon className='dash-side-icon'/><span>Registers</span></Link>
                </li>
                <li>
                    <Link to="" className="dashboard-sidebar-link"><DriveFileMoveIcon className='dash-side-icon'/><span>File Manager</span></Link>
                </li>
                <li>
                    <Link to="" className="dashboard-sidebar-link"><CalendarTodayIcon className='dash-side-icon'/><span>Calender</span></Link>
                </li>
                <li>
                    <Link to="" className="dashboard-sidebar-link"><EqualizerIcon className='dash-side-icon'/><span>Analytics</span></Link>
                </li>
            </div>
            <div>
                <div>
                    <li>
                        <Link to="" className="dashboard-sidebar-link"><SettingsIcon /><span>Setting</span></Link>
                    </li>
                </div>
                <div>
                    <li>
                        <Link to="/logIn" className="dashboard-sidebar-link"><LogoutIcon/><span>Log Out</span></Link>
                    </li>
                </div>
            </div>

        </div>
    )
}

export default DashboardSidebar