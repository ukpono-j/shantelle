import React from 'react'
import EcommerceSidebar from './EcommerceSidebar'
import   "./EcommerceElectronics.css"
import EcommerceCardGenerator from './EcommerceCardGenerator'
const EcommerceElectronics = () => {
  return (
    <div className='flex-electronics'>
        <EcommerceSidebar/>
        <div className='electronics-content'>
            <div className='main-elect'>
                <div className='elect-head'>
                    <div className='elect-title'>Electronics</div>
                    <div className='elect-search'>
                        <input type="text"  placeholder='Search Electronics'/>
                    </div>
                </div>
                {/* <div className='electronics-container'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div> 
                </div> */}
                <EcommerceCardGenerator/>
            </div>
        </div>
    </div>
  )
}

export default EcommerceElectronics