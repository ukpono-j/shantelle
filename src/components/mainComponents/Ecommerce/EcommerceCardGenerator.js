import React, { useEffect, useState } from 'react'
import "./EcommerceCardGenerator.css"
import img1 from "../images/22.jpg"
import img2 from "../images/dd.jpg"
import img3 from "../images/product1.jpg"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


let items = ['Nike Space Hippie 04', 'Zoom Freak 2', 'Nike Air Max Zephyr', 'Jordan Delta', 'Air Jordan XXXV PF', 'Nike Waffle Racer Crater ', 'Kyrie 7 EP Sisterhood', 'Nike Air Zoom BB NXT',];
let itemList = [];

items.forEach((item, index) => {
  itemList.push(<div className='ecommerce-gen' key={index}>
    <div className='ecommerce-visual'>
      <img src={img3} />
      {/* <img src={img2 /> */}
      <div className='overlap-1'>
        <div className='overlap-container'>
          <div><FavoriteBorderIcon /></div>
          <div><ShoppingCartIcon /></div>

        </div>
      </div>
    </div>

    <div className='ecommerce-txt'>
      <div className='ecommerce-txt-description'>
        <h5>{item}</h5>
        <div className='eco-flex'>
          <p>Stroke</p>
          <div className='ecommerce-visual-price'>$99.0</div>
        </div>

      </div>

    </div>

    {/* {item} */}

  </div>)
})


function EcommerceCardGenerator() {


  return (

    <div>
      <div className='ecommerce-generator'>
        {/* <div className='ecommerce-gen'>
          <div className='ecommerce-visual'>Visual Content</div>
          <div className='ecommerce-txt'>
            <div className='ecommerce-txt-description'>
              <h5>FACETED Sideboard</h5>
              <p>Stroke</p>
            </div>
            <div className='ecommerce-visual-price'>$999.0</div>
          </div>
        </div> */}

        {/*===================== Duplicate value ============  */}
        {itemList}


      </div>

    </div>
  )
}

export default EcommerceCardGenerator