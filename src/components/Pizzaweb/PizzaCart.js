import React, {useContext, useEffect} from 'react'
import { MenuList } from './helpers/PizzaMenuList'
import { ShopContext } from './helpers/PizzaShopContext'
import { CartItem } from './helpers/PizzaCartItem'
import { useNavigate } from 'react-router-dom'
import "../../styles/pizzaCss/PizzaCart.css"
import PizzaNav from './PizzaNav'

function Cart() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
          });
    }, [])

    const {cartItems, getTotalCartAmount} = useContext(ShopContext)
    let total = getTotalCartAmount()

    const navigate = useNavigate()


  return (<>
    <PizzaNav/>
    <div className='pizza-cart'>
        <div>
            <h1>Your Cart Items</h1>
        </div>
        <div className='pizza-cartItems'>
            {MenuList.map((menuItem) => {
                if(cartItems[menuItem.id] !== 0){
                    return <CartItem data={menuItem} />
                }
            })}
        </div>

        {total >0 ? 
        (
            <div className='pizza-checkout'>
                <h3> Subtotal: ${total}</h3>
                <div>
                <button onClick={() => navigate('/pizzaweb/menu')}>Continue Shopping</button>
                <button onClick={() => navigate('/pizzaweb/checkout')}>Checkout</button>
                </div>
            </div>
        )
        :
        (  
            <>
            <h4 style={{marginTop:'80px'}}>Cart is Empty</h4>  
            <button className='emptyBttn' onClick={() => navigate('/pizzaweb/menu')}>Explore Menu</button>
            </>
        )
    }

    </div>
    </>
  )

}

export default Cart
