import React from "react"
import {useGlobalContext} from "./context"

function Submenu() {
  const {closeSubmenu, openSubmenu, openSidebar} = useGlobalContext()
  return(
    <h2>Submenu</h2>
  )
}

export default Submenu
