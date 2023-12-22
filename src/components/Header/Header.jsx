// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
   return (
      <header>
        <nav className='nav-container'>
            <div className='nav-logo'>
               <img src={logo} alt="" />
            </div>
            <div className='nav-menu'>
               <a href="">Shop</a>
               <a href="">Order</a>
               <a href="">Inventory</a>
               <a href="">Login</a>
            </div>
        </nav>
      </header>
   );
};

export default Header;