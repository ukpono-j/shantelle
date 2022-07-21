import React from 'react'
import DashboardSidebar from './DashboardSidebar'
import "./DashboardUsers.css"
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';



const DashboardUsers = () => {
  return (
    <div className='dashboardUser'>
      <div>
        <DashboardSidebar />
      </div>
      <div className='dashboard-customer'>
        <div className='dashboard-user-title'>
          <h4>Customers</h4>
          <div className='add-customer'>Add Customer</div>
        </div>
        <div className='dashboardUserForm'>
          <div className='addUser-search-area'>
            <div className='add-search-box'>
               <input  type="text" placeholder='Search for customer'/>
               <div className='add-search-icon'><SearchIcon/></div>
            </div>
            <div><FilterListIcon/></div>
          </div>
          <table>
            <tr>
              <th className='checkk'><input type="checkbox" /></th>
              <th>Name</th>
              <th>Company</th>
              <th>Role</th>
              <th>Verified</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            <tr>
              <td className='checkk'><input type="checkbox" /></td>
              <td>Ashley Mayert MD</td>
              <td>Conn and Sons</td>
              <td>Front End Developer</td>
              <td>Yes</td>
              <td>Banned</td>
              <td className='ed-de'>
                <div>Edit</div>
                <div>Delete</div>
              </td>
            </tr>
            <tr>
              <td className='checkk'><input type="checkbox" /></td>
              <td>Beverly Grant</td>
              <td>Rowe, DuBuque and Thompson</td>
              <td>Front End Developer</td>
              <td>Yes</td>
              <td>Banned</td>
              <td className='ed-de'>
                <div>Edit</div>
                <div>Delete</div>
              </td>
            </tr>
            <tr>
              <td className='checkk'><input type="checkbox" /></td>
              <td>Christopher Thompson</td>
              <td>Bernhard, Mertz and Donnelly</td>
              <td>Front End Developer</td>
              <td>Yes</td>
              <td>Banned</td>
              <td className='ed-de'>
                <div>Edit</div>
                <div>Delete</div>
              </td>
            </tr>
            <tr>
              <td className='checkk'><input type="checkbox" /></td>
              <td>Clara Beier</td>
              <td>Brekke, Gottlieb and Prosacco</td>
              <td>Front End Developer</td>
              <td>Yes</td>
              <td>Banned</td>
              <td className='ed-de'>
                <div>Edit</div>
                <div>Delete</div>
              </td>
            </tr>
            <tr>
              <td className='checkk'><input type="checkbox" /></td>
              <td>Darrin Larson</td>
              <td>Batz and Sons</td>
              <td>Front End Developer</td>
              <td>Yes</td>
              <td>Banned</td>
              <td className='ed-de'>
                <div>Edit</div>
                <div>Delete</div>
              </td>
            </tr>



          </table>
        </div>
      </div>
    </div>
  )
}

export default DashboardUsers