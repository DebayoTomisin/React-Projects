import React from "react"
import CartItem from "./CartItem"

import { useGlobalContext } from "./context"
console.log(useGlobalContext)


const Container = () => {

  const {cart, total, clearCart} = useGlobalContext
  
  return(
    <h1> Container</h1>
  )
}

export default Container
