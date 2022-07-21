import React from 'react'
import { Link } from 'react-router-dom'
import "./SignUp.css"


const SignUp = () => {
    return (
        <div className='signUp'>
            <div className='signUp-container'>
                <div className='signUp-box'>
                    <div className='signUp-img'></div>
                    <div className='signUp-form'>
                            <h3>Sign Up to continue</h3>
                            <div>
                                <p>First Name</p>
                                <input type="text" placeholder='First Name'  className='signUp-input'/>
                            </div>
                            <div>
                                <p>Last Name</p>
                                <input type="texr" placeholder='Last Name'  className='signUp-input'/>
                            </div>
                            <div>
                                <p>Email Address</p>
                                <input type="email" placeholder='Email Address'  className='signUp-input'/>
                            </div>
                            <div>
                                <p>Password</p>
                                <input type="password" placeholder='Password'  className='signUp-input'/>
                            </div>
                            <div>
                                <p>Confirm Password</p>
                                <input type="password" placeholder='Password'  className='signUp-input'/>
                            </div>
                            <div className='signup-btn'>
                                <Link className='signup-link' to="/login">Sign Up</Link>
                            </div>
                            <div>
                                <Link to="/login" className='tog'>or log in</Link>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp