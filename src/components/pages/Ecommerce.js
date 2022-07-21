import React from 'react'
import EcommerceMainBody from '../mainComponents/Ecommerce/EcommerceMainBody'
import EcommerceSidebar from '../mainComponents/Ecommerce/EcommerceSidebar'
import "./Ecommerce.css"

const Ecommerce = () => {
  return (
    <div className='ecommerce'>
      <div className='ecommerce-one'>
           <EcommerceSidebar/>
           <EcommerceMainBody/>
      </div>
    </div>
  )
}

export default Ecommerce