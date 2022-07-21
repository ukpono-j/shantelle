import React from 'react'
import { Link } from 'react-router-dom'
import "./LogIn.css"
// import img1 from "../mainComponents/images/bg-01.jpg"


const LogIn = () => {
    return (
        <div className='log-in'>
           <div className='login-illustrator'>
               {/* <img src={img1} /> */}
           </div>
           <div className='logIn-container'>
                <h3>Log In to continue</h3>
                <div>
                    <p>Username</p>
                    <input type="text" placeholder='Username' />
                </div>
                <div>
                    <p>Email Address</p>
                    <input type="email" placeholder='Email Address' />
                </div>
                <div>
                    <p>Password</p>
                    <input type="password" placeholder='Password' />
                </div>
                <div className='check-area'>
                    <div className='check-1'>
                        <input type="checkbox" className="check" />
                        <div className='remember'>Remember me</div>
                    </div>
                    <div>Forget Password</div>
                </div>
                <div className='logIn-btn'>
                    <Link className='log-link' to="/dashboard">Log In</Link>
                </div>
                <div>
                    <Link to="/SignUp" className='tog'>or sign up</Link>
                </div>
                {/* <div className='login-area'>
                    <Link to="/ecommerce" className='login-area-link'>Home</Link>
                    <Link to="/signUp" className='login-area-link'>Signup</Link>
                </div> */}
            </div>
        </div>
    )
}

export default LogIn