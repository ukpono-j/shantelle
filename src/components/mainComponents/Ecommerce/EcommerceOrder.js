import React from 'react'
import "./EcommerceOrder.css"
import order1 from "../images/h4.png"

const EcommerceOrder = () => {
    return (
        <div className='order'>
            <div className='order-component'>
                <div className='order-props'>
                    <div className='order-visual'>
                        <img src={order1} alt="" />
                    </div>
                    <div className='order-visual-description'>
                        <h4>Black Jacket</h4>
                        <h5>Color: <span>Orange</span></h5>
                        <h5>Size: <span>L</span></h5>
                    </div>
                </div>
                <div className='order-addInformation'>
                    <div className='order-price'><span>  £30.00</span><span></span></div>
                    <div className='quantity'>
                        <div className='qea'>
                            <div><span>quantity: </span></div>
                            <div>
                                <select className='quality-check'>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                        <div className='size-container'>L</div>
                    </div>
                </div>
            </div>
            <div className='order-component'>
                <div className='order-props'>
                    <div className='order-visual'>
                        <img src={order1} alt=""/>
                    </div>
                    <div className='order-visual-description'>
                        <h4>Black Jacket</h4>
                        <h5>Color: <span>Orange</span></h5>
                        <h5>Size: <span>L</span></h5>
                    </div>
                </div>
                <div className='order-addInformation'>
                    <div className='order-price'><span>  £30.00</span><span></span></div>
                    <div className='quantity'>
                        <div className='qea'>
                            <div><span>quantity: </span></div>
                            <div>
                                <select className='quality-check'>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                        <div className='size-container'>L</div>
                    </div>
                </div>
            </div>
            <div className='order-component'>
                <div className='order-props'>
                    <div className='order-visual'>
                        <img src={order1} alt=""/>
                    </div>
                    <div className='order-visual-description'>
                        <h4>Black Jacket</h4>
                        <h5>Color: <span>Orange</span></h5>
                        <h5>Size: <span>L</span></h5>
                    </div>
                </div>
                <div className='order-addInformation'>
                    <div className='order-price'><span>  £30.00</span><span></span></div>
                    <div className='quantity'>
                        <div className='qea'>
                            <div><span>quantity: </span></div>
                            <div>
                                <select className='quality-check'>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                        <div className='size-container'>L</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EcommerceOrder