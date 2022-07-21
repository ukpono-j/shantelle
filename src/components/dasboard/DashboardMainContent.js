import React from 'react'
import DashboardAnalysis from '../dashboardComponents/DashboardAnalysis'
import "./DashboardMainContent.css"

const DashboardMainContent = () => {
  return (
    <div className='dashboard-content'>
        <DashboardAnalysis/>
         <div className='Dashboard-footer'>
              <div>Stroyka Admin — eCommerce Dashboard Template © 2021</div>
              <div>Powered by HTML — Design by Kos</div>
         </div>
    </div>
  )
}

export default DashboardMainContent