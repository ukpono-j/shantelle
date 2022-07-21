import React from 'react'
import "./EcommercePayment.css"
import SellIcon from '@mui/icons-material/Sell';


// let payMent = [20, 30, 30, 40, 50,]

const EcommercePayment = () => {
    return (
        <div className='pay-container'>
            <div className='guest'>Guest checkout</div>
            <div className='guest-container'>
                <div className='guest-con1'>
                    <div className='guest1'>
                        <h5>Transaction</h5>
                        <div className='coup'><input type="text" placeholder='COUPON CODE' /></div>
                    </div>
                    <div className='guest2'>
                        <h5>KFKFNM5MK5R5</h5>
                        <button>Apply</button>
                    </div>
                </div>
                <div className='order-summary'>
                    <div>Order Summary</div>
                    <div>£99.99</div>
                </div>
                <div className='order-summary'>
                    <div>Additional Service</div>
                    <div>£10</div>
                </div>
                <div className='order-summary'>
                    <div>Total Amount</div>
                    <div>£109.00</div>
                </div>

                <div>
                    <button className='deliver-btn'>FREE DELIVERY INCLUDED <SellIcon className='sellicon'/></button>
                </div>
            </div>
        </div>
    )
}

export default EcommercePayment