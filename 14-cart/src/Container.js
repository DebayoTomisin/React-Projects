import React from "react"
import CartItem from "./CartItem"

import { useGlobalContext } from "./context"


const Container = () => {

  const {cart, total, clearCart} = useGlobalContext()
  console.log(cart)
  
  if ( cart.length === 0){
    return <section className="cart">
      <header>
        <h2>Your bag</h2>
        <h4>Your cart is currently empty</h4>
      </header>
    </section>
  }

  return <h1>Container</h1>
}

export default Container
