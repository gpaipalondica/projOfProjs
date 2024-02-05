import React from 'react'
import {useContext} from 'react'
import {ShopContext} from './PizzaShopContext'

function MenuItem(props) {
  const {id, type, image, name, price} = props.data
  // console.log(props.data.type);
  
  const {addToCart, cartItems} = useContext(ShopContext)

  const cartItemAmount = cartItems[id]

  return (
    <>
    <div className='menuItem'>
        <div style={{backgroundImage:`url(${image})`}}></div>
        <h1>{name}</h1>
        {/* <p>{type}</p> */}
        <p>${price}</p>
        <button className='addToCartBttn' onClick={() => addToCart(id)}>
          {cartItemAmount > 0 ? <>{cartItemAmount}</> : <>+</>}
        </button>
    </div>
    </>
  )
}

export default MenuItem