import React from 'react'
import { Link } from 'react-router-dom'
import pizzaImage from '../../assets/pizza/pizza2.jpeg'
import '../../styles/pizzaCss/Pizzaweb.css'
import { useNavigate } from 'react-router-dom'
import PizzaNav from './PizzaNav'

function Pizzaweb() {

  const navigate = useNavigate()

  function goToMenu(){
      navigate('/pizzaweb/menu')
  }

  return (<>
    <PizzaNav/>
    <div className='pizza-home' style={{backgroundImage:`url(${pizzaImage})`}}>
      <div className='headerContainer' >
          <h1>GP's Pizzeria</h1>
          <p>Pizza To Fit Any Taste</p>
          <button onClick={goToMenu}>ORDER NOW</button>

      </div>
          {/* <div className='pizza-links'>
            <Link to='/pizzaweb/about'>About Us</Link>
            <span>|</span>
            <Link to='/pizzaweb/cart'><i className="fa-sharp fa-solid fa-cart-shopping"></i>Cart</Link>
          </div> */}
    </div>
    </>
  )
}

export default Pizzaweb