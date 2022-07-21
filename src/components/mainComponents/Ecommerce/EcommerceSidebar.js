import React from 'react'
import "./EcommerceSidebar.css"
import {
  Link
} from "react-router-dom";
// import HomeIcon from '@mui/icons-material/Home';


const EcommerceSidebar = () => {
  return (
    <div className='ecommerce-sidebar'>
      <ul>
        <li>
          <Link to="/ecommerce" className='ecommerce-links'>Home</Link>
        </li>
        <li>
          <Link to="/ecommerce/electronics" className='ecommerce-links'>Electronics</Link>
        </li>
        <li>
          <Link to="" className='ecommerce-links'>Women's Fashion</Link>
        </li>
        <li>
          <Link to="" className='ecommerce-links'>Male's Fashion</Link>
        </li>
        <li>
          <Link to="" className='ecommerce-links'>  Boy's Fashion</Link>
        </li>
        <li>
          <Link to="" className='ecommerce-links'>Girl's Fashion</Link>
        </li>
        <li>
          <Link to="" className='ecommerce-links'>Home and offices</Link>
        </li>
        <li>
          <Link to="" className='ecommerce-links'>Baby Product</Link>
        </li>

        <li>
          <Link to="" className='ecommerce-links'>Home  and Kitchen</Link>
        </li>
        <li>
          <Link to="" className='ecommerce-links'>Luggage</Link>
        </li>
        <li>
          <Link to="" className='ecommerce-links'>Stock Availability dropdown</Link>
        </li>
        <hr />
        <li><Link to="" className='ecommerce-links'>Help & Settings</Link></li>
        <li>
          <Link to="" className='ecommerce-links'>Your Account</Link>
        </li>
        <li>
          <Link to="" className='ecommerce-links'>Customer Service</Link>
        </li>
        <li>
          <Link to="/logIn" className='ecommerce-links'>Sign In </Link>
        </li>
      </ul>

    </div>


  )
}

export default EcommerceSidebar