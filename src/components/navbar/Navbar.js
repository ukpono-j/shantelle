import React from 'react';
import "./Navbar.css"
import {
   Link,
} from "react-router-dom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const Navbar = () => {
   return (
      <nav>
         <Link to="/" className='logo'>Logo</Link>
         <ul>
            <li className='nav-item'>
               <Link to="/" className='nav-link'>Home</Link>
            </li>
            <li className='nav-item'>
               <Link to="about" className='nav-link'>About</Link>
            </li>
            <li className='drop'>
               <div className='drop-style'><Link className='nav-link' to="">What Else I Do</Link><Link to="" className='drop-style'><ArrowDropDownIcon /></Link></div>
               {/* <Link to="" >What else i do</Link> */}
               <div className='dropdown'>
                  {/* <li className='nav-item'>
                     <Link to="consultancy" className='nav-link'>Consultancy</Link>
                  </li> */}
                  <li className='nav-item'>
                     <Link to="graphics" className='nav-link'>Graphics Designing</Link>
                  </li>
                  <li className='nav-item'>
                     <Link to="copywriting" className='nav-link'>Copywriting</Link>
                  </li>
                  <li className='nav-item'>
                     <Link to="photography" className='nav-link'>Photography</Link>
                  </li>
                  <li className='nav-item'>
                     <Link to="education" className='nav-link'>Educational Instructor</Link>
                  </li>
                  <li className='nav-item'>
                     <Link to="modelling" className='nav-link'>Modelling</Link>
                  </li>
               </div>
            </li>
            <li className='nav-item'>
               <Link to="ecommerce" className='nav-link'>Ecommerce</Link>
            </li>


            <li className='nav-item'>
               <Link to="contact" className='nav-link'>Contact Us</Link>
            </li>
            <div className='nav-log'>
               <div className="log"><Link to="/login" className='log1'>Log In</Link></div>
               <div className='sign'><Link to="/SignUp" className='sign1'>Sign Up</Link></div>
            </div>

            <li><Link to="/cart" className='chart-link'><ShoppingCartIcon /></Link> </li>
            <li><Link to=""  className='chart-link'><AccountCircleIcon /></Link>
              {/* <div className='profile-drop'>
                 <li><Link to="" className='profile-drop-link'>Home</Link></li>
                 <li><Link to="" className='profile-drop-link'>Home</Link></li>
                 <li><Link to="" className='profile-drop-link'>Home</Link></li>
                 <li><Link to="" className='profile-drop-link'>Home</Link></li>
              </div> */}
            </li>

         </ul>

  
      </nav>
   )
}

export default Navbar