import React from 'react'
import { Link } from 'react-router-dom'
import "./EcommerceCart.css"
import EcommercePayment from './EcommercePayment'
import EcommerceOrder from "./EcommerceOrder"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



const EcommerceCart = () => {
    return (
        <div className='ecommerce-cart'>
            <div className='cart1'>
                <div className='go-back-container'>
                    <Link to="/ecommerce" className='go-back'><ArrowBackIcon/> <span>Go back</span></Link>
                </div>
                <div className='cart1-container'>
                    <div className='ca1'>
                        <h4>Your Order</h4>
                        <EcommerceOrder/>
                    </div>
                    <div className='ca2'>
                        <h4>Payment</h4>
                        <EcommercePayment/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EcommerceCart