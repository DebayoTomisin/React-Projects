import React from "react"
import CartItem from "./CartItem"

import { useGlobalContext } from "./context"


const Container = () => {

  const {cart, total, clearCart} = useGlobalContext()
 
    
  if ( cart.length === 0){
    return <section className="cart">
      <header>
        <h2>Your bag</h2>
        <h4>Your cart is currently empty</h4>
      </header>
    </section>
  }

  return(
    <section className="cart">
      <header>
        <h2>Your bag</h2>
      </header>

      <div>
        {cart.map(item => <CartItem {...item} key={item.id}/>)}
      </div>

      <footer>
        <hr/>
        <div className="cart-total">
          <h4> total <span>${total}</span></h4>
        </div>
        <button className="btn clear-btn" onClick={clearCart}>clear cart</button>
      </footer>
    </section>
    
  )
  
}

export default Container
