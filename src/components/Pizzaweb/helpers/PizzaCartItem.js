import React, {useContext} from 'react'
import { ShopContext } from './PizzaShopContext'
import '../../../styles/pizzaCss/PizzaCart.css'

export const CartItem = (props) => {
  
  const {id, image, name, price} = props.data
  console.log(props.data);

    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext)


  return (
    <div className='pizza-cartItem'>
      <div className="pizza-cartImage">
        <img src={image} />
      </div>
        <div className='description'>
            <p><b>{name}</b></p>
            <p>${price}</p>
            <div className='countHandler'>
                <button onClick={() => removeFromCart(id)}> - </button>
                <input value={cartItems[id]} type="text" onChange={(e) => updateCartItemCount(Number(e.target.value),id)}/>
                <button onClick={() => addToCart(id)}> + </button>
            </div>
        </div>

    </div>
  )
}
