import React, { useState } from 'react';
import './navbar.css'; // Import the custom CSS file
import logo from '../../assets/logo.svg';
import search from '../../assets/search.svg';
import heart from '../../assets/heart.png';
import gift from '../../assets/giftbox_1139931.png';
import cart from '../../assets/shopping-cart.png';
import menu from '../../assets/hamburger.png';

const Tooltip = ({ categories, visible, onClose }) => {
  if (!visible) return null;

  return (
    <div className="tooltip-container">
      <ul className="tooltip-list">
        {categories.map((category, index) => (
          <li key={index} className="tooltip-item" onClick={onClose}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};




const Header = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const categories = [
    "Jewelry & Accessories",
    "Clothing & Shoes",
    "Home & Living",
    "Wedding & Party",
    "Toys & Entertainment",
    "Art & Collectibles",
    "Craft Supplies",
    "Gifts & Gift Cards"
  ];

  const toggleTooltip = () => {
    setTooltipVisible(!tooltipVisible);
  };

  return (
    <header className="header-container">
<a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
    <h3>Sunshine Bazzar</h3>
</a>



      <div style={{ position: 'relative' }}>
        <div
          style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer' }}
          id='header-category-div'
          onClick={toggleTooltip}
        >
          <img src={menu} alt="Menu Icon" />
          <span>Categories</span>
        </div>
        <Tooltip categories={categories} visible={tooltipVisible} onClose={() => setTooltipVisible(false)}  id='header-category-tooltip' />
      </div>

      <div id='header-search'>
        <div id='header-search-bar'>
          <input type="text" placeholder="Search..." />
        </div>

        <div id='header-search-button'>
          <img src={search} alt="Search Icon" />
        </div>
      </div>

      <div id='header-icons'>
        <div>
          <a href="/login">Sign in</a>
        </div>
        <div id='header-fav-icon' className='header-icon'>
          <img src={heart} alt="Favorites Icon" />
          <span className="tooltip2">Favourites</span>
        </div>
        <div id='header-gift-icon' className='header-icon'>
          <img src={gift} alt="Gift Icon" />
          <span className="tooltip2">Gifts</span>
        </div>
        <div id='header-cart-icon' className='header-icon'>
          <img src={cart} alt="Cart Icon" />
          <span className="tooltip2" >Cart</span>
        </div>
      </div>
    </header>
    
  );
};

export default Header;
