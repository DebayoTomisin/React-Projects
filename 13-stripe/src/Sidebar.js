import React from "react"
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from "./context";


function Sidebar(){
  const { closeSidebar, isSidebarOpen} = useGlobalContext()
  return(
    <aside></aside>
  )
}

export default Sidebar
