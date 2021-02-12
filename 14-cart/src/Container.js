import React from "react"
import CartItem from "./CartItem"

import { useGlobalContext } from "./context"

const Container = () => {

  const {cart, total} = useGlobalContext()

  if(cart.length === 0){
    <section className="cart">
      <header>
        <h2>Your bag</h2>
        <h4 className="empty-cart">is currently empty</h4>
      </header>
    </section>
  }

  return(
    <section className="cart">
      
      <header>
        <h2> Your bag</h2>
      </header>

      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item}/>
        })}
      </div>

      <footer>
        <hr/>
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
      </footer>
    </section>
  )
}

export default Container
