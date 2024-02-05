import React from 'react'
import '../../styles/pizzaCss/PizzaCheckout.css'
import '../../styles/pizzaCss/PizzaAbout.css'
import PizzaLoader from '../../assets/pizza/pizza-loading.gif'
import { Link } from 'react-router-dom'
import PizzaNav from './PizzaNav'

function PizzaCheckout() {


  return (<>
  {/* <PizzaNav/> */}
    <div className='pizza-checkoutPage'>
        <div className="checkout-message">
            <h3>Your Order is Placed Successfully !!</h3>
            <p >We are preparing your order. </p>
            <img className='pizza-loader' src={PizzaLoader} alt="" />
        </div>


        <button className='floatBttn3' onClick={() => window.location.href='/pizzaweb'}>
        <i class="fa-solid fa-house" ></i>
        </button>

    </div>
  </>
  )
}

export default PizzaCheckout