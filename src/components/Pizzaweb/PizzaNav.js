import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/pizza/logo.png'
import '../../styles/pizzaCss/PizzaNav.css'

function PizzaNav() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = (event) => {
        
        console.log("HELLOO");
        let clicked = event.currentTarget.id
        let allNav = document.querySelectorAll('.pizza-nav-links'),i
        for(i=0;i<allNav.length;i++){
            allNav[i].classList.remove('active')
        }
        
        if(clicked !== 'pizza-logo'){
            document.getElementById(clicked).classList.add('active')
        }
        
        setClick(false);
    }


  return (
    <div className='pizza-nav'>
<div className="pizza-navbar-container">

<div className='pizza-navbar-logo'>
    <Link to='/pizzaweb' id='pizza-logo'>
        <img src={logo} />
    </Link>
</div>

  <div className='pizza-menu-icon' onClick={handleClick}>
    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
  </div>
  <div className={click ? 'pizza-nav-menu active' : 'pizza-nav-menu'}>
      <Link
        to='/pizzaweb/menu'
        className='pizza-nav-links'
        onClick={closeMobileMenu}
        id='pizza-menu'
      >
        Menu
      </Link>
      <Link
        to='/pizzaweb/about'
        className='pizza-nav-links'
        onClick={closeMobileMenu}
        id='pizza-about'
      >
        About
      </Link>
      <Link
        to='/pizzaweb/cart'
        className='pizza-nav-links'
        onClick={closeMobileMenu}
        id='pizza-cart'
      >
        <i className="fa-sharp fa-solid fa-cart-shopping"></i> Cart
      </Link>
  </div>
</div>
    </div>
  )
}

export default PizzaNav