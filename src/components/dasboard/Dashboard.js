import React from 'react'
import "./Dashboard.css"
import DashboardMainContent from './DashboardMainContent'
import DashboardSidebar from './DashboardSidebar'

const Dashboard = () => {
  return (
    <div className="dashboard-gen">
      <div className='dashboard-container'>
        <DashboardSidebar/>
        <DashboardMainContent/>
      </div>
    </div>
  )
}

export default Dashboard