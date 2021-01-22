import React from "react"
import {Link} from "react-router-dom"

import logo from "../logo192.png"
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContext } from "./context" 

const SideBar = () => {
  
  const {isSideBarOpen, closeSideBar} = useGlobalContext()
    
  return(
    <aside className={`${isSideBarOpen ? 'sidebar show-sidebar': 'sidebar'}`}>
    	<div className="sidebar-header">
        <img src={logo} alt= "react logo"/>
        <button className="close-btn" onClick={closeSideBar}>
          <FaTimes/>
        </button>
      </div>

      <ul className="links">
        {links.map(link => {
          const {id, url, text, icon} = link
          return(
            <li key={id}>
              <Link to={url}>
                {icon}
                {text}
              </Link>
            </li>
          )
        })}
      </ul>
      <ul className="social-icons">
        {social.map(social => {
          const {id, url, icon} = social
          return (
            <li key={id}>
              <Link to={url}>{icon}</Link>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default SideBar
