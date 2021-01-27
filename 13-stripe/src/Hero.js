import React from "react"
import {useGlobalContext} from "./context"

function Hero(){
  const data = useGlobalContext()
  console.log(data)
  return(
    <h2>Hero component</h2>
  )
}

export default Hero
