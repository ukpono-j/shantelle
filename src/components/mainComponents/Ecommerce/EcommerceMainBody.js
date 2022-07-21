import React from 'react'
import EcommerceCardGenerator from './EcommerceCardGenerator'
// ============ css
import "./EcommerceMainBody.css"
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
   Link,
} from "react-router-dom";
const EcommerceMainBody = () => {
  return (
    <div className='ecommerce-body'>
      <div className='cart'>
        <div>
          <h1>Welcome to Loading Global</h1>
        </div>
        <div className='cart-container'>
          <Link to="/cart">
            <div className='cart-circle'><ShoppingCartIcon className='cart-icon' /></div>
          </Link>
          <div className='fds'>
            <h4>My Cart</h4>
            <p>3 items</p>
          </div>

        </div>
      </div>
      <div className='catalog-search-filter'>
        <div className='catalog-search'>
          <input type="text" placeholder='Search here ' />
          <div className='search-icon'><SearchIcon /></div>
        </div>
        <div className='catalog-filter'>
          <div className='filter-one'><FilterListIcon /></div>
          <div className='filter-topics'>
            <select>
              <option>Popular</option>
              <option>Electronics </option>
              <option>Women's Fashion</option>
              <option>man's Fashion</option>
              <option>Boy's Fashion</option>
              <option>Girl's Fashion</option>
              <option>Home and Offices</option>
              <option>Baby Product</option>
              <option>Home and Kitchen</option>
              <option>Luggages</option>
            </select>
          </div>
        </div>
      </div>
      <div className='search-result'>
        <div><p className='search-result-txt'>Television</p><CloseIcon className='close-in' /></div>
        <div><p className='search-result-txt'>Best man clothes</p><CloseIcon className='close-in' /></div>
      </div>
      <EcommerceCardGenerator />
    </div>
  )
}

export default EcommerceMainBody
